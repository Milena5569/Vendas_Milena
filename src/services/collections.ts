import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase';
import { Collection } from '@/types/collection';
import { Product } from '@/types/product';

// Type definitions for database responses
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
    product: Product | null;
  }>;
}

export const collectionsService = {
  /**
   * Get featured collections for homepage
   */
  async getFeaturedCollections(limit: number = 6): Promise<Collection[]> {
    if (!isSupabaseConfigured()) return [];
    const supabase = getSupabaseClient();
    if (!supabase) return [];
    
    const { data, error } = await supabase
      .from('collections')
      .select(`
        *,
        products:collection_products(
          *,
          product:products(
            *,
            category:categories(*),
            images(*),
            links(*)
          )
        )
      `)
      .eq('is_active', true)
      .eq('is_featured', true)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error fetching featured collections:', error);
      return [];
    }

    return (data || []).map(mapCollectionWithProductsToCollection);
  },

  /**
   * Get collection by slug
   */
  async getCollectionBySlug(slug: string): Promise<Collection | null> {
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
            images(*),
            links(*)
          )
        )
      `)
      .eq('slug', slug)
      .eq('is_active', true)
      .single();

    if (error) {
      console.error('Error fetching collection by slug:', slug, error);
      return null;
    }

    return data ? mapCollectionWithProductsToCollection(data) : null;
  },

  /**
   * Get products in a collection by collection ID
   */
  async getCollectionProducts(collectionId: string): Promise<Product[]> {
    if (!isSupabaseConfigured()) return [];
    const supabase = getSupabaseClient();
    if (!supabase) return [];
    
    const { data, error } = await supabase
      .from('collection_products')
      .select(`
        *,
        product:products(
          *,
          category:categories(*),
          images(*),
          links(*)
        )
      `)
      .eq('collection_id', collectionId)
      .eq('product:products.is_active', true)
      .order('order', { ascending: true });

    if (error) {
      console.error('Error fetching collection products:', collectionId, error);
      return [];
    }

    const collectionProducts = (data ?? []) as Array<{ product: Product | null }>;

    return collectionProducts
      .map((item) => (item.product ? mapProductWithRelationsToProduct(item.product) : null))
      .filter(Boolean) as Product[];
  }
};

/**
 * Maps database response to Collection type
 */
function mapCollectionWithProductsToCollection(data: CollectionWithProducts): Collection {
  return {
    id: data.id,
    name: data.name,
    slug: data.slug,
    description: data.description,
    image: data.image,
    products: data.products.map(item => ({
      id: item.id,
      product: mapProductWithRelationsToProduct(item.product),
      order: item.order,
      isFeatured: item.is_featured,
      createdAt: new Date(item.created_at)
    })),
    isFeatured: data.is_featured,
    isActive: data.is_active,
    createdAt: new Date(data.created_at),
    updatedAt: new Date(data.updated_at)
  };
}

/**
 * Maps database response to Product type (reusable from products service)
 */
function mapProductWithRelationsToProduct(data: any): Product {
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
