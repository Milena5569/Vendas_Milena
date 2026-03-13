import { categoriesService } from "@/services/categories";

export default async function CategoriesPage() {
  const categories = await categoriesService.getAllCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Categorias</h1>
        <p className="text-text-secondary">Explore nossas categorias e descubra produtos incríveis para todos os gostos.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-surface-card border border-border-soft rounded-lg p-6 hover:border-accent-primary/30 transition-colors">
            <h3 className="text-xl font-semibold text-text-primary mb-2">{category.name}</h3>
            <p className="text-text-secondary text-sm">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}