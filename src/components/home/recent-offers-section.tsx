import { recentOffers } from "@/constants/store-promotions";
import { CuratedOfferCard } from "@/components/home/curated-offer-card";

export function RecentOffersSection() {
  return (
    <section id="ofertas-recentes" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-5 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-3 rounded-full border border-pink-300/25 bg-pink-200/10 px-5 py-2.5 shadow-[0_8px_24px_rgba(244,175,196,0.12)] backdrop-blur-sm">
            <span className="text-xs font-medium tracking-[0.12em] text-pink-100/90">NOVAS OPORTUNIDADES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary">
            Ofertas Recentes
          </h2>
          <p className="text-lg text-text-secondary/90 leading-relaxed">
            Descubra as últimas novidades da curadoria ClickVendas com seleção premium das lojas que mais movimentam ofertas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {recentOffers.map((offer) => (
            <CuratedOfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
}
