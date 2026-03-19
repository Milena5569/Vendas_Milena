import Link from "next/link";
import { StoreHeader } from "@/components/layout/header";
import { StoreFooter } from "@/components/layout/footer";
import { storesService } from "@/services/stores";
import { productsService } from "@/services/products";
import { categoriesService } from "@/services/categories";
import { ProductGrid } from "@/components/product/product-grid";

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

interface StoresPageProps {
  searchParams?: Promise<{
    categoria?: string | string[];
  }>;
}

export default async function StoresPage({ searchParams }: StoresPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const categoriaParam = Array.isArray(resolvedSearchParams?.categoria)
    ? resolvedSearchParams?.categoria[0]
    : resolvedSearchParams?.categoria;

  const [stores, categories] = await Promise.all([
    storesService.getAllStores(),
    categoriesService.getAllCategories(),
  ]);

  const activeCategory = categories.find((category) => category.slug === categoriaParam) ?? null;

  const storesWithPromotions = (
    await Promise.all(
      stores.map(async (store) => {
        const products = await productsService.getProductsByStoreSlug(store.slug, 60);
        const filteredProducts = activeCategory
          ? products.filter((product) => product.category.slug === activeCategory.slug)
          : products;

        return {
          ...store,
          products: filteredProducts,
        };
      })
    )
  )
    .filter((store) => store.products.length > 0);

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
                Categoria: {activeCategory?.name ?? "Todas"}
              </span>
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-text-primary">
              Explore as melhores lojas
            </h1>
            <p className="mt-5 max-w-3xl mx-auto text-lg text-text-secondary/90 leading-relaxed">
              A ClickVendas reúne oportunidades das principais plataformas para você descobrir produtos com mais
              agilidade, confiança e estilo.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/lojas"
                className={`inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  !activeCategory
                    ? "border-pink-300/60 bg-pink-300/20 text-white shadow-[0_0_20px_rgba(244,175,196,0.2)]"
                    : "border-border-soft bg-surface-card/50 text-text-secondary hover:border-pink-300/40 hover:bg-surface-pink hover:text-text-primary"
                }`}
              >
                Todas
              </Link>
              {categories.map((category) => {
                const isActive = category.slug === activeCategory?.slug;

                return (
                  <Link
                    key={category.id}
                    href={`/lojas?categoria=${category.slug}`}
                    className={`inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "border-pink-300/60 bg-pink-300/20 text-white shadow-[0_0_20px_rgba(244,175,196,0.2)]"
                        : "border-border-soft bg-surface-card/50 text-text-secondary hover:border-pink-300/40 hover:bg-surface-pink hover:text-text-primary"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {category.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            {storesWithPromotions.length === 0 ? (
              <div className="rounded-2xl border border-border-soft bg-surface-card/70 p-10 text-center">
                <p className="text-lg font-semibold text-text-primary">Nenhuma oferta para os filtros selecionados</p>
                <p className="mt-2 text-text-secondary">
                  Não encontramos produtos nesta categoria agora. Limpe os filtros para ver todas as ofertas ou
                  continue explorando outras páginas.
                </p>
                <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/lojas"
                    className="inline-flex min-h-11 items-center rounded-full border border-pink-300/40 bg-pink-300/15 px-5 py-2.5 text-sm font-semibold text-pink-100 transition-all duration-300 hover:border-pink-300/60 hover:bg-pink-300/25 hover:text-white"
                  >
                    Limpar filtros
                  </Link>
                  <Link
                    href="/buscar"
                    className="inline-flex min-h-11 items-center rounded-full border border-border-soft bg-surface-card px-5 py-2.5 text-sm font-semibold text-text-primary transition-colors hover:bg-surface-pink"
                  >
                    Explorar
                  </Link>
                </div>
              </div>
            ) : null}

            {storesWithPromotions.map((store) => {
              const style = storeStyles[store.name] ?? {
                accent: "from-pink-300/20 to-pink-200/20 border-pink-300/30",
                glow: "bg-pink-300/10",
              };

              return (
                <section
                  key={store.id}
                  id={store.slug}
                  className={`relative scroll-mt-28 overflow-hidden rounded-[28px] border ${style.accent} bg-gradient-to-br from-white/[0.03] to-transparent p-6 md:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.25)]`}
                >
                  <div className={`pointer-events-none absolute -top-20 right-0 h-40 w-40 rounded-full ${style.glow} blur-3xl`} />

                  <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                    <div className="space-y-2 max-w-3xl">
                      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">{store.name}</h2>
                      <p className="text-text-secondary/90 leading-relaxed">
                        {store.description || "Confira os produtos disponíveis desta loja."}
                      </p>
                    </div>

                    <Link
                      href={`/lojas/${store.slug}`}
                      className="inline-flex items-center justify-center rounded-full border border-pink-300/30 bg-pink-200/10 px-5 py-2.5 text-sm font-semibold text-pink-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-300/50 hover:bg-pink-300/20 hover:text-white hover:shadow-[0_0_20px_rgba(244,175,196,0.18)]"
                    >
                      Explorar
                    </Link>
                  </div>

                  <ProductGrid products={store.products} columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} />
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