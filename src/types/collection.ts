import { Product } from "./product";

export interface CollectionProduct {
  id: string;
  product: Product;
  order: number;
  isFeatured: boolean;
  createdAt: Date;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  products: CollectionProduct[];
  isFeatured: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CuratedCollectionPreview {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  itemCount: number;
  priceHighlight?: string;
  slug: string;
}