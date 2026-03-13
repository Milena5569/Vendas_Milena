"use client";

import { StoreOrigin } from "@/types/product";

interface BadgeOriginProps {
  origin: StoreOrigin;
}

export function BadgeOrigin({ origin }: BadgeOriginProps) {
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
      case "Amazon":
        return {
          bg: "bg-orange-500/15",
          border: "border-orange-400/30",
          text: "text-orange-300",
          icon: "📦"
        };
      case "Magalu":
        return {
          bg: "bg-green-500/15",
          border: "border-green-400/30",
          text: "text-green-300",
          icon: "🛍️"
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
    <div className={`inline-flex items-center gap-1.5 rounded-full border ${style.border} ${style.bg} px-2.5 py-1 text-xs font-semibold ${style.text} backdrop-blur-sm`}>
      <span className="text-sm">{style.icon}</span>
      <span className="capitalize">{origin}</span>
    </div>
  );
}
