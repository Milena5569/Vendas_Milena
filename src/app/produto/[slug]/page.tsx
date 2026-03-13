import { notFound } from "next/navigation";
import { Product } from "@/types/product";
import { productsService } from "@/services/products";
import { formatCurrency, calculateDiscountPercentage } from "@/lib/utils";
import { BadgeOrigin } from "@/components/ui/badge-origin";
import { ProductGallery } from "@/components/product/product-gallery";
import { StoreHeader } from "@/components/layout/header";
import { StoreFooter } from "@/components/layout/footer";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await productsService.getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const discountPercentage = calculateDiscountPercentage(
    product.price,
    product.discountPrice || product.price
  );

  const primaryLink = product.links[0];

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Header */}
      <StoreHeader />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Gallery */}
          <div>
            <ProductGallery 
              images={product.images}
              className="w-full"
            />
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            {/* Store Badge */}
            <div>
              {primaryLink && (
                <BadgeOrigin origin={primaryLink.store} />
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-text-primary leading-tight">
                  {product.name}
                </h1>
                <p className="text-text-secondary text-sm mt-1">
                  {product.category.name} • {product.gender} • {product.type}
                </p>
              </div>

              {/* Price Section */}
              <div className="space-y-2">
                {discountPercentage > 0 && (
                  <p className="text-sm text-text-secondary line-through">
                    De: {formatCurrency(product.price)}
                  </p>
                )}
                <p className="text-3xl md:text-4xl font-bold text-accent-primary">
                  {formatCurrency(product.discountPrice || product.price)}
                </p>
                {discountPercentage > 0 && (
                  <div className="inline-flex items-center gap-2 bg-accent-primary/15 border border-accent-primary/30 px-3 py-1 rounded-full text-sm font-semibold text-accent-primary">
                    <span className="text-xs">Economize</span>
                    <span>-{discountPercentage}%</span>
                  </div>
                )}
              </div>

              {/* Description */}
              {product.shortDescription && (
                <div className="text-text-secondary leading-relaxed">
                  {product.shortDescription}
                </div>
              )}

              {/* CTA Section */}
              <div className="space-y-4">
                <div className="bg-surface-card border border-border-soft rounded-2xl p-4">
                  <h3 className="text-sm font-semibold text-text-primary mb-2">
                    Disponível em:
                  </h3>
                  <div className="flex items-center gap-2 text-text-secondary text-sm">
                    <span>•</span>
                    <span>{primaryLink?.store || 'Loja não especificada'}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  {primaryLink ? (
                    <a
                      href={primaryLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-accent-primary text-background-primary px-6 py-4 rounded-full font-semibold text-center hover:opacity-90 transition-all duration-300 shadow-lg shadow-accent-primary/20"
                    >
                      Ver Oferta
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 bg-border-soft text-text-secondary px-6 py-4 rounded-full font-semibold cursor-not-allowed"
                    >
                      Produto indisponível
                    </button>
                  )}
                  
                  <a
                    href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20este%20produto."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-surface-card border border-border-soft text-text-primary px-6 py-4 rounded-full font-semibold hover:bg-background-primary transition-all duration-300"
                  >
                    Falar no WhatsApp
                  </a>
                </div>

                {/* Product Stats */}
                <div className="flex items-center gap-6 text-xs text-text-secondary">
                  <span className="inline-flex items-center gap-1">
                    👁 {product.viewCount} visualizações
                  </span>
                  {product.isHot && (
                    <span className="inline-flex items-center gap-1 text-red-300">
                      🔥 Mais vendido
                    </span>
                  )}
                  {product.isFeatured && (
                    <span className="inline-flex items-center gap-1 text-yellow-300">
                      ⭐ Em destaque
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Description */}
        {product.description && product.description !== product.shortDescription && (
          <div className="mt-12 max-w-3xl">
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              Descrição completa
            </h2>
            <div className="text-text-secondary leading-relaxed whitespace-pre-wrap">
              {product.description}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <StoreFooter />
    </div>
  );
}
