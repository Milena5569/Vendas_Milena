import { CollectionGrid } from "@/components/collection/collection-grid";
import { Collection } from "@/types/collection";

interface FeaturedCollectionsProps {
  collections: Collection[];
  isHomepage?: boolean;
}

export function FeaturedCollections({ collections, isHomepage = false }: FeaturedCollectionsProps) {
  if (!collections || collections.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
            Curadorias editoriais em destaque
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Reels, carrosséis e campanhas sazonais com produtos selecionados para cada momento
          </p>
        </div>
        
        <CollectionGrid 
          collections={collections}
          columns={isHomepage ? { sm: 1, md: 2, lg: 3, xl: 4 } : { sm: 1, md: 2, lg: 3, xl: 3 }}
        />
      </div>
    </section>
  );
}
