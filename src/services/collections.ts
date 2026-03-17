import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase';
import { Collection } from '@/types/collection';
import { Category } from '@/types/category';
import { Product, ProductGender, ProductLink, ProductType, StoreOrigin } from '@/types/product';

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

function logServiceError(message: string, error: unknown, context?: Record<string, unknown>) {
  if (!shouldLog) return;
  const parsedError = getSupabaseErrorDetails(error);

  console.error(message, {
    ...(context ?? {}),
    error: parsedError,
  });
}

function logCollectionDebug(stage: string, payload: Record<string, unknown>) {
  if (!shouldLog) return;
  console.info(`[collectionsService] ${stage}`, payload);
}

function isMissingColumnError(error: unknown, columnName: string): boolean {
  const parsed = getSupabaseErrorDetails(error);
  if (parsed.code !== '42703') return false;
  return (parsed.message ?? '').toLowerCase().includes(columnName.toLowerCase());
}

interface CollectionRow {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  cover_image?: string | null;
  cover_image_url?: string | null;
  is_featured?: boolean;
  is_active?: boolean;
  created_at: string;
  updated_at?: string;
  collection_products?: CollectionProductRow[];
}

interface CollectionProductRow {
  id: string;
  collection_id: string;
  product_id: string;
  created_at: string;
  products?: ProductRow | ProductRow[] | null;
}

interface ProductRow {
  id: string;
  name: string;
  title?: string | null;
  slug: string;
  short_description?: string | null;
  description?: string | null;
  image_url?: string | null;
  product_url?: string | null;
  original_url?: string | null;
  price?: number | null;
  compare_at_price?: number | null;
  gender?: string | null;
  source_platform?: string | null;
  category_id?: string | null;
  is_featured: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  categories?: {
    id: string;
    name: string;
    slug: string;
  } | null;
  stores?: {
    id: string;
    name: string;
    slug: string;
  } | null;
}

const COLLECTION_PRODUCTS_SELECT = `
  *,
  collection_products(
    *,
    products(
      *,
      categories (
        id,
        name,
        slug
      ),
      stores (
        id,
        name,
        slug
      )
    )
  )
`;

const COLLECTION_PRODUCTS_BY_COLLECTION_SELECT = `
  id,
  collection_id,
  product_id,
  created_at,
  products(
    *,
    categories (
      id,
      name,
      slug
    ),
    stores (
      id,
      name,
      slug
    )
  )
`;

function normalizeCollectionRow(row: Record<string, unknown>): CollectionRow {
  return {
    id: String(row.id ?? ''),
    name: String(row.name ?? ''),
    slug: String(row.slug ?? ''),
    description: typeof row.description === 'string' ? row.description : null,
    cover_image: typeof row.cover_image === 'string' ? row.cover_image : null,
    cover_image_url: typeof row.cover_image_url === 'string' ? row.cover_image_url : null,
    is_featured: typeof row.is_featured === 'boolean' ? row.is_featured : false,
    is_active: typeof row.is_active === 'boolean' ? row.is_active : true,
    created_at: String(row.created_at ?? new Date().toISOString()),
    updated_at: typeof row.updated_at === 'string' ? row.updated_at : undefined,
  };
}

async function getCollectionProductsMap(
  collectionIds: string[]
): Promise<Map<string, CollectionProductRow[]>> {
  const mapped = new Map<string, CollectionProductRow[]>();
  if (!collectionIds.length) return mapped;
  if (!isSupabaseConfigured()) return mapped;

  const supabase = getSupabaseClient();
  if (!supabase) return mapped;

  const { data, error } = await supabase
    .from('collection_products')
    .select(COLLECTION_PRODUCTS_BY_COLLECTION_SELECT)
    .in('collection_id', collectionIds);

  if (error) {
    logServiceError('Error fetching collection_products for collections', error, {
      collectionIdsCount: collectionIds.length,
      stage: 'collection_products_join',
    });
    return mapped;
  }

  logCollectionDebug('collection_products_fetched', {
    fetchedRows: (data ?? []).length,
    requestedCollectionIds: collectionIds,
  });

  for (const item of (data ?? []) as CollectionProductRow[]) {
    const existing = mapped.get(item.collection_id) ?? [];
    existing.push(item);
    mapped.set(item.collection_id, existing);
  }

  return mapped;
}

