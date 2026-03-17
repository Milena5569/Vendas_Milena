import { StoreHeader } from "@/components/layout/header";
import { FeminineCommerceHeroSection } from "@/components/home/feminine-commerce-hero-section";
import { StoresInformationSection } from "@/components/home/stores-information-section";
import { RecentOffersSection } from "@/components/home/recent-offers-section";
import { FeaturedProducts } from "@/components/home/featured-products";
import { FeaturedCollections } from "@/components/home/featured-collections";
import { CTASection } from "@/components/home/cta-section";
import { StoreFooter } from "@/components/layout/footer";
import { collectionsService } from "@/services/collections";
import { productsService } from "@/services/products";
import { storesService } from "@/services/stores";

export default async function HomePage() {
  // Load dynamic data from services
  const [featuredCollections, featuredProducts, recentProducts, featuredStores] = await Promise.all([
    collectionsService.getFeaturedCollections(6),
    productsService.getFeaturedProducts(12),
    productsService.getAllProducts(6),
    storesService.getFeaturedStores(3),
  ]);

  const homepageCollections =
    featuredCollections.length > 0 ? featuredCollections : await collectionsService.getAllCollections(6);

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Header */}
      <StoreHeader />

      {/* Main Content */}
      <main>
        {/* Feminine Commerce Hero Section */}
        <FeminineCommerceHeroSection />

        {/* Stores Information Section */}
        <StoresInformationSection stores={featuredStores} />

        {/* Recent Offers Section */}
        <RecentOffersSection products={recentProducts} />

        {/* Featured Products Section */}
        <FeaturedProducts products={featuredProducts} />

        {/* Collections Section */}
        <FeaturedCollections collections={homepageCollections} isHomepage />

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <StoreFooter />
    </div>
  );
}
