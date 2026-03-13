import { notFound } from "next/navigation";
import { categoriesService } from "@/services/categories";
import { productsService } from "@/services/products";
import { ProductGrid } from "@/components/product/product-grid";

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const category = await categoriesService.getCategoryBySlug(params.slug);
  
  if (!category) {
    notFound();
  }

  const products = await productsService.getProductsByCategory(category.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary mb-2">{category.name}</h1>
        <p className="text-text-secondary">{category.description}</p>
      </div>
      
      <ProductGrid products={products} />
    </div>
  );
}
