import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BadgeOrigin } from "@/components/ui/badge-origin";

interface CuratedOfferCardOffer {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  originalPrice?: string;
  store: "Shopee" | "Shein" | "TikTok Shop" | "Amazon" | "Magalu";
  category: string;
  link: string;
  highlight: string;
}

interface CuratedOfferCardProps {
  offer: CuratedOfferCardOffer;
}

export function CuratedOfferCard({ offer }: CuratedOfferCardProps) {
  const parsePrice = (value: string) => {
    const normalized = value.replace("R$", "").replace(/\./g, "").replace(",", ".").trim();
    const parsed = Number(normalized);
    return Number.isNaN(parsed) ? null : parsed;
  };

  const original = offer.originalPrice ? parsePrice(offer.originalPrice) : null;
  const current = parsePrice(offer.price);
  const savings = original && current ? Math.max(0, original - current) : null;

  const discoveryBadges = ["🔥 Oferta do dia", "⭐ Mais vendido", "💸 Preço que compensa"];
  const badgeSeed = offer.id.charCodeAt(offer.id.length - 1) % discoveryBadges.length;
  const cardBadges = [
    discoveryBadges[badgeSeed],
    discoveryBadges[(badgeSeed + 1) % discoveryBadges.length],
  ];

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-pink-300/20 bg-[#111114] shadow-[0_12px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-300/50 hover:shadow-[0_0_0_1px_rgba(244,175,196,0.16),0_14px_36px_rgba(244,175,196,0.16)]">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={offer.image}
          alt={offer.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <div className="absolute left-3 top-3">
          <BadgeOrigin origin={offer.store} />
        </div>

        <div className="absolute right-3 top-3 rounded-full border border-pink-200/40 bg-pink-300/20 px-3 py-1 text-xs font-semibold text-pink-100 backdrop-blur-sm">
          {offer.highlight}
        </div>
      </div>

      <div className="space-y-3 p-4 md:p-5">
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-pink-100/80">{offer.category}</p>
          <h3 className="mt-1 line-clamp-2 text-base font-semibold text-white">{offer.title}</h3>

          <div className="mt-2 flex flex-wrap gap-1.5">
            {cardBadges.map((badge) => (
              <span
                key={`${offer.id}-${badge}`}
                className="rounded-full border border-pink-200/25 bg-pink-200/10 px-2.5 py-1 text-[10px] text-pink-100/85"
              >
                {badge}
              </span>
            ))}
          </div>

          <p className="mt-2 line-clamp-2 text-sm text-white/70">{offer.description}</p>
        </div>

        <div className="space-y-1">
          {offer.originalPrice ? (
            <p className="text-sm text-white/45 line-through">{offer.originalPrice}</p>
          ) : null}
          <p className="text-2xl font-bold tracking-tight text-[#F7C8D8]">{offer.price}</p>
          {savings ? (
            <p className="text-xs font-medium text-pink-100/75">Economize R$ {savings.toFixed(2).replace(".", ",")}</p>
          ) : null}
        </div>

        <a
          href={offer.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-pink-300/30 bg-pink-200/10 px-4 py-2.5 text-sm font-semibold text-pink-100 transition-all duration-300 hover:border-pink-300/50 hover:bg-pink-300/20 hover:text-white hover:shadow-[0_0_20px_rgba(244,175,196,0.18)]"
        >
          Ver oferta agora
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}
