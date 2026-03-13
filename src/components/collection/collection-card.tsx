import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Collection, CuratedCollectionPreview } from "@/types/collection";

interface CollectionCardProps {
  collection: Collection | CuratedCollectionPreview;
  mode?: "default" | "curated";
}

function isCuratedCollectionPreview(
  collection: Collection | CuratedCollectionPreview
): collection is CuratedCollectionPreview {
  return "title" in collection;
}

export function CollectionCard({ collection, mode = "default" }: CollectionCardProps) {
  const isCurated = mode === "curated" && isCuratedCollectionPreview(collection);

  const normalized = isCurated
    ? {
        featuredProduct: null,
        title: collection.title,
        description: collection.description,
        image: collection.image,
        itemCount: collection.itemCount,
        tag: collection.tag,
        ctaHref: `/colecoes#${collection.slug}`,
        ctaLabel: "Explorar coleção",
        priceHighlight: collection.priceHighlight,
      }
    : (() => {
        const baseCollection = collection as Collection;

        return {
          featuredProduct: baseCollection.products.find((product) => product.isFeatured)?.product,
          title: baseCollection.name,
          description: baseCollection.description || `${baseCollection.products.length} produto(s) na coleção`,
          image: baseCollection.image,
          itemCount: baseCollection.products.length,
          tag: baseCollection.isFeatured ? "Curadoria especial" : undefined,
          ctaHref: `/colecao/${baseCollection.slug}`,
          ctaLabel: "Ver coleção",
          priceHighlight: undefined,
        };
      })();

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-pink-300/20 bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-300/40 hover:shadow-[0_20px_46px_rgba(244,175,196,0.16)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        {normalized.image ? (
          <Image
            src={normalized.image}
            alt={normalized.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority={false}
          />
        ) : normalized.featuredProduct ? (
          <Image
            src={normalized.featuredProduct.images[0]?.url || ""}
            alt={normalized.featuredProduct.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority={false}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-transparent" />
        )}

        {normalized.tag && (
          <div className="absolute top-3 left-3 rounded-full border border-pink-200/35 bg-pink-200/15 px-3 py-1.5 text-xs font-semibold text-pink-100 shadow-[0_10px_22px_rgba(244,175,196,0.2)] backdrop-blur-sm">
            {normalized.tag}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-300/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold leading-6 text-text-primary group-hover:text-text-primary transition-colors">
            {normalized.title}
          </h3>
          <p className="text-sm text-text-secondary line-clamp-2">
            {normalized.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-2 text-xs text-text-secondary">
            <span className="inline-flex items-center gap-1 rounded-full border border-pink-300/25 bg-pink-200/10 px-2.5 py-1 text-pink-100/85">
              📦 {normalized.itemCount} itens
            </span>
            {normalized.priceHighlight ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-white/75">
                {normalized.priceHighlight}
              </span>
            ) : null}
          </div>

          <Link
            href={normalized.ctaHref}
            className="inline-flex items-center gap-2 rounded-full border border-pink-200/35 bg-gradient-to-r from-pink-300 to-pink-200 px-4 py-2 text-sm font-semibold text-background-primary transition-all duration-300 hover:from-pink-200 hover:to-pink-100 hover:shadow-[0_12px_28px_rgba(244,175,196,0.3)]"
          >
            {normalized.ctaLabel}
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}