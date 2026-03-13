import Link from "next/link";
import { StoreHeader } from "@/components/layout/header";
import { StoreFooter } from "@/components/layout/footer";
import { CuratedOfferCard } from "@/components/home/curated-offer-card";
import {
  getCategoryFromQuery,
  lojasCategories,
  lojasFunnelProducts,
  partnerStores,
} from "@/constants/lojas-funnel";

const storeStyles: Record<string, { accent: string; glow: string }> = {
  Shopee: {
    accent: "from-orange-300/20 to-pink-300/20 border-orange-300/30",
    glow: "bg-orange-300/10",
  },
  Shein: {
    accent: "from-pink-300/20 to-rose-300/20 border-pink-300/30",
    glow: "bg-pink-300/10",
  },
  "TikTok Shop": {
    accent: "from-cyan-300/20 to-pink-300/20 border-cyan-300/30",
    glow: "bg-cyan-300/10",
  },
};

const storeSectionIds: Record<string, string> = {
  Shopee: "shopee",
  Shein: "shein",
  "TikTok Shop": "tiktok",
};

interface StoresPageProps {
  searchParams?: {
    categoria?: string | string[];
  };
}

export default function StoresPage({ searchParams }: StoresPageProps) {
  const categoriaParam = Array.isArray(searchParams?.categoria)
    ? searchParams?.categoria[0]
    : searchParams?.categoria;

  const activeCategoryKey = getCategoryFromQuery(categoriaParam);
  const activeCategory =
    lojasCategories.find((category) => category.key === activeCategoryKey) ?? lojasCategories[0];

  const filteredProducts = lojasFunnelProducts.filter(
    (product) => product.category === activeCategoryKey,
  );

  const storesWithPromotions = partnerStores
    .map((store) => ({
      ...store,
      promotions: filteredProducts.filter((product) => product.store === store.name),
    }))
    .filter((store) => store.promotions.length > 0);

  return (
    <div className="min-h-screen bg-background-primary">
      <StoreHeader />

      <main>
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="pointer-events-none absolute -top-24 -left-16 h-56 w-56 rounded-full bg-pink-300/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-8 h-64 w-64 rounded-full bg-pink-200/8 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-pink-300/25 bg-pink-200/10 px-5 py-2.5 shadow-[0_8px_24px_rgba(244,175,196,0.12)] backdrop-blur-sm">
              <span className="text-xs font-medium tracking-[0.12em] text-pink-100/90">LOJAS PARCEIRAS</span>
              <span className="h-1 w-1 rounded-full bg-pink-100/70" />
              <span className="rounded-full border border-pink-300/30 bg-pink-300/15 px-3 py-1 text-xs font-semibold tracking-[0.08em] text-pink-100">
                Categoria: {activeCategory.label}
              </span>
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-text-primary">
              Explore as melhores lojas para {activeCategory.label}
            </h1>
            <p className="mt-5 max-w-3xl mx-auto text-lg text-text-secondary/90 leading-relaxed">
              {activeCategory.shortDescription} A ClickVendas reúne oportunidades das principais plataformas
              para você descobrir produtos com mais agilidade, confiança e estilo.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {lojasCategories.map((category) => {
                const isActive = category.key === activeCategoryKey;

                return (
                  <Link
                    key={category.key}
                    href={`/lojas?categoria=${category.key}`}
                    className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "border-pink-300/60 bg-pink-300/20 text-white shadow-[0_0_20px_rgba(244,175,196,0.2)]"
                        : "border-border-soft bg-surface-card/50 text-text-secondary hover:border-pink-300/40 hover:bg-surface-pink hover:text-text-primary"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {category.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            {storesWithPromotions.map((store) => {
              const style = storeStyles[store.name] ?? {
                accent: "from-pink-300/20 to-pink-200/20 border-pink-300/30",
                glow: "bg-pink-300/10",
              };
              const sectionId = storeSectionIds[store.name];

              return (
                <section
                  key={store.id}
                  id={sectionId}
                  className={`relative scroll-mt-28 overflow-hidden rounded-[28px] border ${style.accent} bg-gradient-to-br from-white/[0.03] to-transparent p-6 md:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.25)]`}
                >
                  <div className={`pointer-events-none absolute -top-20 right-0 h-40 w-40 rounded-full ${style.glow} blur-3xl`} />

                  <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                    <div className="space-y-2 max-w-3xl">
                      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">{store.name}</h2>
                      <p className="text-text-secondary/90 leading-relaxed">{store.description}</p>
                    </div>

                    <Link
                      href={`/lojas/${store.slug}`}
                      className="inline-flex items-center justify-center rounded-full border border-pink-300/30 bg-pink-200/10 px-5 py-2.5 text-sm font-semibold text-pink-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-300/50 hover:bg-pink-300/20 hover:text-white hover:shadow-[0_0_20px_rgba(244,175,196,0.18)]"
                    >
                      Ver página da loja
                    </Link>
                  </div>

                  <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {store.promotions.map((offer) => (
                      <CuratedOfferCard key={offer.id} offer={offer} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </section>
      </main>

      <StoreFooter />
    </div>
  );
}