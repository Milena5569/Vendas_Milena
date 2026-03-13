export type SearchResultType = "product" | "store" | "collection";

export interface SearchCatalogBaseItem {
  id: string;
  type: SearchResultType;
  title: string;
  description: string;
  image?: string;
  category?: string;
  tags: string[];
  link: string;
}

export interface SearchProductItem extends SearchCatalogBaseItem {
  type: "product";
  store: string;
  price: string;
  ctaLabel?: string;
  highlight?: string;
}

export interface SearchStoreItem extends SearchCatalogBaseItem {
  type: "store";
  ctaLabel?: string;
}

export interface SearchCollectionItem extends SearchCatalogBaseItem {
  type: "collection";
  itemCount: number;
  badge?: string;
  ctaLabel?: string;
}

export type SearchCatalogItem =
  | SearchProductItem
  | SearchStoreItem
  | SearchCollectionItem;