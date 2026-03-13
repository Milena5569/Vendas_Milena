import { StoreOrigin } from "@/types/product";

export interface CuratedOffer {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  originalPrice?: string;
  store: StoreOrigin;
  category: string;
  isRecent: boolean;
  link: string;
  highlight: string;
}

export interface PartnerStore {
  id: string;
  name: string;
  slug: string;
  description: string;
  promotions: CuratedOffer[];
}

const curatedOffers: CuratedOffer[] = [
  {
    id: "offer-1",
    title: "Fone Bluetooth Premium Bass",
    description: "Áudio envolvente, bateria de longa duração e design moderno para rotina e treino.",
    image: "/images/products/fone-bluetooth.jpg",
    price: "R$ 129,90",
    originalPrice: "R$ 199,90",
    store: "Shopee",
    category: "Eletrônicos",
    isRecent: true,
    link: "https://shopee.com.br",
    highlight: "35% OFF hoje",
  },
  {
    id: "offer-2",
    title: "Kit Skincare Glow Essentials",
    description: "Rotina completa de autocuidado com foco em hidratação, luminosidade e praticidade.",
    image: "/images/products/kit-skincare.jpg",
    price: "R$ 169,90",
    originalPrice: "R$ 249,90",
    store: "Shein",
    category: "Beleza",
    isRecent: true,
    link: "https://shein.com.br",
    highlight: "Frete com desconto",
  },
  {
    id: "offer-3",
    title: "Luminária LED Sunset Decor",
    description: "Iluminação ambiente com efeito sunset para criar cenários aconchegantes.",
    image: "/images/products/luminaria-led.jpg",
    price: "R$ 89,90",
    originalPrice: "R$ 159,90",
    store: "TikTok Shop",
    category: "Casa",
    isRecent: true,
    link: "https://tiktok.com",
    highlight: "Oferta viral da semana",
  },
  {
    id: "offer-4",
    title: "Headset Bluetooth Compact",
    description: "Modelo leve e dobrável com áudio estável para estudos, chamadas e lazer.",
    image: "/images/products/fone-bluetooth.jpg",
    price: "R$ 119,90",
    originalPrice: "R$ 179,90",
    store: "Shopee",
    category: "Tecnologia",
    isRecent: true,
    link: "https://shopee.com.br",
    highlight: "Cupom aplicado",
  },
  {
    id: "offer-5",
    title: "Skincare Calm & Glow",
    description: "Seleção de cuidados essenciais com textura leve e acabamento confortável.",
    image: "/images/products/kit-skincare.jpg",
    price: "R$ 149,90",
    originalPrice: "R$ 219,90",
    store: "Shein",
    category: "Autocuidado",
    isRecent: true,
    link: "https://shein.com.br",
    highlight: "Combo em destaque",
  },
  {
    id: "offer-6",
    title: "Luz Ambiente Creator Edition",
    description: "Perfeita para setup, vídeos e home decor com intensidade ajustável.",
    image: "/images/products/luminaria-led.jpg",
    price: "R$ 94,90",
    originalPrice: "R$ 149,90",
    store: "TikTok Shop",
    category: "Decoração",
    isRecent: true,
    link: "https://tiktok.com",
    highlight: "Mais clicado hoje",
  },
];

export const recentOffers = curatedOffers.filter((offer) => offer.isRecent);

export const storesWithPromotions: PartnerStore[] = [
  {
    id: "store-shopee",
    name: "Shopee",
    slug: "shopee",
    description:
      "Acompanhe eletrônicos, utilidades e ofertas relâmpago selecionadas para compra rápida e inteligente.",
    promotions: curatedOffers.filter((offer) => offer.store === "Shopee"),
  },
  {
    id: "store-shein",
    name: "Shein",
    slug: "shein",
    description:
      "Descubra novidades de moda e beleza com curadoria visual pensada para facilitar decisões de compra.",
    promotions: curatedOffers.filter((offer) => offer.store === "Shein"),
  },
  {
    id: "store-tiktok-shop",
    name: "TikTok Shop",
    slug: "tiktok-shop",
    description:
      "Explore produtos virais e achados em alta com seleção alinhada às tendências de creators.",
    promotions: curatedOffers.filter((offer) => offer.store === "TikTok Shop"),
  },
];
