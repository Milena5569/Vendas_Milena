"use client";

import { products } from "@/constants/database";
import { StoreHeader } from "@/components/layout/header";
import { HeroSection } from "@/components/home/hero-section";
import { CategoryNavigation } from "@/components/home/category-navigation";
import { FilterBar } from "@/components/product/filter-bar";
import { ProductCard } from "@/components/product/product-card";
import { CTASection } from "@/components/home/cta-section";
import { StoreFooter } from "@/components/layout/footer";
import { useProductFilters } from "@/hooks/use-product-filters";

export function StorePage() {
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
    <div className="min-h-screen bg-black">
      {/* Header */}
      <StoreHeader />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="py-8 md:py-12">
          <HeroSection />
        </section>

        {/* Category Navigation */}
        <section className="px-4 md:px-6 py-6">
          <CategoryNavigation />
        </section>

        {/* Filter Bar */}
        <section className="px-4 md:px-6 py-4">
          <FilterBar
            category={category}
            gender={gender}
            store={store}
            onCategoryChange={setCategory}
            onGenderChange={setGender}
            onStoreChange={setStore}
          />
        </section>

        {/* Products Grid */}
        <section id="produtos" className="px-4 md:px-6 py-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-2">
                  Produtos em Destaque
                </h2>
                <p className="text-text-secondary">
                  {filteredProducts.length} produto(s) encontrado(s)
                </p>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-border-soft bg-surface-card/80 p-12 text-center">
                <p className="text-text-secondary text-lg">
                  Nenhum produto encontrado com esses filtros.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 md:px-6 py-12">
          <CTASection />
        </section>
      </main>

      {/* Footer */}
      <StoreFooter />
    </div>
  );
}