function sanitizeSlug(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 120);
}

function buildUniqueSlugCandidate(baseSlug: string, suffix: number): string {
  if (suffix <= 0) return baseSlug;
  const maxBaseLength = 120 - (`-${suffix}`).length;
  return `${baseSlug.slice(0, maxBaseLength)}-${suffix}`;
}

async function ensureUniqueCollectionSlug(name: string): Promise<string> {
  if (!isSupabaseConfigured()) {
    return sanitizeSlug(name) || `colecao-${Date.now()}`;
  }

  const supabase = getSupabaseClient();
  if (!supabase) {
    return sanitizeSlug(name) || `colecao-${Date.now()}`;
  }

  const baseSlug = sanitizeSlug(name) || `colecao-${Date.now()}`;

  const { data, error } = await supabase
    .from('collections')
    .select('slug')
    .ilike('slug', `${baseSlug}%`);

  if (error) {
    logServiceError('Error checking slug uniqueness', error, { baseSlug });
    return baseSlug;
  }

  const existingSlugs = new Set((data ?? []).map((item: { slug: string }) => item.slug));
  if (!existingSlugs.has(baseSlug)) {
    return baseSlug;
  }

  let suffix = 1;
  while (existingSlugs.has(buildUniqueSlugCandidate(baseSlug, suffix))) {
    suffix += 1;
  }

  return buildUniqueSlugCandidate(baseSlug, suffix);
}

function mapGender(value?: string | null): ProductGender {
  const normalized = (value || '').toLowerCase();
  if (normalized.includes('masc')) return 'Masc';
  if (normalized.includes('fem')) return 'Fem';
  if (normalized.includes('inf') || normalized.includes('kid')) return 'Kids';
  return 'Uni';
}

function mapStoreOrigin(value?: string | null): StoreOrigin {
  const normalized = (value || '').toLowerCase();
  if (normalized.includes('shopee')) return 'Shopee';
  if (normalized.includes('shein')) return 'Shein';
  if (normalized.includes('tiktok')) return 'TikTok Shop';
  return 'Outros';
}

function mapCategory(row: ProductRow): Category {
  const createdAt = row.created_at || new Date().toISOString();
  const updatedAt = row.updated_at || createdAt;

  return {
    id: row.categories?.id || row.category_id || 'sem-categoria',
    name: row.categories?.name || 'Categoria',
    slug: row.categories?.slug || 'categoria',
    isActive: true,
    createdAt: new Date(createdAt),
    updatedAt: new Date(updatedAt),
  };
}

function mapProduct(row: ProductRow): Product {
  const store = mapStoreOrigin(row.stores?.name || row.source_platform);
  const price = Number(row.price ?? 0);
  const compare = Number(row.compare_at_price ?? row.price ?? 0);
  const primaryUrl = row.product_url || row.original_url;

  const links: ProductLink[] = primaryUrl
    ? [
        {
          id: `${row.id}-primary-link`,
          url: primaryUrl,
          store,
          isActive: true,
          createdAt: new Date(row.created_at),
        },
      ]
    : [];

  const images = row.image_url
    ? [
        {
          id: `${row.id}-primary-image`,
          url: row.image_url,
          isPrimary: true,
        },
      ]
    : [];

  return {
    id: row.id,
    name: row.name || row.title || 'Produto',
    slug: row.slug || row.id,
    description: row.description || undefined,
    shortDescription: row.short_description || undefined,
    price: Number.isFinite(compare) ? compare : 0,
    discountPrice: Number.isFinite(price) ? price : 0,
    category: mapCategory(row),
    gender: mapGender(row.gender),
    type: 'Individual' as ProductType,
    images,
    links,
    isFeatured: Boolean(row.is_featured),
    isHot: false,
    viewCount: 0,
    isActive: Boolean(row.is_active),
    createdAt: new Date(row.created_at),
    updatedAt: new Date(row.updated_at),
  };
}

