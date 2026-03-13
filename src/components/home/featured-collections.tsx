import { CollectionGrid } from "@/components/collection/collection-grid";
import { BadgeOrigin } from "@/components/ui/badge-origin";
import { Package } from "lucide-react";
import { Collection } from "@/types/collection";
import Link from "next/link";
import { COLLECTIONS_PAGE_PATH, STORES_PAGE_PATH } from "@/constants/navigation";

interface FeaturedCollectionsProps {
  collections: Collection[];
  isHomepage?: boolean;
}

export function FeaturedCollections({ collections, isHomepage = false }: FeaturedCollectionsProps) {
  if (!collections || collections.length === 0) {
    return (
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 rounded-full border border-pink-300/25 bg-pink-200/10 px-5 py-2.5 mx-auto mb-6 shadow-[0_8px_24px_rgba(244,175,196,0.12)] backdrop-blur-sm transition-all duration-300 hover:border-pink-300/35 hover:bg-pink-200/15">
              <BadgeOrigin origin="Shopee" />
              <span className="text-xs font-medium tracking-wide text-pink-100/90">Curated Collections</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
              Coleções em Destaque
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Descubra coleções cuidadosamente curadas com os melhores produtos
            </p>
          </div>
          
          <div className="relative overflow-hidden rounded-[28px] border border-pink-300/20 bg-white/[0.03] p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="pointer-events-none absolute -top-24 -left-16 h-56 w-56 rounded-full bg-pink-300/12 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -right-20 h-64 w-64 rounded-full bg-pink-200/10 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(244,175,196,0.14),transparent_58%)]" />

            <div className="relative text-center space-y-7 max-w-xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mx-auto border border-pink-300/25 bg-background-primary/60 shadow-[0_12px_30px_rgba(244,175,196,0.16)]">
                <Package size={32} className="text-pink-100/85" />
              </div>
              
              <div className="space-y-3.5">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                  Coleções em breve
                </h3>
                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-md mx-auto">
                  Estamos preparando coleções incríveis para você descobrir. 
                  Volte em breve para conferir as novidades!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href={COLLECTIONS_PAGE_PATH}
                  aria-label="Explorar coleções em destaque"
                  className="rounded-full border border-pink-200/30 bg-gradient-to-r from-pink-300 to-pink-200 text-background-primary font-semibold px-8 py-3 shadow-[0_8px_24px_rgba(244,175,196,0.2)] transition-all duration-300 hover:-translate-y-[1px] hover:from-pink-200 hover:to-pink-100 hover:shadow-[0_10px_30px_rgba(244,175,196,0.28)]"
                >
                  Explorar produtos
                </Link>
                <Link
                  href={STORES_PAGE_PATH}
                  aria-label="Ver lojas parceiras"
                  className="rounded-full border border-pink-300/30 bg-transparent text-pink-100/85 hover:text-white font-semibold px-8 py-3 transition-all duration-300 hover:-translate-y-[1px] hover:border-pink-300/50 hover:bg-pink-300/10 hover:shadow-[0_8px_24px_rgba(244,175,196,0.15)]"
                >
                  Ver lojas
                </Link>
              </div>

              <div className="pointer-events-none absolute top-8 left-8 h-1.5 w-1.5 rounded-full bg-pink-200/60" />
              <div className="pointer-events-none absolute top-16 right-14 h-1 w-1 rounded-full bg-pink-100/50" />
              <div className="pointer-events-none absolute bottom-14 left-16 h-1 w-1 rounded-full bg-pink-200/40" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 rounded-full border border-pink-300/25 bg-pink-200/10 px-5 py-2.5 mx-auto mb-6 shadow-[0_8px_24px_rgba(244,175,196,0.12)] backdrop-blur-sm transition-all duration-300 hover:border-pink-300/35 hover:bg-pink-200/15">
            <BadgeOrigin origin="Shopee" />
            <span className="text-xs font-medium tracking-wide text-pink-100/90">Curated Collections</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
            Coleções em Destaque
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Descubra coleções cuidadosamente curadas com os melhores produtos
          </p>
        </div>
        
        <CollectionGrid 
          collections={collections}
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        />
      </div>
    </section>
  );
}
