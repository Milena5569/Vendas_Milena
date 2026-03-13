import { ProductGrid } from "@/components/product/product-grid";
import { FilterBar } from "@/components/ui/filter-bar";
import { Button } from "@/components/ui/button";
import { BadgeOrigin } from "@/components/ui/badge-origin";
import { Search } from "lucide-react";
import { Product } from "@/types/product";

interface FeaturedProductsWithFiltersProps {
  products: Product[];
  searchTerm?: string;
  category?: string;
  gender?: string;
  store?: string;
  onSearchChange?: (search: string) => void;
  onCategoryChange?: (category: string) => void;
  onGenderChange?: (gender: string) => void;
  onStoreChange?: (store: string) => void;
  showFilters?: boolean;
  showSearch?: boolean;
}

export function FeaturedProductsWithFilters({
  products,
  searchTerm = "",
  category = "Todos",
  gender = "Todos",
  store = "Todos",
  onSearchChange,
  onCategoryChange,
  onGenderChange,
  onStoreChange,
  showFilters = true,
  showSearch = true,
}: FeaturedProductsWithFiltersProps) {
  // Filter products based on criteria
  const filteredProducts = products.filter((product) => {
    const matchSearch = !searchTerm || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchCategory = category === "Todos" || product.category.name === category;
    const matchGender = gender === "Todos" || product.gender === gender;
    const matchStore = store === "Todos" || product.links[0]?.store === store;

    return matchSearch && matchCategory && matchGender && matchStore;
  });

  if (!products || products.length === 0) {
    return (
      <section id="produtos" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-surface-card border border-border-soft rounded-full px-4 py-2 mx-auto mb-6">
              <BadgeOrigin origin="Shopee" />
              <span className="text-xs text-text-secondary">Coming Soon</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Os melhores produtos cuidadosamente selecionados para você
            </p>
          </div>
          
          <div className="bg-surface-card border border-border-soft rounded-2xl p-8 md:p-12 shadow-lg shadow-black/10">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-background-primary border border-border-soft rounded-full mx-auto shadow-lg shadow-black/10">
                <Search size={32} className="text-text-secondary" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-text-primary">
                  Produtos em breve
                </h3>
                <p className="text-text-secondary text-base leading-relaxed max-w-md mx-auto">
                  Estamos preparando os melhores produtos para você. 
                  Volte em breve para conferir as novidades!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  variant="default"
                  size="lg"
                  className="bg-accent-primary hover:bg-accent-primary/90 text-background-primary font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/20"
                >
                  Ver coleções
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border border-border-soft hover:border-accent-primary text-text-secondary hover:text-text-primary font-semibold px-8 py-3 rounded-full transition-all duration-300"
                >
                  Explorar lojas
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="produtos" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-3 bg-surface-card border border-border-soft rounded-full px-4 py-2">
              <BadgeOrigin origin="Shopee" />
              <span className="text-xs text-text-secondary">Curated Selection</span>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                Produtos em Destaque
              </h2>
              <p className="text-text-secondary text-lg mt-2">
                {filteredProducts.length} produto(s) encontrado(s)
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="inline-flex items-center gap-2 bg-surface-card border border-border-soft px-4 py-2 rounded-full text-sm text-text-secondary">
              🏆 Mais vendidos
            </span>
          </div>
        </div>

        {/* Filter Bar */}
        {showFilters && (
          <div className="mb-8">
            <FilterBar
              category={category}
              gender={gender}
              store={store}
              searchTerm={searchTerm}
              onCategoryChange={onCategoryChange}
              onGenderChange={onGenderChange}
              onStoreChange={onStoreChange}
              onSearchChange={onSearchChange}
              showSearch={showSearch}
              showCategory={true}
              showGender={true}
              showStore={true}
            />
          </div>
        )}
        
        {filteredProducts.length > 0 ? (
          <ProductGrid 
            products={filteredProducts}
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          />
        ) : (
          <div className="bg-surface-card border border-border-soft rounded-2xl p-8 md:p-12 shadow-lg shadow-black/10">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-background-primary border border-border-soft rounded-full mx-auto shadow-lg shadow-black/10">
                <Search size={32} className="text-text-secondary" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-text-primary">
                  Nenhum produto encontrado
                </h3>
                <p className="text-text-secondary text-base leading-relaxed max-w-md mx-auto">
                  Não encontramos produtos com os filtros aplicados. Tente ajustar sua busca ou explore nossas coleções.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  variant="default"
                  size="lg"
                  className="bg-accent-primary hover:bg-accent-primary/90 text-background-primary font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/20"
                >
                  Limpar filtros
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border border-border-soft hover:border-accent-primary text-text-secondary hover:text-text-primary font-semibold px-8 py-3 rounded-full transition-all duration-300"
                >
                  Ver coleções
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