function mapCollection(row: CollectionRow): Collection {
  const collectionProducts = (row.collection_products ?? [])
    .map((item) => {
      const productRow = Array.isArray(item.products) ? item.products[0] : item.products;
      if (!productRow || !productRow.is_active) return null;

      return {
        id: item.id,
        product: mapProduct(productRow),
        order: 0,
        isFeatured: false,
        createdAt: new Date(item.created_at),
      };
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    description: row.description || undefined,
    image: row.cover_image || row.cover_image_url || undefined,
    products: collectionProducts,
    isFeatured: Boolean(row.is_featured),
    isActive: row.is_active ?? true,
    createdAt: new Date(row.created_at),
    updatedAt: new Date(row.updated_at || row.created_at),
  };
}

export const collectionsService = {
  async createCollection(input: {
    name: string;
    description?: string;
    coverImage?: string;
    isFeatured?: boolean;
  }): Promise<Collection | null> {
    if (!isSupabaseConfigured()) return null;
    const supabase = getSupabaseClient();
    if (!supabase) return null;

    const trimmedName = input.name.trim();
    if (!trimmedName) return null;

    const slug = await ensureUniqueCollectionSlug(trimmedName);

    let { data, error } = await supabase
      .from('collections')
      .insert({
        name: trimmedName,
        slug,
        description: input.description?.trim() || null,
        cover_image: input.coverImage || null,
        is_featured: Boolean(input.isFeatured),
      })
      .select(COLLECTION_PRODUCTS_SELECT)
      .single();

    if (error && isMissingColumnError(error, 'cover_image')) {
      const fallbackInsert = await supabase
        .from('collections')
        .insert({
          name: trimmedName,
          slug,
          description: input.description?.trim() || null,
          cover_image_url: input.coverImage || null,
          is_featured: Boolean(input.isFeatured),
        })
        .select(COLLECTION_PRODUCTS_SELECT)
        .single();

      data = fallbackInsert.data;
      error = fallbackInsert.error;
    }

    if (error) {
      logServiceError('Error creating collection', error, { name: trimmedName, slug });
      return null;
    }

    return mapCollection(data as CollectionRow);
  },

  async addProductToCollection(collectionId: string, productId: string): Promise<boolean> {
    if (!isSupabaseConfigured()) return false;
    const supabase = getSupabaseClient();
    if (!supabase) return false;

    const { error } = await supabase
      .from('collection_products')
      .upsert(
        {
          collection_id: collectionId,
          product_id: productId,
        },
        { onConflict: 'collection_id,product_id' }
      );

    if (error) {
      logServiceError('Error adding product to collection', error, { collectionId, productId });
      return false;
    }

    return true;
  },

  async removeProductFromCollection(collectionId: string, productId: string): Promise<boolean> {
    if (!isSupabaseConfigured()) return false;
    const supabase = getSupabaseClient();
    if (!supabase) return false;

    const { error } = await supabase
      .from('collection_products')
      .delete()
      .eq('collection_id', collectionId)
      .eq('product_id', productId);

    if (error) {
      logServiceError('Error removing product from collection', error, { collectionId, productId });
      return false;
    }

    return true;
  },

  async getAllCollections(limit?: number): Promise<Collection[]> {
    if (!isSupabaseConfigured()) return [];
    const supabase = getSupabaseClient();
    if (!supabase) return [];

    let queryWithFilters = supabase.from('collections').select('*').eq('is_active', true).order('created_at', {
      ascending: false,
    });
    if (typeof limit === 'number') queryWithFilters = queryWithFilters.limit(limit);

    let { data, error } = await queryWithFilters;

    if (error && isMissingColumnError(error, 'is_active')) {
      let baselineQuery = supabase.from('collections').select('*').order('created_at', { ascending: false });
      if (typeof limit === 'number') baselineQuery = baselineQuery.limit(limit);
      const fallbackResult = await baselineQuery;
      data = fallbackResult.data;
      error = fallbackResult.error;
    }

    if (error) {
      logServiceError('Error fetching all collections', error, {
        limit,
        stage: 'collections_baseline_select',
      });
      return [];
    }

    const baseRows = ((data ?? []) as Record<string, unknown>[]).map(normalizeCollectionRow);
    logCollectionDebug('collections_fetched', {
      totalCollections: baseRows.length,
      collectionIds: baseRows.map((row) => row.id),
      collectionNames: baseRows.map((row) => row.name),
    });

    const productsByCollection = await getCollectionProductsMap(baseRows.map((row) => row.id));
    const mappedCollections = baseRows.map((row) =>
      mapCollection({
        ...row,
        collection_products: productsByCollection.get(row.id) ?? [],
      })
    );

    logCollectionDebug('collections_mapped', {
      productCountsByCollection: mappedCollections.map((collection) => ({
        id: collection.id,
        name: collection.name,
        productCount: collection.products.length,
      })),
      nonEmptyCollections: mappedCollections
        .filter((collection) => collection.products.length > 0)
        .map((collection) => ({ id: collection.id, name: collection.name })),
    });

    return mappedCollections;
  },

  async getFeaturedCollections(limit: number = 6): Promise<Collection[]> {
    if (!isSupabaseConfigured()) return [];
    const supabase = getSupabaseClient();
    if (!supabase) return [];

    let featuredQuery = supabase
      .from('collections')
      .select('*')
      .eq('is_active', true)
      .eq('is_featured', true)
      .order('created_at', { ascending: false })
      .limit(limit);

    let { data, error } = await featuredQuery;

    if (error && isMissingColumnError(error, 'is_active')) {
      const retryWithoutIsActive = await supabase
        .from('collections')
        .select('*')
        .eq('is_featured', true)
        .order('created_at', { ascending: false })
        .limit(limit);
      data = retryWithoutIsActive.data;
      error = retryWithoutIsActive.error;
    }

    if (error && isMissingColumnError(error, 'is_featured')) {
      return [];
    }

    if (error) {
      logServiceError('Error fetching featured collections', error, {
        limit,
        stage: 'featured_collections_baseline_select',
      });
      return [];
    }

    const baseRows = ((data ?? []) as Record<string, unknown>[]).map(normalizeCollectionRow);
    const productsByCollection = await getCollectionProductsMap(baseRows.map((row) => row.id));

    return baseRows.map((row) =>
      mapCollection({
        ...row,
        collection_products: productsByCollection.get(row.id) ?? [],
      })
    );
  },

  async getCollectionBySlug(slug: string): Promise<Collection | null> {
    if (!isSupabaseConfigured()) return null;
    const supabase = getSupabaseClient();
    if (!supabase) return null;

    let query = supabase
      .from('collections')
      .select(COLLECTION_PRODUCTS_SELECT)
      .eq('slug', slug)
      .eq('is_active', true)
      .maybeSingle();

    let { data, error } = await query;

    if (error && isMissingColumnError(error, 'is_active')) {
      const fallback = await supabase
        .from('collections')
        .select(COLLECTION_PRODUCTS_SELECT)
        .eq('slug', slug)
        .maybeSingle();
      data = fallback.data;
      error = fallback.error;
    }

    if (error) {
      logServiceError('Error fetching collection by slug', error, { slug });
      return null;
    }

    if (!data) return null;

    const mapped = mapCollection(data as CollectionRow);
    logCollectionDebug('collection_by_slug_mapped', {
      slug,
      collectionId: mapped.id,
      productCount: mapped.products.length,
      productIds: mapped.products.map((item) => item.product.id),
    });

    return mapped.products.length > 0 ? mapped : null;
  },

  async getProductsByCollection(collectionId: string): Promise<Product[]> {
    if (!isSupabaseConfigured()) return [];
    const supabase = getSupabaseClient();
    if (!supabase) return [];

    const { data, error } = await supabase
      .from('collection_products')
      .select(`
        *,
        products(
          *,
          categories (
            id,
            name,
            slug
          ),
          stores (
            id,
            name,
            slug
          )
        )
      `)
      .eq('collection_id', collectionId);

    if (error) {
      logServiceError('Error fetching collection products', error, { collectionId });
      return [];
    }

    return ((data ?? []) as CollectionProductRow[])
      .map((item) => (Array.isArray(item.products) ? item.products[0] : item.products))
      .filter((item): item is ProductRow => Boolean(item && item.is_active))
      .map(mapProduct);
  },

  async getCollectionProducts(collectionId: string): Promise<Product[]> {
    return this.getProductsByCollection(collectionId);
  },

  sanitizeCollectionSlug(name: string): string {
    return sanitizeSlug(name);
  },

  async generateUniqueCollectionSlug(name: string): Promise<string> {
    return ensureUniqueCollectionSlug(name);
  },
};
