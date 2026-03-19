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
  columns: _columns = { sm: 1, md: 2, lg: 3, xl: 4 },
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

  return (
    <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-[clamp(0.55rem,1.4vw,0.8rem)] overflow-x-hidden md:[grid-template-columns:repeat(auto-fit,minmax(clamp(12.5rem,28vw,14rem),1fr))] lg:[grid-template-columns:repeat(auto-fit,minmax(clamp(11.5rem,20vw,13rem),1fr))] xl:[grid-template-columns:repeat(auto-fit,minmax(clamp(11rem,17vw,12.5rem),1fr))] 2xl:[grid-template-columns:repeat(auto-fit,minmax(clamp(10.75rem,12vw,12rem),1fr))]">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}