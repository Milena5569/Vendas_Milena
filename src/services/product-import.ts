import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase';
import { detectStoreFromUrl, type SupportedStoreSlug } from '@/lib/detect-store-from-url';
import { parseImportUrls } from '@/lib/parse-import-urls';

type ImportStatus = 'created' | 'updated' | 'failed';

interface CategoryRow {
  id: string;
  name: string;
  slug: string;
  is_active: boolean;
}

interface CollectionRow {
  id: string;
  name: string;
  slug: string;
  is_active?: boolean;
}

interface StoreRow {
  id: string;
  name: string;
  slug: string;
}

interface ExistingProductRow {
  id: string;
  slug?: string;
  product_url?: string | null;
  original_url?: string | null;
  normalized_url?: string | null;
}

export interface ProductImportFormData {
  nome: string;
  slug: string;
  descricao_curta: string;
  descricao_completa: string;
  loja_origem: string;
  categoria_id: string;
  subcategoria: string;
  genero: string;
  tipo: string;
  imagem_capa_url: string;
  link_padrao: string;
  preco_original: number | null;
  preco_promocional: number | null;
  moeda: string;
  ativo: boolean;
  disponivel: boolean;
  destaque: boolean;
  ordem_exibicao: number | null;
  tags: string[];
  marca: string;
  sku_externo: string;
  collection_id?: string;
}

export interface ProductDraft {
  draft_id: string;
  source_url: string;
  normalized_url: string;
  suggested_category_slug: string;
  suggested_subcategoria: string;
  suggested_genero: string;
  dedupe: {
    exists: boolean;
    existing_product_id: string | null;
    reason: 'link_padrao' | 'normalized_url' | 'sku_externo' | 'none';
  };
  form: ProductImportFormData;
}

export interface AnalyzeImportResponse {
  success: boolean;
  source: 'supabase';
  processed: number;
  categories: Array<{ id: string; nome: string; slug: string }>;
  collections: Array<{ id: string; nome: string; slug: string }>;
  drafts: ProductDraft[];
  errors: Array<{ source_url: string; message: string }>;
}

export interface SaveDraftPayload {
  draft_id?: string;
  source_url?: string;
  normalized_url?: string;
  dedupe?: ProductDraft['dedupe'];
  form: ProductImportFormData;
  allow_update_existing?: boolean;
}

export interface SaveDraftResponse {
  success: boolean;
  status: ImportStatus;
  message: string;
  product_id?: string;
}

const FALLBACK_IMAGE = '/images/products/luminaria-led.jpg';
const ALLOWED_CATEGORY_LABELS = ['Feminino', 'Masculino', 'Casa', 'Skin Care', 'Infantil'];
const shouldLog = process.env.NODE_ENV !== 'production';

interface SupabaseErrorLike {
  message?: string;
  code?: string;
  details?: string | null;
  hint?: string | null;
}

function getSupabaseErrorDetails(error: unknown): SupabaseErrorLike {
  if (!error || typeof error !== 'object') {
    return {
      message: String(error ?? 'unknown_error'),
    };
  }

  const value = error as SupabaseErrorLike;
  return {
    message: value.message ?? 'unknown_error',
    code: value.code,
    details: value.details ?? null,
    hint: value.hint ?? null,
  };
}

function formatSupabaseError(prefix: string, error: unknown): string {
  const parsed = getSupabaseErrorDetails(error);
  return `${prefix}: ${parsed.message}${parsed.code ? ` (code: ${parsed.code})` : ''}${
    parsed.details ? ` | details: ${parsed.details}` : ''
  }${parsed.hint ? ` | hint: ${parsed.hint}` : ''}`;
}

function logImportDebug(stage: string, payload: Record<string, unknown>) {
  if (!shouldLog) return;
  console.info(`[productImport] ${stage}`, payload);
}

