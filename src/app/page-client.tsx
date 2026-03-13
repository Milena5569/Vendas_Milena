"use client";

import { products } from "@/constants/database";
import { HeaderProfile } from "@/components/layout/header-profile";
import { FilterBar } from "@/components/ui/filter-bar";
import { ProductCard } from "@/components/product/product-card";
import { useProductFilters } from "@/hooks/use-product-filters";

export function HomeClientPage() {
  const {
    category,
    gender,
    store,
    setCategory,
    setGender,
    setStore,
    filteredProducts,
  } = useProductFilters(products);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 md:px-6 md:py-10">
        <HeaderProfile />

        <FilterBar
          category={category}
          gender={gender}
          store={store}
          onCategoryChange={setCategory}
          onGenderChange={setGender}
          onStoreChange={setStore}
        />

        <section className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-zinc-100 md:text-xl">
              Produtos em destaque
            </h2>
            <p className="text-sm text-zinc-400">
              {filteredProducts.length} produto(s) encontrado(s)
            </p>
          </div>
        </section>

        {filteredProducts.length > 0 ? (
          <section className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>
        ) : (
          <section className="rounded-2xl border border-dashed border-white/10 bg-zinc-950/60 p-10 text-center">
            <p className="text-zinc-300">
              Nenhum produto encontrado com esses filtros.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}