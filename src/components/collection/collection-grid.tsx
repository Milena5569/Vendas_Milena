import { Collection } from "@/types/collection";
import { CollectionCard } from "./collection-card";

interface CollectionGridProps {
  collections: Collection[];
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

const baseGridColumns = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
} as const;

const mdGridColumns = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
} as const;

const lgGridColumns = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
} as const;

const xlGridColumns = {
  1: "xl:grid-cols-1",
  2: "xl:grid-cols-2",
  3: "xl:grid-cols-3",
  4: "xl:grid-cols-4",
} as const;

export function CollectionGrid({ 
  collections, 
  columns = { sm: 1, md: 2, lg: 3, xl: 4 } 
}: CollectionGridProps) {
  const nonEmptyCollections = collections.filter((collection) => collection.products.length > 0);

  if (nonEmptyCollections.length === 0) {
    return null;
  }

  const gridClasses = [
    baseGridColumns[columns.sm ?? 1],
    mdGridColumns[columns.md ?? 2],
    lgGridColumns[columns.lg ?? 3],
    columns.xl ? xlGridColumns[columns.xl] : undefined,
  ].join(' ');

  return (
    <div className={`grid ${gridClasses} gap-6`}>
      {nonEmptyCollections.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </div>
  );
}