function logImportError(stage: string, error: unknown, context?: Record<string, unknown>) {
  if (!shouldLog) return;
  console.error(`[productImport] ${stage}`, {
    ...(context ?? {}),
    error: getSupabaseErrorDetails(error),
  });
}

function slugify(value: string): string {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 90);
}

function normalizeProductUrl(rawUrl: string): string {
  try {
    const parsed = new URL(String(rawUrl || '').trim());
    parsed.hash = '';
    parsed.pathname = parsed.pathname.replace(/\/+$/, '') || '/';
    return parsed.toString();
  } catch {
    return String(rawUrl || '').trim();
  }
}

function mapStoreSlugToName(slug: SupportedStoreSlug | null): string {
  if (slug === 'shopee') return 'Shopee';
  if (slug === 'shein') return 'Shein';
  if (slug === 'tiktok-shop') return 'TikTok Shop';
  return 'Outros';
}

function normalizeGender(value: string): string {
  const v = String(value || '').toLowerCase();
  if (v.includes('masc')) return 'Masc';
  if (v.includes('fem')) return 'Fem';
  if (v.includes('inf') || v.includes('kid')) return 'Kids';
  return 'Uni';
}

function pickSuggestedCategory(url: string, categories: CategoryRow[]): CategoryRow | null {
  const text = url.toLowerCase();
  const byRule =
    text.includes('inf') || text.includes('kids')
      ? 'infantil'
      : text.includes('skin') || text.includes('beleza')
      ? 'skin-care'
      : text.includes('masc') || text.includes('homem')
      ? 'masculino'
      : text.includes('casa')
      ? 'casa'
      : 'feminino';

  const bySlug = categories.find((category) => category.slug === byRule);
  if (bySlug) return bySlug;
  return categories[0] ?? null;
}

async function ensureUniqueSlug(db: any, requested: string, ignoreId?: string): Promise<string> {
  const base = slugify(requested) || `produto-${Date.now()}`;
  let value = base;
  let i = 1;
  while (i <= 25) {
    const { data } = await db.from('products').select('id').eq('slug', value).limit(5);
    const exists = (data || []).some((row: { id: string }) => row.id !== ignoreId);
    if (!exists) return value;
    i += 1;
    value = `${base}-${i}`;
  }
  return `${base}-${Date.now()}`;
}

function validateRequiredFields(form: ProductImportFormData): string[] {
  const missing: string[] = [];
  if (!String(form.nome || '').trim()) missing.push('nome');
  if (!String(form.link_padrao || '').trim()) missing.push('link_padrao');
  if (!String(form.categoria_id || '').trim()) missing.push('categoria_id');
  return missing;
}

