import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase';

const SUPPORTED_STORES = [
  {
    name: 'Shein',
    slug: 'shein',
    description: 'Moda em alta',
    status: 'Loja ativa',
    highlight: 'Em destaque',
  },
  {
    name: 'Shopee',
    slug: 'shopee',
    description: 'Ofertas virais',
    status: 'Loja ativa',
    highlight: 'Em destaque',
  },
  {
    name: 'TikTok Shop',
    slug: 'tiktok-shop',
    description: 'Produtos virais',
    status: 'Loja ativa',
    highlight: 'Em destaque',
  },
] as const;

const SUPPORTED_STORE_SLUGS = SUPPORTED_STORES.map((store) => store.slug);
const storeOrder = new Map<string, number>(SUPPORTED_STORE_SLUGS.map((slug, index) => [slug, index]));

const shouldLog = process.env.NODE_ENV !== 'production';

function logServiceError(message: string, error: unknown) {
  if (!shouldLog) return;
  console.error(message, {
    error: error instanceof Error ? error.message : String(error ?? 'unknown_error'),
  });
}

export interface StoreItem {
  id: string;
  name: string;
  slug: string;
  logo_url?: string | null;
  website_url?: string | null;
  description?: string | null;
  is_featured: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

function sortStoresBySupportedOrder(stores: StoreItem[]): StoreItem[] {
  return [...stores].sort((a, b) => {
    const orderA = storeOrder.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
    const orderB = storeOrder.get(b.slug) ?? Number.MAX_SAFE_INTEGER;
    return orderA - orderB;
  });
}

export const storesService = {
  async getFeaturedStores(limit: number = 3): Promise<StoreItem[]> {
    if (!isSupabaseConfigured()) return [];
    const supabase = getSupabaseClient();
    if (!supabase) return [];

    const { data, error } = await supabase
      .from('stores')
      .select('*')
      .eq('is_active', true)
      .in('slug', SUPPORTED_STORE_SLUGS);

    if (error) {
      logServiceError('Error fetching featured stores', error);
      return [];
    }

    return sortStoresBySupportedOrder((data ?? []) as StoreItem[]).slice(0, limit);
  },

  async getAllStores(): Promise<StoreItem[]> {
    if (!isSupabaseConfigured()) return [];
    const supabase = getSupabaseClient();
    if (!supabase) return [];

    const { data, error } = await supabase
      .from('stores')
      .select('*')
      .eq('is_active', true)
      .in('slug', SUPPORTED_STORE_SLUGS);

    if (error) {
      logServiceError('Error fetching stores', error);
      return [];
    }

    return sortStoresBySupportedOrder((data ?? []) as StoreItem[]);
  },

  async getStoreBySlug(slug: string): Promise<StoreItem | null> {
    if (!SUPPORTED_STORE_SLUGS.includes(slug as (typeof SUPPORTED_STORE_SLUGS)[number])) {
      return null;
    }

    if (!isSupabaseConfigured()) return null;
    const supabase = getSupabaseClient();
    if (!supabase) return null;

    const { data, error } = await supabase
      .from('stores')
      .select('*')
      .eq('slug', slug)
      .eq('is_active', true)
      .maybeSingle();

    if (error) {
      logServiceError('Error fetching store by slug', error);
      return null;
    }

    return (data as StoreItem) ?? null;
  },
};
