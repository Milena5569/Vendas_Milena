import { HeaderProfile } from "@/components/layout/header-profile";
import { ProductGrid } from "@/components/product/product-grid";
import { productsService } from "@/services/products";

export async function HomeClientPage() {
  const products = await productsService.getAllProducts(24);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 md:px-6 md:py-10">
        <HeaderProfile />

        <section className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-zinc-100 md:text-xl">Produtos em destaque</h2>
            <p className="text-sm text-zinc-400">{products.length} produto(s) encontrado(s)</p>
          </div>
        </section>

        <ProductGrid
          products={products}
          columns={{ sm: 2, md: 3, lg: 4, xl: 4 }}
          emptyState={{
            title: "Nenhum produto encontrado",
            description: "Adicione produtos no Supabase para exibir aqui.",
          }}
        />
      </div>
    </main>
  );
}