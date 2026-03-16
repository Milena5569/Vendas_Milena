import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase';
import { Category } from '@/types/category';

const shouldLog = process.env.NODE_ENV !== 'production';

function logServiceError(message: string, error: unknown, context?: Record<string, unknown>) {
  if (!shouldLog) return;
  console.error(message, {
    ...(context ?? {}),
    error: error instanceof Error ? error.message : String(error ?? 'unknown_error'),
  });
}

interface CategoryRow {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  is_active: boolean;
  sort_order?: number | null;
  created_at: string;
  updated_at: string;
}

function mapCategory(row: CategoryRow): Category {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    description: row.description ?? undefined,
    order: row.sort_order ?? undefined,
    isActive: row.is_active,
    createdAt: new Date(row.created_at),
    updatedAt: new Date(row.updated_at),
  };
}

export const categoriesService = {
  /**
   * Get all active categories ordered by display order
   */
  async getAllCategories(): Promise<Category[]> {
    if (!isSupabaseConfigured()) return [];
    const supabase = getSupabaseClient();
    if (!supabase) return [];
    
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true });

    if (error) {
      logServiceError('Error fetching categories', error);
      return [];
    }

    return ((data ?? []) as CategoryRow[]).map(mapCategory);
  },

  /**
   * Get category by slug
   */
  async getCategoryBySlug(slug: string): Promise<Category | null> {
    if (!isSupabaseConfigured()) return null;
    const supabase = getSupabaseClient();
    if (!supabase) return null;
    
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('slug', slug)
      .eq('is_active', true)
      .single();

    if (error) {
      logServiceError('Error fetching category by slug', error, { slug });
      return null;
    }

    return data ? mapCategory(data as CategoryRow) : null;
  }
};
