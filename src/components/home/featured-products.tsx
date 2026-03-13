import { ProductGrid } from "@/components/product/product-grid";
import { BadgeOrigin } from "@/components/ui/badge-origin";
import { Product } from "@/types/product";

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  // Always show products if they exist, or show a minimal empty state
  if (!products || products.length === 0) {
    return (
      <section id="produtos" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 rounded-full border border-pink-300/25 bg-pink-200/10 px-5 py-2.5 mx-auto mb-6 shadow-[0_8px_24px_rgba(244,175,196,0.12)] backdrop-blur-sm transition-all duration-300 hover:border-pink-300/35 hover:bg-pink-200/15">
              <BadgeOrigin origin="Shopee" />
              <span className="text-xs font-medium tracking-wide text-pink-100/90">Coming Soon</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight">
              Produtos em Destaque
            </h2>
            <p className="text-text-secondary/90 text-lg max-w-2xl mx-auto leading-relaxed">
              Os produtos mais recentes adicionados à curadoria ClickVendas
            </p>
          </div>
          
          <div className="relative overflow-hidden rounded-[28px] border border-pink-300/20 bg-white/[0.03] p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="pointer-events-none absolute -top-24 -left-16 h-56 w-56 rounded-full bg-pink-300/12 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -right-20 h-64 w-64 rounded-full bg-pink-200/10 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(244,175,196,0.14),transparent_58%)]" />

            <div className="relative text-center space-y-7 max-w-xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mx-auto border border-pink-300/25 bg-background-primary/60 shadow-[0_12px_30px_rgba(244,175,196,0.16)]">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-pink-300/25 border border-pink-200/40">
                  <div className="w-3.5 h-3.5 rounded-full bg-pink-200 animate-pulse" />
                </div>
              </div>
              
              <div className="space-y-3.5">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                  Em breve
                </h3>
                <p className="text-text-secondary/90 text-base md:text-lg leading-relaxed max-w-md mx-auto">
                  Estamos preparando os melhores produtos para você. 
                  Volte em breve para conferir as novidades!
                </p>
              </div>

              <div className="pointer-events-none absolute top-8 left-8 h-1.5 w-1.5 rounded-full bg-pink-200/60" />
              <div className="pointer-events-none absolute top-16 right-14 h-1 w-1 rounded-full bg-pink-100/50" />
              <div className="pointer-events-none absolute bottom-14 left-16 h-1 w-1 rounded-full bg-pink-200/40" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="produtos" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-3 bg-surface-card border border-border-soft rounded-full px-4 py-2">
              <BadgeOrigin origin="Shopee" />
              <span className="text-xs text-text-secondary">Latest Products</span>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                Produtos em Destaque
              </h2>
              <p className="text-text-secondary text-lg mt-2">
                Os produtos mais recentes adicionados à curadoria ClickVendas
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="inline-flex items-center gap-2 bg-surface-card border border-border-soft px-4 py-2 rounded-full text-sm text-text-secondary">
              🏆 Mais recentes
            </span>
          </div>
        </div>
        
        <ProductGrid 
          products={products}
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        />
      </div>
    </section>
  );
}
