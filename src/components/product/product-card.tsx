import Image from "next/image";
import { ArrowUpRight, Tag, Flame } from "lucide-react";
import { Product } from "@/types/product";
import { formatCurrency, calculateDiscountPercentage } from "@/lib/utils";
import { BadgeOrigin } from "../ui/badge-origin";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discountPercentage = calculateDiscountPercentage(
    product.price,
    product.discountPrice || product.price
  );

  const primaryLink = product.links[0];
  const primaryImage = product.images[0]?.url;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border-soft bg-surface-card shadow-lg shadow-black/12 transition-all duration-300 hover:border-accent-primary/35">
      {/* Hot badge */}
      {product.isHot ? (
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 rounded-full bg-accent-primary/15 border border-accent-primary/30 px-2 py-1 text-xs font-semibold text-accent-primary">
            <Flame size={12} />
            Mais vendido
          </span>
        </div>
      ) : null}

      {/* View count badge */}
      {product.viewCount > 0 ? (
        <div className="absolute top-3 right-3 z-10 hidden min-[360px]:block">
          <span className="inline-flex items-center gap-1 rounded-full bg-surface-card border border-border-soft px-2 py-1 text-xs font-medium text-text-secondary">
            👁 {product.viewCount}
          </span>
        </div>
      ) : null}

      <div className="relative aspect-square overflow-hidden">
        {primaryImage ? (
          <Image
            src={primaryImage}
            alt={product.name}
            fill
            className="object-cover transition duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, (max-width: 1536px) 25vw, 20vw"
            priority={false}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-pink-300/20 via-pink-200/10 to-transparent" />
        )}

        <div className="absolute left-3 top-3">
          <BadgeOrigin origin={primaryLink?.store || "Outros"} />
        </div>

        {discountPercentage > 0 && (
          <div className="absolute right-3 top-12 z-10 rounded-full border border-accent-primary/30 bg-accent-primary/15 px-3 py-1.5 text-xs font-bold text-accent-primary shadow-lg shadow-accent-primary/20">
            -{discountPercentage}%
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="space-y-3 p-4 sm:space-y-3.5">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[11px] text-text-secondary sm:text-xs">
            <Tag size={14} />
            <span className="capitalize">{product.category.name}</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline capitalize">{product.gender}</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline capitalize">{product.type}</span>
          </div>

          <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-text-primary md:text-base group-hover:text-white transition-colors">
            {product.name}
          </h3>
        </div>

        <div className="space-y-1">
          <p className="text-sm text-text-secondary/85 line-through">
            {formatCurrency(product.price)}
          </p>
          <p className="text-2xl font-bold tracking-tight text-accent-primary group-hover:text-accent-primary transition-colors">
            {formatCurrency(product.discountPrice || product.price)}
          </p>
        </div>

        {primaryLink ? (
          <a
            href={primaryLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-pink-200/35 bg-gradient-to-r from-[#F7C8D8] via-[#F4AFC4] to-[#EFA9C5] px-4 py-3 text-sm font-semibold text-[#08080A] transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/25"
          >
            Ver oferta
            <ArrowUpRight size={16} />
          </a>
        ) : (
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-border-soft bg-background-primary px-4 py-3 text-sm font-semibold text-text-secondary opacity-80 cursor-not-allowed"
          >
            Produto indisponível
            <ArrowUpRight size={16} aria-hidden="true" />
          </button>
        )}
      </div>
    </article>
  );
}