export async function analyzeImportInput(input: string | string[]): Promise<AnalyzeImportResponse> {
  const raw = Array.isArray(input) ? input.join('\n') : input;
  const urls = parseImportUrls(raw);

  if (!isSupabaseConfigured()) {
    return {
      success: false,
      source: 'supabase',
      processed: urls.length,
      categories: [],
      collections: [],
      drafts: [],
      errors: [{ source_url: '', message: 'Supabase não está configurado.' }],
    };
  }

  const supabase = getSupabaseClient();
  if (!supabase) {
    return {
      success: false,
      source: 'supabase',
      processed: urls.length,
      categories: [],
      collections: [],
      drafts: [],
      errors: [{ source_url: '', message: 'Cliente Supabase indisponível.' }],
    };
  }

  const db = supabase as any;
  const [categoriesResponse, existingProductsResponse, collectionsResponse] = await Promise.all([
    db.from('categories').select('id,name,slug,is_active').eq('is_active', true).order('sort_order', { ascending: true }),
    db.from('products').select('id,slug,product_url,original_url,normalized_url').limit(5000),
    db.from('collections').select('id,name,slug,is_active').eq('is_active', true).order('created_at', { ascending: false }),
  ]);

  const categories = ((categoriesResponse.data || []) as CategoryRow[]).filter((item) =>
    ALLOWED_CATEGORY_LABELS.includes(item.name)
  );
  const collections = (collectionsResponse.data || []) as CollectionRow[];
  const existingProducts = (existingProductsResponse.data || []) as ExistingProductRow[];
  const errors: Array<{ source_url: string; message: string }> = [];

  if (categoriesResponse.error) {
    errors.push({ source_url: '', message: formatSupabaseError('Erro ao carregar categorias', categoriesResponse.error) });
  }

  if (collectionsResponse.error) {
    errors.push({
      source_url: '',
      message: formatSupabaseError('Erro ao carregar coleções (campo opcional)', collectionsResponse.error),
    });
    logImportError('analyze_collections_fetch_failed', collectionsResponse.error);
  }

  if (existingProductsResponse.error) {
    errors.push({ source_url: '', message: formatSupabaseError('Erro ao carregar produtos existentes', existingProductsResponse.error) });
  }

  if (urls.length === 0) {
    errors.push({ source_url: '', message: 'Nenhuma URL válida encontrada para análise.' });
  }

  const drafts: ProductDraft[] = [];

  urls.forEach((url, index) => {
    const normalized = normalizeProductUrl(url);
    const storeSlug = detectStoreFromUrl(url);

    if (!storeSlug) {
      errors.push({ source_url: url, message: 'Não foi possível identificar uma loja suportada (Shopee, Shein ou TikTok Shop).' });
      return;
    }

    const suggestedCategory = pickSuggestedCategory(url, categories);
    const foundByExact = existingProducts.find((item) => item.product_url === url || item.original_url === url);
    const foundByNormalized = existingProducts.find((item) => item.normalized_url === normalized);
    const dedupe = foundByExact
      ? { exists: true, existing_product_id: foundByExact.id, reason: 'link_padrao' as const }
      : foundByNormalized
      ? { exists: true, existing_product_id: foundByNormalized.id, reason: 'normalized_url' as const }
      : { exists: false, existing_product_id: null, reason: 'none' as const };

    const nameFromPath = (() => {
      try {
        const path = new URL(url).pathname.split('/').filter(Boolean).pop() || 'produto';
        return path.replace(/[-_]+/g, ' ').slice(0, 100).trim();
      } catch {
        return 'Produto importado';
      }
    })();

    drafts.push({
      draft_id: `${Date.now()}-${index}-${Math.random().toString(36).slice(2, 8)}`,
      source_url: url,
      normalized_url: normalized,
      suggested_category_slug: suggestedCategory?.slug || 'feminino',
      suggested_subcategoria: 'Outros',
      suggested_genero: 'Geral',
      dedupe,
      form: {
        nome: nameFromPath || 'Produto importado',
        slug: slugify(nameFromPath) || `produto-${Date.now()}-${index}`,
        descricao_curta: '',
        descricao_completa: '',
        loja_origem: mapStoreSlugToName(storeSlug),
        categoria_id: suggestedCategory?.id || '',
        subcategoria: 'Outros',
        genero: 'Geral',
        tipo: 'Produto',
        imagem_capa_url: FALLBACK_IMAGE,
        link_padrao: url,
        preco_original: null,
        preco_promocional: null,
        moeda: 'BRL',
        ativo: true,
        disponivel: true,
        destaque: false,
        ordem_exibicao: null,
        tags: ['importado', `normalized_url:${normalized}`],
        marca: '',
        sku_externo: '',
        collection_id: '',
      },
    });
  });

  return {
    success: drafts.length > 0,
    source: 'supabase',
    processed: urls.length,
    categories: categories.map((item) => ({ id: item.id, nome: item.name, slug: item.slug })),
    collections: collections.map((item) => ({ id: item.id, nome: item.name, slug: item.slug })),
    drafts,
    errors,
  };
}

