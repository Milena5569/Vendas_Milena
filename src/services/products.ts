import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase';
import { Product, ProductGender, ProductLink, ProductType, StoreOrigin } from '@/types/product';
import { Category } from '@/types/category';

const shouldLog = process.env.NODE_ENV !== 'production';

function logServiceError(message: string, error: unknown, context?: Record<string, unknown>) {
  if (!shouldLog) return;
  console.error(message, {
    ...(context ?? {}),
    error: error instanceof Error ? error.message : String(error ?? 'unknown_error'),
  });
}

interface ProductRow {
  id: string;
  name: string;
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

const productSelect = `
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
`;

const productSelectWithInnerStore = `
  *,
  categories (
    id,
    name,
    slug
  ),
  stores!inner (
    id,
    name,
    slug
  )
`;

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
  return {
    id: row.categories?.id || row.category_id || 'sem-categoria',
    name: row.categories?.name || 'Categoria',
    slug: row.categories?.slug || 'categoria',
    isActive: true,
    createdAt: new Date(row.created_at),
    updatedAt: new Date(row.updated_at),
  };
}

function mapProductRowToProduct(row: ProductRow): Product {
  const store = mapStoreOrigin(row.stores?.name || row.source_platform);
  const safeCurrentPrice = Number(row.price ?? 0);
  const safeOriginalPrice = Number(row.compare_at_price ?? row.price ?? 0);
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
    name: row.name,
    slug: row.slug,
    description: row.description || undefined,
    shortDescription: row.short_description || undefined,
    price: Number.isFinite(safeOriginalPrice) ? safeOriginalPrice : 0,
    discountPrice: Number.isFinite(safeCurrentPrice) ? safeCurrentPrice : 0,
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

export const productsService = {
  async getAllProducts(limit?: number): Promise<Product[]> {
    if (!isSupabaseConfigured()) return [];
    const supabase = getSupabaseClient();
    if (!supabase) return [];

    let query = supabase
      .from('products')
      .select(productSelect)
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (typeof limit === 'number') {
      query = query.limit(limit);
    }

    const { data, error } = await query;

    if (error) {
      logServiceError('Error fetching all products', error, { limit });
      return [];
    }

    return ((data ?? []) as ProductRow[]).map(mapProductRowToProduct);
  },

  async getFeaturedProducts(limit: number = 12): Promise<Product[]> {
    if (!isSupabaseConfigured()) return [];
    const supabase = getSupabaseClient();
    if (!supabase) return [];

    const { data, error } = await supabase
      .from('products')
      .select(productSelect)
      .eq('is_active', true)
      .eq('is_featured', true)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      logServiceError('Error fetching featured products', error);
      return [];
    }

    return ((data ?? []) as ProductRow[]).map(mapProductRowToProduct);
  },

  async getProductsByCategory(categoryId: string): Promise<Product[]> {
    if (!isSupabaseConfigured()) return [];
    const supabase = getSupabaseClient();
    if (!supabase) return [];

    const { data, error } = await supabase
      .from('products')
      .select(productSelect)
      .eq('is_active', true)
      .eq('category_id', categoryId)
      .order('created_at', { ascending: false });

    if (error) {
      logServiceError('Error fetching products by category', error, { categoryId });
      return [];
    }

    return ((data ?? []) as ProductRow[]).map(mapProductRowToProduct);
  },

  async getProductBySlug(slug: string): Promise<Product | null> {
    if (!isSupabaseConfigured()) return null;
    const supabase = getSupabaseClient();
    if (!supabase) return null;

    const { data, error } = await supabase
      .from('products')
      .select(productSelect)
      .eq('slug', slug)
      .eq('is_active', true)
      .maybeSingle();

    if (error) {
      logServiceError('Error fetching product by slug', error, { slug });
      return null;
    }

    return data ? mapProductRowToProduct(data as ProductRow) : null;
  },

  async getProductImages(productId: string) {
    const product = await this.getProductById(productId);
    return product?.images ?? [];
  },

  async getPrimaryProductLink(productId: string) {
    const product = await this.getProductById(productId);
    return product?.links?.[0] ?? null;
  },

  async getProductById(productId: string): Promise<Product | null> {
    if (!isSupabaseConfigured()) return null;
    const supabase = getSupabaseClient();
    if (!supabase) return null;

    const { data, error } = await supabase
      .from('products')
      .select(productSelect)
      .eq('id', productId)
      .eq('is_active', true)
      .maybeSingle();

    if (error) {
      logServiceError('Error fetching product by id', error, { productId });
      return null;
    }

    return data ? mapProductRowToProduct(data as ProductRow) : null;
  },

  async getProductsByStoreSlug(storeSlug: string, limit?: number): Promise<Product[]> {
    if (!isSupabaseConfigured()) return [];
    const supabase = getSupabaseClient();
    if (!supabase) return [];

    let query = supabase
      .from('products')
      .select(productSelectWithInnerStore)
      .eq('is_active', true)
      .eq('stores.slug', storeSlug)
      .order('created_at', { ascending: false });

    if (typeof limit === 'number') {
      query = query.limit(limit);
    }

    const { data, error } = await query;

    if (error) {
      logServiceError('Error fetching products by store slug', error, { storeSlug, limit });
      return [];
    }

    return ((data ?? []) as ProductRow[]).map(mapProductRowToProduct);
  },
};
