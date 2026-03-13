import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase';
import { Product, ProductImage, ProductLink } from '@/types/product';
import { Category } from '@/types/category';

// Type definitions for database responses
interface ProductWithRelations {
  id: string;
  name: string;
  slug: string;
  description?: string;
  short_description?: string;
  price: number;
  discount_price?: number;
  category_id: string;
  gender: string;
  type: string;
  tags?: string[];
  is_featured: boolean;
  is_hot: boolean;
  view_count: number;
  order?: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  category: Category;
  images: ProductImage[];
  links: ProductLink[];
}

export const productsService = {
  /**
   * Get featured products for homepage
   */
  async getFeaturedProducts(limit: number = 12): Promise<Product[]> {
    if (!isSupabaseConfigured()) return [];
    const supabase = getSupabaseClient();
    if (!supabase) return [];
    
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        category:categories(*),
        images(*),
        links(*)
      `)
      .eq('is_active', true)
      .eq('is_featured', true)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error fetching featured products:', error);
      return [];
    }

    return (data || []).map(mapProductWithRelationsToProduct);
  },

  /**
   * Get products by category slug
   */
  async getProductsByCategory(categorySlug: string): Promise<Product[]> {
    if (!isSupabaseConfigured()) return [];
    const supabase = getSupabaseClient();
    if (!supabase) return [];
    
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        category:categories(*),
        images(*),
        links(*)
      `)
      .eq('is_active', true)
      .eq('category:categories.slug', categorySlug)
      .order('order', { ascending: true });

    if (error) {
      console.error('Error fetching products by category:', categorySlug, error);
      return [];
    }

    return (data || []).map(mapProductWithRelationsToProduct);
  },

  /**
   * Get single product by slug
   */
  async getProductBySlug(slug: string): Promise<Product | null> {
    if (!isSupabaseConfigured()) return null;
    const supabase = getSupabaseClient();
    if (!supabase) return null;
    
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        category:categories(*),
        images(*),
        links(*)
      `)
      .eq('slug', slug)
      .eq('is_active', true)
      .single();

    if (error) {
      console.error('Error fetching product by slug:', slug, error);
      return null;
    }

    return data ? mapProductWithRelationsToProduct(data) : null;
  },

  /**
   * Get product images by product ID
   */
  async getProductImages(productId: string): Promise<ProductImage[]> {
    if (!isSupabaseConfigured()) return [];
    const supabase = getSupabaseClient();
    if (!supabase) return [];
    
    const { data, error } = await supabase
      .from('product_images')
      .select('*')
      .eq('product_id', productId)
      .eq('is_active', true)
      .order('order', { ascending: true });

    if (error) {
      console.error('Error fetching product images:', productId, error);
      return [];
    }

    return data || [];
  },

  /**
   * Get primary product link by product ID
   */
  async getPrimaryProductLink(productId: string): Promise<ProductLink | null> {
    if (!isSupabaseConfigured()) return null;
    const supabase = getSupabaseClient();
    if (!supabase) return null;
    
    const { data, error } = await supabase
      .from('product_links')
      .select('*')
      .eq('product_id', productId)
      .eq('is_active', true)
      .order('created_at', { ascending: true })
      .limit(1)
      .single();

    if (error) {
      console.error('Error fetching primary product link:', productId, error);
      return null;
    }

    return data || null;
  }
};

/**
 * Maps database response to Product type
 */
function mapProductWithRelationsToProduct(data: ProductWithRelations): Product {
  return {
    id: data.id,
    name: data.name,
    slug: data.slug,
    description: data.description,
    shortDescription: data.short_description,
    price: data.price,
    discountPrice: data.discount_price,
    category: data.category,
    gender: data.gender as any,
    type: data.type as any,
    images: data.images,
    links: data.links,
    tags: data.tags,
    isFeatured: data.is_featured,
    isHot: data.is_hot,
    viewCount: data.view_count,
    order: data.order,
    isActive: data.is_active,
    createdAt: new Date(data.created_at),
    updatedAt: new Date(data.updated_at)
  };
}
