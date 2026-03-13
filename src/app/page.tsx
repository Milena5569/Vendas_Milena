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

export default async function HomePage() {
  // Load dynamic data from services
  const [featuredCollections, featuredProducts] = await Promise.all([
    collectionsService.getFeaturedCollections(6),
    productsService.getFeaturedProducts(12)
  ]);

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Header */}
      <StoreHeader />

      {/* Main Content */}
      <main>
        {/* Feminine Commerce Hero Section */}
        <FeminineCommerceHeroSection />

        {/* Stores Information Section */}
        <StoresInformationSection />

        {/* Recent Offers Section */}
        <RecentOffersSection />

        {/* Featured Products Section */}
        <FeaturedProducts products={featuredProducts} />

        {/* Collections Section */}
        <FeaturedCollections collections={featuredCollections} isHomepage />

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <StoreFooter />
    </div>
  );
}
