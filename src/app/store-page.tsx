import { StoreHeader } from "@/components/layout/header";
import { HeroSection } from "@/components/home/hero-section";
import { CategoryNavigation } from "@/components/home/category-navigation";
import { ProductGrid } from "@/components/product/product-grid";
import { CTASection } from "@/components/home/cta-section";
import { StoreFooter } from "@/components/layout/footer";
import { productsService } from "@/services/products";

export async function StorePage() {
  const products = await productsService.getAllProducts(48);

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

        {/* Products Grid */}
        <section id="produtos" className="px-4 md:px-6 py-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-2">
                  Produtos em Destaque
                </h2>
                <p className="text-text-secondary">{products.length} produto(s) encontrado(s)</p>
              </div>
            </div>

            <ProductGrid
              products={products}
              columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
              emptyState={{
                title: "Nenhum produto encontrado",
                description: "Adicione produtos no Supabase para exibir aqui.",
              }}
            />
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