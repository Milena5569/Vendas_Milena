import { Product } from "@/types/product";
import { ProductCard } from "./product-card";

interface ProductGridProps {
  products: Product[];
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  emptyState?: {
    title: string;
    description: string;
  };
}

export function ProductGrid({ 
  products, 
  columns = { sm: 1, md: 2, lg: 3, xl: 4 },
  emptyState,
}: ProductGridProps) {
  if (!products.length) {
    if (!emptyState) {
      return null;
    }

    return (
      <div className="rounded-2xl border border-border-soft bg-surface-card/70 p-10 text-center">
        <p className="text-lg font-semibold text-text-primary">{emptyState.title}</p>
        <p className="mt-2 text-text-secondary">{emptyState.description}</p>
      </div>
    );
  }

  const gridClasses = [
    columns.sm ? `grid-cols-${columns.sm}` : 'grid-cols-1',
    columns.md ? `md:grid-cols-${columns.md}` : 'md:grid-cols-2',
    columns.lg ? `lg:grid-cols-${columns.lg}` : 'lg:grid-cols-3',
    columns.xl ? `xl:grid-cols-${columns.xl}` : 'xl:grid-cols-4'
  ].join(' ');

  return (
    <div className={`grid ${gridClasses} gap-6`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}