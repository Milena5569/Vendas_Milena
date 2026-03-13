export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  order?: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type CategorySlug = 
  | "eletronicos"
  | "casa"
  | "beleza"
  | "moda"
  | "acessorios"
  | "todos";