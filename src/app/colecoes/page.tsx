import { CollectionGrid } from "@/components/collection/collection-grid";
import { StoreFooter } from "@/components/layout/footer";
import { StoreHeader } from "@/components/layout/header";
import { collectionsHighlights, curatedCollections } from "@/constants/collections-showcase";

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <StoreHeader />

      <main>
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="pointer-events-none absolute -top-24 -left-16 h-56 w-56 rounded-full bg-pink-300/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-8 h-64 w-64 rounded-full bg-pink-200/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-pink-300/25 bg-pink-200/10 px-5 py-2.5 shadow-[0_8px_24px_rgba(244,175,196,0.12)] backdrop-blur-sm">
              <span className="text-xs font-medium tracking-[0.12em] text-pink-100/90">COLEÇÕES CURADAS</span>
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-text-primary">
              Coleções em destaque
            </h1>
            <p className="mt-5 max-w-3xl mx-auto text-lg text-text-secondary/90 leading-relaxed">
              Descubra seleções agrupadas por estilo de vida, momento e necessidade. Aqui você encontra combos,
              kits e curadorias temáticas para explorar compras com mais praticidade e personalidade.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {collectionsHighlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-pink-300/25 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-pink-100/90"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <CollectionGrid
              collections={curatedCollections}
              mode="curated"
              columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
            />
          </div>
        </section>
      </main>

      <StoreFooter />
    </div>
  );
}
