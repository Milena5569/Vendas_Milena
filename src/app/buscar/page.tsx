import Link from "next/link";
import { ArrowUpRight, Search, Sparkles, Store, Layers3, PackageSearch } from "lucide-react";
import { StoreFooter } from "@/components/layout/footer";
import { StoreHeader } from "@/components/layout/header";
import { productsService } from "@/services/products";
import { storesService } from "@/services/stores";
import { collectionsService } from "@/services/collections";
import { ProductGrid } from "@/components/product/product-grid";

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function matchesQuery(itemText: string, query: string) {
  return normalize(itemText).includes(normalize(query));
}

function CtaLink({ href, label }: { href: string; label: string }) {
  const commonClassName =
    "inline-flex items-center gap-2 rounded-full border border-pink-300/35 bg-pink-200/10 px-4 py-2 text-sm font-semibold text-pink-100 transition-all duration-300 hover:border-pink-200/60 hover:bg-pink-300/25 hover:text-white hover:shadow-[0_10px_24px_rgba(244,175,196,0.2)]";
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={commonClassName}>
        {label}
        <ArrowUpRight size={16} />
      </a>
    );
  }

  return (
    <Link href={href} className={commonClassName}>
      {label}
      <ArrowUpRight size={16} />
    </Link>
  );
}

function StoreResultCard({ item }: { item: { id: string; title: string; description?: string; category: string; link: string; ctaLabel?: string } }) {
  return (
    <article className="group rounded-3xl border border-pink-300/25 bg-white/[0.03] p-6 shadow-[0_14px_32px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-300/45 hover:shadow-[0_18px_38px_rgba(244,175,196,0.16)]">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-pink-300/30 bg-pink-300/15 text-pink-100">
        <Store size={20} />
      </div>
      <p className="text-xs uppercase tracking-[0.12em] text-pink-100/80">Loja parceira</p>
      <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary/90">{item.description}</p>

      <div className="mt-5 flex items-center justify-between">
        <span className="rounded-full border border-pink-300/25 bg-pink-300/10 px-3 py-1 text-xs font-medium text-pink-100/90">
          {item.category}
        </span>
        <CtaLink href={item.link} label={item.ctaLabel ?? "Explorar loja"} />
      </div>
    </article>
  );
}

function CollectionResultCard({ item }: { item: { id: string; title: string; description?: string; itemCount: number; link: string; ctaLabel?: string } }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-pink-300/25 bg-white/[0.03] shadow-[0_14px_36px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-300/45 hover:shadow-[0_18px_42px_rgba(244,175,196,0.18)]">
      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-pink-300/20 via-pink-200/10 to-transparent" />

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold leading-tight text-white">{item.title}</h3>
          <p className="line-clamp-2 text-sm text-text-secondary/90">{item.description || "Coleção cadastrada no Supabase."}</p>
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-pink-300/30 bg-pink-300/10 px-3 py-1 text-xs font-medium text-pink-100">
            {item.itemCount} itens
          </span>
          <CtaLink href={item.link} label={item.ctaLabel ?? "Explorar coleção"} />
        </div>
      </div>
    </article>
  );
}

