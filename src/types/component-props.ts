// Standardized component props for consistent API across components

import { Product } from "./product";
import { Collection } from "./collection";
import { StoreOrigin, ProductCategory, ProductGender } from "./product";

// UI Components Props
export interface BadgeOriginProps {
  origin: StoreOrigin;
}

export interface FilterBarProps {
  category: string;
  gender: string;
  store: string;
  onCategoryChange: (category: string) => void;
  onGenderChange: (gender: string) => void;
  onStoreChange: (store: string) => void;
}

export interface EmptyStateProps {
  title: string;
  description: string;
  icon?: "search" | "package";
  action?: {
    label: string;
    onClick: () => void;
  };
}

export interface WhatsAppFloatProps {
  phoneNumber: string;
  message?: string;
}

export interface HeaderProfileProps {
  username?: string;
  avatarUrl?: string;
  isVip?: boolean;
  onSettingsClick?: () => void;
}

// Product Components Props
export interface ProductCardProps {
  product: Product;
}

export interface ProductGridProps {
  products: Product[];
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

export interface ProductGalleryProps {
  images: {
    id: string;
    url: string;
    alt?: string;
  }[];
  className?: string;
}

// Collection Components Props
export interface CollectionCardProps {
  collection: Collection;
}

export interface CollectionGridProps {
  collections: Collection[];
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

// Common Props
export interface BaseCardProps {
  className?: string;
}

export interface BaseGridProps {
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: number;
}

// Filter Types
export interface ProductFilters {
  category: ProductCategory | "Todos";
  gender: ProductGender | "Todos";
  store: StoreOrigin | "Todos";
}

export interface FilterChangeEvent {
  category?: ProductCategory | "Todos";
  gender?: ProductGender | "Todos";
  store?: StoreOrigin | "Todos";
}