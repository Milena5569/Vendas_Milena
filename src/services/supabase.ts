import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase';

// Type definitions for database operations
interface ProductWithRelations {
  id: string;
  name: string;
  slug: string;
  description?: string;
  price: number;
  discount_price?: number;
  category_id: string;
  gender: string;
  type: string;
  is_featured: boolean;
  is_hot: boolean;
  view_count: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  category: {
    id: string;
    name: string;
    slug: string;
    description?: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
  };
  links: Array<{
    id: string;
    url: string;
    store: string;
    is_active: boolean;
    created_at: string;
  }>;
  images: Array<{
    id: string;
    url: string;
    alt?: string;
    order: number;
    is_primary: boolean;
    created_at: string;
  }>;
}

interface CollectionWithProducts {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  is_featured: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  products: Array<{
    id: string;
    product_id: string;
    order: number;
    is_featured: boolean;
    created_at: string;
    product: ProductWithRelations;
  }>;
}

// Product operations
export const productOperations = {
  getAll: async () => {
    if (!isSupabaseConfigured()) return null;
    const supabase = getSupabaseClient();
    if (!supabase) return null;
    
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        category:categories(*),
        links(*),
        images(*)
      `)
      .eq('is_active', true);
    
    if (error) throw error;
    return data;
  },

  getBySlug: async (slug: string) => {
    if (!isSupabaseConfigured()) return null;
    const supabase = getSupabaseClient();
    if (!supabase) return null;
    
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        category:categories(*),
        links(*),
        images(*)
      `)
      .eq('slug', slug)
      .eq('is_active', true)
      .single();
    
    if (error) throw error;
    return data;
  },

  getByCategory: async (categoryId: string) => {
    if (!isSupabaseConfigured()) return null;
    const supabase = getSupabaseClient();
    if (!supabase) return null;
    
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        category:categories(*),
        links(*),
        images(*)
      `)
      .eq('category_id', categoryId)
      .eq('is_active', true);
    
    if (error) throw error;
    return data;
  }
};

// Category operations
export const categoryOperations = {
  getAll: async () => {
    if (!isSupabaseConfigured()) return null;
    const supabase = getSupabaseClient();
    if (!supabase) return null;
    
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('is_active', true)
      .order('order', { ascending: true });
    
    if (error) throw error;
    return data;
  },

  getBySlug: async (slug: string) => {
    if (!isSupabaseConfigured()) return null;
    const supabase = getSupabaseClient();
    if (!supabase) return null;
    
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('slug', slug)
      .eq('is_active', true)
      .single();
    
    if (error) throw error;
    return data;
  }
};

// Collection operations
export const collectionOperations = {
  getAll: async () => {
    if (!isSupabaseConfigured()) return null;
    const supabase = getSupabaseClient();
    if (!supabase) return null;
    
    const { data, error } = await supabase
      .from('collections')
      .select(`
        *,
        products:collection_products(
          *,
          product:products(
            *,
            category:categories(*),
            links(*),
            images(*)
          )
        )
      `)
      .eq('is_active', true);
    
    if (error) throw error;
    return data;
  },

  getBySlug: async (slug: string) => {
    if (!isSupabaseConfigured()) return null;
    const supabase = getSupabaseClient();
    if (!supabase) return null;
    
    const { data, error } = await supabase
      .from('collections')
      .select(`
        *,
        products:collection_products(
          *,
          product:products(
            *,
            category:categories(*),
            links(*),
            images(*)
          )
        )
      `)
      .eq('slug', slug)
      .eq('is_active', true)
      .single();
    
    if (error) throw error;
    return data;
  }
};