interface SearchPageProps {
  searchParams?: Promise<{
    q?: string | string[];
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const queryParam = Array.isArray(resolvedSearchParams?.q)
    ? resolvedSearchParams?.q[0]
    : resolvedSearchParams?.q;
  const query = String(queryParam || "").trim();

  const [products, stores, collections] = await Promise.all([
    productsService.getAllProducts(120),
    storesService.getAllStores(),
    collectionsService.getAllCollections(60),
  ]);

  const filteredProducts = !query
    ? products
    : products.filter((item) =>
        [item.name, item.shortDescription || "", item.category.name, item.links[0]?.store || ""].some((field) =>
          matchesQuery(field, query)
        )
      );

  const filteredStores = !query
    ? stores
    : stores.filter((item) => matchesQuery(item.name, query) || matchesQuery(item.description || "", query));

  const filteredCollections = !query
    ? collections
    : collections.filter((item) => matchesQuery(item.name, query) || matchesQuery(item.description || "", query));

  const totalResults = filteredProducts.length + filteredStores.length + filteredCollections.length;

  return (
    <div className="min-h-screen bg-background-primary">
      <StoreHeader />

      <main>
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="pointer-events-none absolute -left-16 -top-24 h-56 w-56 rounded-full bg-pink-300/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-pink-200/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-300/30 bg-pink-200/10 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-pink-100/90 shadow-[0_8px_24px_rgba(244,175,196,0.12)]">
                <Sparkles size={14} />
                BUSCA CURADA CLICKVENDAS
              </div>

              <h1 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
                Encontre produtos, lojas e coleções com mais facilidade
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-text-secondary/90 md:text-lg">
                Descubra ofertas curadas, lojas parceiras, categorias estratégicas e coleções temáticas em um
                único lugar para acelerar sua jornada de compra.
              </p>
            </div>

            <form className="mx-auto mt-10 max-w-4xl rounded-[28px] border border-pink-300/25 bg-white/[0.03] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.3)] backdrop-blur-sm md:p-5">
              <label htmlFor="search-input" className="sr-only">
                Buscar por produto, loja, categoria ou coleção
              </label>

              <div className="flex flex-col gap-3 md:flex-row md:items-center">
                <div className="relative flex-1">
                  <Search
                    size={20}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-pink-100/70"
                  />
                  <input
                    id="search-input"
                    name="q"
                    defaultValue={query}
                    placeholder="Busque por produto, loja, categoria ou coleção"
                    className="h-14 w-full rounded-full border border-pink-300/30 bg-background-secondary/70 pl-12 pr-5 text-sm text-white placeholder:text-text-secondary/60 transition-all duration-300 outline-none focus:border-pink-300/70 focus:ring-4 focus:ring-pink-300/20"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full border border-pink-300/30 bg-pink-300/10 px-4 py-3 text-sm font-medium text-pink-100"
                >
                  <Search size={17} />
                  Buscar
                </button>

                <div className="inline-flex items-center gap-2 rounded-full border border-pink-300/30 bg-pink-300/10 px-4 py-3 text-sm font-medium text-pink-100">
                  <PackageSearch size={17} />
                  {totalResults} resultados
                </div>
              </div>
            </form>
          </div>
        </section>

        <section className="pb-16 md:pb-20">
          <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
            {totalResults === 0 ? (
              <div className="rounded-3xl border border-pink-300/25 bg-white/[0.03] p-10 text-center shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
                <p className="text-lg font-semibold text-white">Nenhum resultado encontrado</p>
                <p className="mt-3 text-sm text-text-secondary/85">
                  Tente buscar por termos como <span className="text-pink-100">Feminino</span>,
                  <span className="text-pink-100"> Skin Care</span>,
                  <span className="text-pink-100"> Shopee</span> ou <span className="text-pink-100">Combos</span>.
                </p>
              </div>
            ) : null}

            {filteredProducts.length > 0 ? (
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="flex items-center gap-2 text-2xl font-semibold text-white">
                    <PackageSearch size={20} className="text-pink-100" />
                    Produtos
                  </h2>
                  <span className="text-sm text-pink-100/80">{filteredProducts.length} encontrados</span>
                </div>

                <ProductGrid products={filteredProducts} columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} />
              </div>
            ) : null}

            {filteredStores.length > 0 ? (
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="flex items-center gap-2 text-2xl font-semibold text-white">
                    <Store size={20} className="text-pink-100" />
                    Lojas
                  </h2>
                  <span className="text-sm text-pink-100/80">{filteredStores.length} encontradas</span>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {filteredStores.map((item) => (
                    <StoreResultCard
                      key={item.id}
                      item={{
                        id: item.id,
                        title: item.name,
                        description: item.description || undefined,
                        category: "Loja parceira",
                        link: `/lojas/${item.slug}`,
                      }}
                    />
                  ))}
                </div>
              </div>
            ) : null}

            {filteredCollections.length > 0 ? (
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="flex items-center gap-2 text-2xl font-semibold text-white">
                    <Layers3 size={20} className="text-pink-100" />
                    Coleções
                  </h2>
                  <span className="text-sm text-pink-100/80">{filteredCollections.length} encontradas</span>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {filteredCollections.map((item) => (
                    <CollectionResultCard
                      key={item.id}
                      item={{
                        id: item.id,
                        title: item.name,
                        description: item.description,
                        itemCount: item.products.length,
                        link: `/colecoes/${item.slug}`,
                      }}
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      </main>

      <StoreFooter />
    </div>
  );
}