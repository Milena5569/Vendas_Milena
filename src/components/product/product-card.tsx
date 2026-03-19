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
    <article className="group relative overflow-hidden rounded-xl border border-border-soft bg-surface-card shadow-md shadow-black/10 transition-[transform,border-color,box-shadow] duration-300 ease-out [@media(hover:hover)]:hover:-translate-y-0.5 [@media(hover:hover)]:hover:border-accent-primary/35 sm:rounded-2xl sm:shadow-lg sm:shadow-black/12">
      {/* Hot badge */}
      {product.isHot ? (
        <div className="absolute left-2 top-2 z-10 sm:left-3 sm:top-3">
          <span className="inline-flex items-center gap-1 rounded-full border border-accent-primary/30 bg-accent-primary/15 px-1.5 py-0.5 text-[10px] font-semibold text-accent-primary sm:px-2 sm:py-1 sm:text-xs">
            <Flame size={10} className="sm:h-3 sm:w-3" />
            <span className="leading-none">Mais vendido</span>
          </span>
        </div>
      ) : null}

      {/* View count badge */}
      {product.viewCount > 0 ? (
        <div className="absolute right-2 top-2 z-10 hidden min-[390px]:block sm:right-3 sm:top-3">
          <span className="inline-flex items-center gap-1 rounded-full border border-border-soft bg-surface-card px-1.5 py-0.5 text-[10px] font-medium text-text-secondary sm:px-2 sm:py-1 sm:text-xs">
            👁 {product.viewCount}
          </span>
        </div>
      ) : null}

      <div className="relative aspect-[4/5] overflow-hidden rounded-t-xl sm:aspect-square sm:rounded-t-2xl">
        {primaryImage ? (
          <Image
            src={primaryImage}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 ease-out [@media(hover:hover)]:group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1536px) 25vw, 20vw"
            priority={false}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-pink-300/20 via-pink-200/10 to-transparent" />
        )}

        <div className="absolute left-2 top-2 sm:left-3 sm:top-3">
          <BadgeOrigin origin={primaryLink?.store || "Outros"} compact />
        </div>

        {discountPercentage > 0 && (
          <div className="absolute right-2 top-10 z-10 rounded-full border border-accent-primary/30 bg-accent-primary/15 px-2 py-0.5 text-[10px] font-bold text-accent-primary shadow-md shadow-accent-primary/15 sm:right-3 sm:top-12 sm:px-3 sm:py-1.5 sm:text-xs sm:shadow-lg sm:shadow-accent-primary/20">
            -{discountPercentage}%
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 [@media(hover:hover)]:group-hover:opacity-100" />
      </div>

      <div className="space-y-2 p-2.5 sm:space-y-3 sm:p-4">
        <div className="space-y-1.5 sm:space-y-2">
          <div className="flex items-center gap-1.5 text-[10px] text-text-secondary sm:gap-2 sm:text-xs">
            <Tag size={12} className="sm:h-[14px] sm:w-[14px]" />
            <span className="truncate capitalize">{product.category.name}</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline capitalize">{product.gender}</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline capitalize">{product.type}</span>
          </div>

          <h3 className="line-clamp-2 min-h-[2.4rem] text-xs font-semibold leading-[1.2rem] text-text-primary transition-colors group-hover:text-white sm:min-h-[2.7rem] sm:text-sm sm:leading-5 md:text-base">
            {product.name}
          </h3>
        </div>

        <div className="space-y-0.5 sm:space-y-1">
          <p className="text-[11px] text-text-secondary/85 line-through sm:text-sm">
            {formatCurrency(product.price)}
          </p>
          <p className="text-lg font-bold tracking-tight text-accent-primary transition-colors group-hover:text-accent-primary sm:text-2xl">
            {formatCurrency(product.discountPrice || product.price)}
          </p>
        </div>

        {primaryLink ? (
          <a
            href={primaryLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-9 w-full items-center justify-center gap-1.5 rounded-full border border-pink-200/35 bg-gradient-to-r from-[#F7C8D8] via-[#F4AFC4] to-[#EFA9C5] px-3 py-2 text-xs font-semibold text-[#08080A] transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/25 sm:min-h-11 sm:gap-2 sm:px-4 sm:py-3 sm:text-sm"
          >
            Ver oferta
            <ArrowUpRight size={14} className="sm:h-4 sm:w-4" />
          </a>
        ) : (
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="inline-flex min-h-9 w-full items-center justify-center gap-1.5 rounded-full border border-border-soft bg-background-primary px-3 py-2 text-xs font-semibold text-text-secondary opacity-80 cursor-not-allowed sm:min-h-11 sm:gap-2 sm:px-4 sm:py-3 sm:text-sm"
          >
            Produto indisponível
            <ArrowUpRight size={14} className="sm:h-4 sm:w-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </article>
  );
}