export async function saveReviewedProduct(payload: SaveDraftPayload, dbClient?: any): Promise<SaveDraftResponse> {
  const form = payload.form;
  const missing = validateRequiredFields(form);
  if (missing.length > 0) {
    return { success: false, status: 'failed', message: `Campos obrigatórios ausentes: ${missing.join(', ')}` };
  }

  if (!dbClient && !isSupabaseConfigured()) {
    return { success: false, status: 'failed', message: 'Supabase não está configurado.' };
  }

  const supabase = dbClient ?? getSupabaseClient();
  if (!supabase) {
    return { success: false, status: 'failed', message: 'Cliente Supabase indisponível.' };
  }

  const db = supabase as any;
  const normalizedUrl = payload.normalized_url || normalizeProductUrl(form.link_padrao);
  const storeSlug = detectStoreFromUrl(form.link_padrao) || detectStoreFromUrl(payload.source_url || '');

  if (!storeSlug) {
    return {
      success: false,
      status: 'failed',
      message: 'Não foi possível identificar a loja da URL. Use apenas Shopee, Shein ou TikTok Shop.',
    };
  }

  const { data: storeData, error: storeError } = await db
    .from('stores')
    .select('id,slug,name')
    .eq('slug', storeSlug)
    .maybeSingle();

  if (storeError || !storeData?.id) {
    if (storeError) {
      logImportError('save_store_fetch_failed', storeError, { detectedStoreSlug: storeSlug, link_padrao: form.link_padrao });
    }
    return {
      success: false,
      status: 'failed',
      message: storeError
        ? formatSupabaseError('Loja detectada, mas não encontrada no banco', storeError)
        : 'Loja detectada, mas não encontrada no banco. Verifique a tabela stores.',
    };
  }

  const { data: categoryData } = await db
    .from('categories')
    .select('id')
    .eq('id', form.categoria_id)
    .eq('is_active', true)
    .maybeSingle();

  if (!categoryData?.id) {
    return {
      success: false,
      status: 'failed',
      message: 'Categoria inválida. Selecione uma categoria ativa antes de salvar.',
    };
  }

  const { data: existingProducts } = await db
    .from('products')
    .select('id,slug,product_url,original_url,normalized_url')
    .limit(5000);
  const existingList = (existingProducts || []) as ExistingProductRow[];

  let target = existingList.find((item) => item.id === payload.dedupe?.existing_product_id);
  if (!target) {
    target = existingList.find(
      (item) =>
        item.product_url === form.link_padrao ||
        item.original_url === (payload.source_url || form.link_padrao) ||
        item.normalized_url === normalizedUrl
    );
  }

  const allowUpdateExisting = payload.allow_update_existing !== false;
  if (target && !allowUpdateExisting) {
    return { success: false, status: 'failed', message: 'Produto duplicado encontrado e atualização não autorizada.' };
  }

  const baseSlug = slugify(form.slug || form.nome);
  const uniqueSlug = await ensureUniqueSlug(db, baseSlug, target?.id);
  const now = new Date().toISOString();
  const priceCurrent = Number.isFinite(Number(form.preco_promocional)) ? Number(form.preco_promocional) : Number(form.preco_original);
  const priceOriginal = Number.isFinite(Number(form.preco_original)) ? Number(form.preco_original) : null;

  const dbPayload = {
    name: String(form.nome || '').trim(),
    slug: uniqueSlug,
    short_description: String(form.descricao_curta || '').trim() || null,
    description: String(form.descricao_completa || '').trim() || null,
    image_url: String(form.imagem_capa_url || '').trim() || FALLBACK_IMAGE,
    product_url: String(form.link_padrao || '').trim(),
    original_url: String(payload.source_url || form.link_padrao || '').trim(),
    normalized_url: normalizedUrl,
    price: Number.isFinite(priceCurrent) ? Number(priceCurrent) : null,
    compare_at_price: priceOriginal,
    currency: String(form.moeda || 'BRL').trim() || 'BRL',
    gender: normalizeGender(form.genero),
    source_platform: storeData.name,
    category_id: categoryData.id,
    store_id: storeData.id,
    is_featured: Boolean(form.destaque),
    is_active: Boolean(form.ativo),
    updated_at: now,
  };

  const selectedCollectionId = String(form.collection_id || '').trim();
  logImportDebug('save_start', {
    draft_id: payload.draft_id,
    selected_collection_id: selectedCollectionId || null,
    dedupe_existing_product_id: payload.dedupe?.existing_product_id || null,
  });

  const linkProductToCollectionIfSelected = async (productId: string): Promise<SaveDraftResponse | null> => {
    if (!selectedCollectionId) {
      logImportDebug('save_skip_collection_link', { product_id: productId, reason: 'no_collection_selected' });
      return null;
    }

    const { data: collectionData, error: collectionError } = await db
      .from('collections')
      .select('id,is_active')
      .eq('id', selectedCollectionId)
      .maybeSingle();

    if (collectionError) {
      logImportError('save_collection_validation_failed', collectionError, {
        selectedCollectionId,
        productId,
      });
      return {
        success: false,
        status: 'failed',
        message: formatSupabaseError('Falha ao validar coleção selecionada', collectionError),
      };
    }

    if (!collectionData?.id || collectionData.is_active === false) {
      return {
        success: false,
        status: 'failed',
        message: 'Coleção inválida/inativa. Selecione uma coleção existente e ativa ou deixe o campo em branco.',
      };
    }

    const { data: relationData, error: relationError } = await db
      .from('collection_products')
      .upsert(
        {
          collection_id: selectedCollectionId,
          product_id: productId,
        },
        { onConflict: 'collection_id,product_id' }
      )
      .select('collection_id,product_id')
      .maybeSingle();

    if (relationError) {
      logImportError('save_collection_link_failed', relationError, {
        selectedCollectionId,
        productId,
      });
      return {
        success: false,
        status: 'failed',
        message: formatSupabaseError('Produto criado, mas falha ao associar na coleção', relationError),
        product_id: productId,
      };
    }

    logImportDebug('save_collection_link_success', {
      selected_collection_id: selectedCollectionId,
      product_id: productId,
      relation: relationData ?? null,
    });

    return null;
  };

  if (target?.id) {
    const { error } = await db.from('products').update(dbPayload).eq('id', target.id);
    if (error) {
      logImportError('save_update_product_failed', error, { productId: target.id });
      return { success: false, status: 'failed', message: formatSupabaseError('Falha ao atualizar produto', error) };
    }

    const linkError = await linkProductToCollectionIfSelected(target.id);
    if (linkError) {
      return linkError;
    }

    logImportDebug('save_update_product_success', {
      product_id: target.id,
      selected_collection_id: selectedCollectionId || null,
      final_status: 'updated',
    });

    return {
      success: true,
      status: 'updated',
      message: 'Produto atualizado com sucesso usando store_id resolvido automaticamente.',
      product_id: target.id,
    };
  }

  const { data, error } = await db.from('products').insert({ ...dbPayload, created_at: now }).select('id').single();
  if (error || !data?.id) {
    if (error) {
      logImportError('save_create_product_failed', error, {
        selected_collection_id: selectedCollectionId || null,
      });
    }
    return { success: false, status: 'failed', message: formatSupabaseError('Falha ao criar produto', error || 'erro desconhecido') };
  }

  logImportDebug('save_create_product_success', {
    created_product_id: data.id,
    selected_collection_id: selectedCollectionId || null,
  });

  const linkError = await linkProductToCollectionIfSelected(data.id);
  if (linkError) {
    return linkError;
  }

  logImportDebug('save_finish_success', {
    created_product_id: data.id,
    selected_collection_id: selectedCollectionId || null,
    final_status: 'created',
  });

  return {
    success: true,
    status: 'created',
    message: 'Produto criado com sucesso usando store_id resolvido automaticamente.',
    product_id: data.id,
  };
}
