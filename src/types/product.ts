import { Category } from "./category";
export type { Category } from "./category";

export interface ProductImage {
  id: string;
  url: string;
  alt?: string;
  order?: number;
  isPrimary: boolean;
}

export interface ProductLink {
  id: string;
  url: string;
  store: StoreOrigin;
  isActive: boolean;
  createdAt: Date;
}

export type StoreOrigin = "Shopee" | "Shein" | "TikTok Shop" | "Amazon" | "Magalu";
export type ProductCategory = 
  | "Eletronicos"
  | "Casa"
  | "Moda"
  | "Beleza"
  | "Acessorios"
  | "Livros"
  | "Esportes";
export type ProductGender = "Masc" | "Fem" | "Uni" | "Kids";
export type ProductType = "Individual";

export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  shortDescription?: string;
  price: number;
  discountPrice?: number;
  category: Category;
  gender: ProductGender;
  type: ProductType;
  images: ProductImage[];
  links: ProductLink[];
  tags?: string[];
  isFeatured: boolean;
  isHot: boolean;
  viewCount: number;
  order?: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}