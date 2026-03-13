import { notFound } from "next/navigation";
import { Collection } from "@/types/collection";
import { collectionsService } from "@/services/collections";
import { ProductGrid } from "@/components/product/product-grid";
import { EmptyState } from "@/components/ui/empty-state";
import { StoreHeader } from "@/components/layout/header";
import { StoreFooter } from "@/components/layout/footer";
import Image from "next/image";

interface CollectionPageProps {
  params: {
    slug: string;
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const collection = await collectionsService.getCollectionBySlug(params.slug);

  if (!collection) {
    notFound();
  }

  const products = collection.products.map(p => p.product);

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Header */}
      <StoreHeader />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Collection Header */}
        <div className="max-w-4xl mx-auto">
          {/* Collection Cover */}
          {collection.image && (
            <div className="relative aspect-[2/1] rounded-2xl border border-border-soft bg-surface-card overflow-hidden mb-8 shadow-lg shadow-black/10">
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              
              {/* Featured Badge */}
              {collection.isFeatured && (
                <div className="absolute top-4 left-4 rounded-full border border-accent-primary/30 bg-accent-primary/15 px-3 py-1.5 text-xs font-bold text-accent-primary shadow-lg shadow-accent-primary/20">
                  Coleção em Destaque
                </div>
              )}
            </div>
          )}

          {/* Collection Info */}
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
                {collection.name}
              </h1>
              {collection.description && (
                <p className="text-text-secondary text-lg md:text-xl leading-relaxed mt-2 max-w-3xl">
                  {collection.description}
                </p>
              )}
            </div>

            {/* Collection Stats */}
            <div className="flex items-center gap-6 text-sm text-text-secondary">
              <span className="inline-flex items-center gap-2 bg-surface-card border border-border-soft px-3 py-1.5 rounded-full">
                📦 {products.length} produtos
              </span>
              {collection.isFeatured && (
                <span className="inline-flex items-center gap-2 bg-accent-primary/15 border border-accent-primary/30 px-3 py-1.5 rounded-full text-accent-primary">
                  ⭐ Curadoria especial
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mt-12">
          {products.length > 0 ? (
            <ProductGrid 
              products={products}
              columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            />
          ) : (
            <div className="text-center py-16">
              <EmptyState 
                title="Coleção sem produtos"
                description="Esta coleção ainda não possui produtos cadastrados. Volte em breve para conferir os lançamentos!"
                icon="package"
                action={{
                  label: "Explorar coleções",
                  onClick: () => window.location.href = '/'
                }}
              />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <StoreFooter />
    </div>
  );
}
