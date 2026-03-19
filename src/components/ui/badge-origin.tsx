"use client";

import { StoreOrigin } from "@/types/product";

interface BadgeOriginProps {
  origin: StoreOrigin;
  compact?: boolean;
}

export function BadgeOrigin({ origin, compact = false }: BadgeOriginProps) {
  const getBadgeStyle = (store: StoreOrigin) => {
    switch (store) {
      case "Shopee":
        return {
          bg: "bg-red-500/15",
          border: "border-red-400/30",
          text: "text-red-300",
          icon: "🛒"
        };
      case "Shein":
        return {
          bg: "bg-pink-500/15",
          border: "border-pink-400/30",
          text: "text-pink-300",
          icon: "👗"
        };
      case "TikTok Shop":
        return {
          bg: "bg-blue-500/15",
          border: "border-blue-400/30",
          text: "text-blue-300",
          icon: "🎵"
        };
      default:
        return {
          bg: "bg-gray-500/15",
          border: "border-gray-400/30",
          text: "text-gray-300",
          icon: "🛒"
        };
    }
  };

  const style = getBadgeStyle(origin);

  return (
    <div
      className={`inline-flex items-center rounded-full border ${style.border} ${style.bg} ${style.text} backdrop-blur-sm ${
        compact
          ? "gap-1 px-2 py-0.5 text-[10px] font-semibold sm:gap-1.5 sm:px-2.5 sm:py-1 sm:text-xs"
          : "gap-1.5 px-2.5 py-1 text-xs font-semibold"
      }`}
    >
      <span className={compact ? "text-[11px] sm:text-sm" : "text-sm"}>{style.icon}</span>
      <span className="capitalize leading-none">{origin}</span>
    </div>
  );
}
