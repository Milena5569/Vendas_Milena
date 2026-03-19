import Image from "next/image";
import { collectionsService } from "@/services/collections";
import { ProductGrid } from "@/components/product/product-grid";
import { EmptyStateServer } from "@/components/ui/empty-state-server";
import { StoreHeader } from "@/components/layout/header";
import { StoreFooter } from "@/components/layout/footer";

interface CollectionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CollectionDetailPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = await collectionsService.getCollectionBySlug(slug);

  if (!collection) {
    return (
      <div className="min-h-screen bg-background-primary">
        <StoreHeader />
        <main className="container mx-auto px-4 py-14">
          <EmptyStateServer
            title="Coleção não encontrada"
            description="Essa coleção não está disponível agora ou não tem produtos vinculados. Explore outras opções para continuar comprando."
            icon="search"
            action={{
              label: "Explorar",
              href: "/colecoes",
            }}
          />
        </main>
        <StoreFooter />
      </div>
    );
  }

  const products = collection.products.map((p) => p.product);

  return (
    <div className="min-h-screen bg-background-primary">
      <StoreHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
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
            </div>
          )}

          <div className="space-y-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">{collection.name}</h1>
              {collection.description && (
                <p className="text-text-secondary text-lg md:text-xl leading-relaxed mt-2 max-w-3xl">
                  {collection.description}
                </p>
              )}
            </div>

            <div className="flex items-center gap-6 text-sm text-text-secondary">
              <span className="inline-flex items-center gap-2 bg-surface-card border border-border-soft px-3 py-1.5 rounded-full">
                📦 {products.length} produtos
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <ProductGrid products={products} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} />
        </div>
      </main>

      <StoreFooter />
    </div>
  );
}
