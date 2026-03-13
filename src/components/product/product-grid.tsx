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
}

export function ProductGrid({ 
  products, 
  columns = { sm: 1, md: 2, lg: 3, xl: 4 } 
}: ProductGridProps) {
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