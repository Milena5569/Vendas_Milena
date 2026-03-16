import { notFound } from "next/navigation";
import { storesService } from "@/services/stores";
import { productsService } from "@/services/products";
import { ProductGrid } from "@/components/product/product-grid";
import { StoreHeader } from "@/components/layout/header";
import { StoreFooter } from "@/components/layout/footer";

export default async function StorePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const store = await storesService.getStoreBySlug(slug);
  
  if (!store) {
    notFound();
  }

  const products = await productsService.getProductsByStoreSlug(slug, 24);

  return (
    <div className="min-h-screen bg-background-primary">
      <StoreHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 max-w-3xl">
          <h1 className="text-3xl font-bold text-text-primary mb-2">{store.name}</h1>
          <p className="text-text-secondary">{store.description || "Produtos desta loja no catálogo ClickVendas."}</p>
        </div>

        <ProductGrid
          products={products}
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          emptyState={{
            title: "Nenhum produto encontrado",
            description: "Adicione produtos no Supabase para exibir aqui.",
          }}
        />
      </main>

      <StoreFooter />
    </div>
  );
}