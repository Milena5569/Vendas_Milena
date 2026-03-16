import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase';
import { Collection } from '@/types/collection';
import { Category } from '@/types/category';
import { Product, ProductGender, ProductLink, ProductType, StoreOrigin } from '@/types/product';

const shouldLog = process.env.NODE_ENV !== 'production';

function logServiceError(message: string, error: unknown, context?: Record<string, unknown>) {
  if (!shouldLog) return;
  console.error(message, {
    ...(context ?? {}),
    error: error instanceof Error ? error.message : String(error ?? 'unknown_error'),
  });
}

interface CollectionRow {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  cover_image_url?: string | null;
  is_featured: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  collection_products?: CollectionProductRow[];
}

interface CollectionProductRow {
  id: string;
  collection_id: string;
  product_id: string;
  created_at: string;
  products?: ProductRow | null;
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
    name: row.name,
    slug: row.slug,
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
    .filter((item) => item.products && item.products.is_active)
    .map((item) => ({
      id: item.id,
      product: mapProduct(item.products as ProductRow),
      order: 0,
      isFeatured: false,
      createdAt: new Date(item.created_at),
    }));

  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    description: row.description || undefined,
    image: row.cover_image_url || undefined,
    products: collectionProducts,
    isFeatured: Boolean(row.is_featured),
    isActive: Boolean(row.is_active),
    createdAt: new Date(row.created_at),
    updatedAt: new Date(row.updated_at),
  };
}

export const collectionsService = {
  async getAllCollections(limit?: number): Promise<Collection[]> {
    if (!isSupabaseConfigured()) return [];
    const supabase = getSupabaseClient();
    if (!supabase) return [];

    let query = supabase
      .from('collections')
      .select(COLLECTION_PRODUCTS_SELECT)
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (typeof limit === 'number') {
      query = query.limit(limit);
    }

    const { data, error } = await query;

    if (error) {
      logServiceError('Error fetching all collections', error, { limit });
      return [];
    }

    return ((data ?? []) as CollectionRow[])
      .map(mapCollection)
      .filter((collection) => collection.products.length > 0);
  },

  async getFeaturedCollections(limit: number = 6): Promise<Collection[]> {
    if (!isSupabaseConfigured()) return [];
    const supabase = getSupabaseClient();
    if (!supabase) return [];

    const { data, error } = await supabase
      .from('collections')
      .select(COLLECTION_PRODUCTS_SELECT)
      .eq('is_active', true)
      .eq('is_featured', true)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      logServiceError('Error fetching featured collections', error);
      return [];
    }

    return ((data ?? []) as CollectionRow[])
      .map(mapCollection)
      .filter((collection) => collection.products.length > 0);
  },

  async getCollectionBySlug(slug: string): Promise<Collection | null> {
    if (!isSupabaseConfigured()) return null;
    const supabase = getSupabaseClient();
    if (!supabase) return null;

    const { data, error } = await supabase
      .from('collections')
      .select(COLLECTION_PRODUCTS_SELECT)
      .eq('slug', slug)
      .eq('is_active', true)
      .maybeSingle();

    if (error) {
      logServiceError('Error fetching collection by slug', error, { slug });
      return null;
    }

    return data ? mapCollection(data as CollectionRow) : null;
  },

  async getCollectionProducts(collectionId: string): Promise<Product[]> {
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
      .map((item) => item.products)
      .filter((item): item is ProductRow => Boolean(item && item.is_active))
      .map(mapProduct);
  },
};
