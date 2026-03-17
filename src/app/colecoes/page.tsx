import { CollectionGrid } from "@/components/collection/collection-grid";
import { StoreFooter } from "@/components/layout/footer";
import { StoreHeader } from "@/components/layout/header";
import { collectionsService } from "@/services/collections";

export default async function CollectionsPage() {
  const collections = await collectionsService.getAllCollections(24);
  const collectionsWithProducts = collections.filter((collection) => collection.products.length > 0);

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
              Curadorias editoriais
            </h1>
            <p className="mt-5 max-w-3xl mx-auto text-lg text-text-secondary/90 leading-relaxed">
              As coleções funcionam como grupos promocionais opcionais para campanhas estratégicas como Reels,
              carrosséis e ações sazonais. Para navegação permanente, continue explorando pelas categorias.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Reels de campanha", "Carrosséis curados", "Sazonais", "Campanhas de produto"].map((highlight) => (
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
            {collectionsWithProducts.length > 0 ? (
              <CollectionGrid collections={collectionsWithProducts} columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} />
            ) : (
              <div className="rounded-2xl border border-border-soft bg-surface-card/70 p-10 text-center">
                <p className="text-lg font-semibold text-text-primary">Sem campanhas editoriais ativas</p>
                <p className="mt-2 text-text-secondary">As coleções aparecem aqui quando houver produtos vinculados.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <StoreFooter />
    </div>
  );
}
