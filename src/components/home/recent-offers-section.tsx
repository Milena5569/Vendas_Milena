import { ProductGrid } from "@/components/product/product-grid";
import { Product } from "@/types/product";

interface RecentOffersSectionProps {
  products: Product[];
}

export function RecentOffersSection({ products }: RecentOffersSectionProps) {
  return (
    <section id="ofertas-recentes" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-5 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-3 rounded-full border border-pink-300/25 bg-pink-200/10 px-5 py-2.5 shadow-[0_8px_24px_rgba(244,175,196,0.12)] backdrop-blur-sm">
            <span className="text-xs font-medium tracking-[0.12em] text-pink-100/90">NOVAS OPORTUNIDADES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary">
            Achadinhos que valem a pena
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Selecionamos produtos virais, promoções escondidas e ofertas que realmente compensam nas principais lojas online.
          </p>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-white/70">
            <span className="h-2 w-2 rounded-full bg-[#F4AFC4] animate-pulse" />
            Novos achadinhos adicionados hoje
          </p>
        </div>

        {products.length > 0 ? (
          <ProductGrid products={products} columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} />
        ) : (
          <div className="rounded-2xl border border-border-soft bg-surface-card/70 p-10 text-center">
            <p className="text-lg font-semibold text-text-primary">Nenhum achadinho disponível no momento</p>
            <p className="mt-2 text-text-secondary">Adicione produtos no Supabase para exibir aqui.</p>
          </div>
        )}
      </div>
    </section>
  );
}
