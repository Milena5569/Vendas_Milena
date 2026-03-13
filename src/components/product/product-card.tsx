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

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border-soft bg-surface-card shadow-lg shadow-black/10 transition-all duration-300 hover:scale-102 hover:border-accent-primary/30">
      {/* Hot badge */}
      <div className="absolute top-3 left-3 z-10">
        <span className="inline-flex items-center gap-1 rounded-full bg-accent-primary/15 border border-accent-primary/30 px-2 py-1 text-xs font-semibold text-accent-primary">
          <Flame size={12} />
          Mais vendido
        </span>
      </div>

      {/* View count badge */}
      <div className="absolute top-3 right-3 z-10">
        <span className="inline-flex items-center gap-1 rounded-full bg-surface-card border border-border-soft px-2 py-1 text-xs font-medium text-text-secondary">
          👁 37
        </span>
      </div>

      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={product.images[0]?.url || ""}
          alt={product.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority={false}
        />

        <div className="absolute left-3 top-3">
          <BadgeOrigin origin={product.links[0]?.store || "Shopee"} />
        </div>

        {discountPercentage > 0 && (
          <div className="absolute right-3 top-12 z-10 rounded-full border border-accent-primary/30 bg-accent-primary/15 px-3 py-1.5 text-xs font-bold text-accent-primary shadow-lg shadow-accent-primary/20">
            -{discountPercentage}%
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="space-y-4 p-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-text-secondary">
            <Tag size={14} />
            <span className="capitalize">{product.category.name}</span>
            <span>•</span>
            <span className="capitalize">{product.gender}</span>
            <span>•</span>
            <span className="capitalize">{product.type}</span>
          </div>

          <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-text-primary md:text-base group-hover:text-text-primary transition-colors">
            {product.name}
          </h3>
        </div>

        <div className="space-y-1">
          <p className="text-sm text-text-secondary line-through">
            {formatCurrency(product.price)}
          </p>
          <p className="text-2xl font-bold tracking-tight text-accent-primary group-hover:text-accent-primary transition-colors">
            {formatCurrency(product.discountPrice || product.price)}
          </p>
        </div>

        <a
          href={product.links[0]?.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-primary px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-hover hover:scale-102 hover:shadow-lg hover:shadow-accent-primary/20"
        >
          Ver Oferta
          <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}
