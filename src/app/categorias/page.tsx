import Link from "next/link";
import { PublicShell } from "@/components/layout/public-shell";
import { categoriesService } from "@/services/categories";

export default async function CategoriesPage() {
  const categories = await categoriesService.getAllCategories();

  return (
    <PublicShell>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Categorias</h1>
        <p className="text-text-secondary">Explore nossas categorias e descubra produtos incríveis para todos os gostos.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categorias/${category.slug}`}
            className="block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary"
          >
            <article className="h-full bg-surface-card border border-border-soft rounded-lg p-6 hover:border-accent-primary/30 transition-colors">
              <h3 className="text-xl font-semibold text-text-primary mb-2">{category.name}</h3>
              <p className="text-text-secondary text-sm">{category.description}</p>
            </article>
          </Link>
        ))}
      </div>
    </PublicShell>
  );
}