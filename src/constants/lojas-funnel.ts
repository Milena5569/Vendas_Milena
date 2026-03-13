import { StoreOrigin } from "@/types/product";

export type LojasCategoryKey =
  | "feminino"
  | "masculino"
  | "casa"
  | "skincare"
  | "infantil";

export interface LojasCategoryConfig {
  key: LojasCategoryKey;
  label: string;
  shortDescription: string;
}

export interface LojasFunnelProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  originalPrice?: string;
  store: StoreOrigin;
  category: LojasCategoryKey;
  categoryLabel: string;
  link: string;
  highlight: string;
}

export const lojasCategories: LojasCategoryConfig[] = [
  {
    key: "feminino",
    label: "Feminino",
    shortDescription: "Curadoria elegante com peças e acessórios em alta.",
  },
  {
    key: "masculino",
    label: "Masculino",
    shortDescription: "Seleção prática para estilo, rotina e performance.",
  },
  {
    key: "casa",
    label: "Casa",
    shortDescription: "Itens para um ambiente funcional, aconchegante e moderno.",
  },
  {
    key: "skincare",
    label: "Skin Care",
    shortDescription: "Rotinas completas de autocuidado e bem-estar diário.",
  },
  {
    key: "infantil",
    label: "Infantil",
    shortDescription: "Produtos úteis e divertidos para o dia a dia das crianças.",
  },
];

export const defaultLojasCategory: LojasCategoryKey = "feminino";

export const partnerStores = [
  {
    id: "store-shopee",
    name: "Shopee",
    slug: "shopee",
    description:
      "Ofertas rápidas para compras inteligentes com excelente custo-benefício.",
  },
  {
    id: "store-shein",
    name: "Shein",
    slug: "shein",
    description:
      "Moda e beleza com forte apelo visual e novidades de alta conversão.",
  },
  {
    id: "store-tiktok-shop",
    name: "TikTok Shop",
    slug: "tiktok-shop",
    description:
      "Produtos virais e criativos alinhados ao comportamento de descoberta.",
  },
] as const;

export const lojasFunnelProducts: LojasFunnelProduct[] = [
  {
    id: "fem-shopee-1",
    title: "Bolsa Tiracolo Minimalista",
    description: "Design sofisticado com acabamento premium para looks versáteis.",
    image: "/images/products/luminaria-led.jpg",
    price: "R$ 79,90",
    originalPrice: "R$ 119,90",
    store: "Shopee",
    category: "feminino",
    categoryLabel: "Feminino",
    link: "https://shopee.com.br",
    highlight: "Escolha das clientes",
  },
  {
    id: "fem-shein-1",
    title: "Vestido Midi Elegance",
    description: "Caimento leve para composições românticas e modernas.",
    image: "/images/products/kit-skincare.jpg",
    price: "R$ 98,90",
    store: "Shein",
    category: "feminino",
    categoryLabel: "Feminino",
    link: "https://shein.com.br",
    highlight: "Mais vendido",
  },
  {
    id: "fem-tiktok-1",
    title: "Kit Acessórios Fashion",
    description: "Conjunto viral para elevar o visual com praticidade.",
    image: "/images/products/fone-bluetooth.jpg",
    price: "R$ 59,90",
    store: "TikTok Shop",
    category: "feminino",
    categoryLabel: "Feminino",
    link: "https://tiktok.com",
    highlight: "Trend da semana",
  },
  {
    id: "masc-shopee-1",
    title: "Relógio Casual Masculino",
    description: "Visual clean e resistente para o dia a dia.",
    image: "/images/products/fone-bluetooth.jpg",
    price: "R$ 89,90",
    store: "Shopee",
    category: "masculino",
    categoryLabel: "Masculino",
    link: "https://shopee.com.br",
    highlight: "Frete reduzido",
  },
  {
    id: "masc-shein-1",
    title: "Camisa Slim Premium",
    description: "Tecido confortável para trabalho, encontros e eventos.",
    image: "/images/products/kit-skincare.jpg",
    price: "R$ 84,90",
    store: "Shein",
    category: "masculino",
    categoryLabel: "Masculino",
    link: "https://shein.com.br",
    highlight: "Alta avaliação",
  },
  {
    id: "masc-tiktok-1",
    title: "Mochila Urbana Tech",
    description: "Modelo funcional com divisórias para rotina dinâmica.",
    image: "/images/products/luminaria-led.jpg",
    price: "R$ 109,90",
    originalPrice: "R$ 149,90",
    store: "TikTok Shop",
    category: "masculino",
    categoryLabel: "Masculino",
    link: "https://tiktok.com",
    highlight: "Cupom exclusivo",
  },
  {
    id: "casa-shopee-1",
    title: "Organizador Modular Multiuso",
    description: "Perfeito para cozinha, banheiro e home office organizado.",
    image: "/images/products/luminaria-led.jpg",
    price: "R$ 69,90",
    store: "Shopee",
    category: "casa",
    categoryLabel: "Casa",
    link: "https://shopee.com.br",
    highlight: "Top utilidades",
  },
  {
    id: "casa-shein-1",
    title: "Conjunto Decor Soft Home",
    description: "Peças decorativas com estética clean e acolhedora.",
    image: "/images/products/kit-skincare.jpg",
    price: "R$ 129,90",
    store: "Shein",
    category: "casa",
    categoryLabel: "Casa",
    link: "https://shein.com.br",
    highlight: "Estilo premium",
  },
  {
    id: "casa-tiktok-1",
    title: "Luminária LED Ambiente",
    description: "Crie cenários elegantes e funcionais em poucos segundos.",
    image: "/images/products/luminaria-led.jpg",
    price: "R$ 94,90",
    originalPrice: "R$ 159,90",
    store: "TikTok Shop",
    category: "casa",
    categoryLabel: "Casa",
    link: "https://tiktok.com",
    highlight: "Oferta viral",
  },
  {
    id: "skin-shopee-1",
    title: "Sérum Facial Vitamina C",
    description: "Luminosidade e uniformização com textura leve.",
    image: "/images/products/kit-skincare.jpg",
    price: "R$ 72,90",
    store: "Shopee",
    category: "skincare",
    categoryLabel: "Skin Care",
    link: "https://shopee.com.br",
    highlight: "Rotina glow",
  },
  {
    id: "skin-shein-1",
    title: "Kit Limpeza + Hidratação",
    description: "Passo a passo completo para cuidado diário.",
    image: "/images/products/kit-skincare.jpg",
    price: "R$ 139,90",
    originalPrice: "R$ 189,90",
    store: "Shein",
    category: "skincare",
    categoryLabel: "Skin Care",
    link: "https://shein.com.br",
    highlight: "Combo favorito",
  },
  {
    id: "skin-tiktok-1",
    title: "Massageador Facial Ice Glow",
    description: "Tendência de autocuidado para pele revigorada.",
    image: "/images/products/fone-bluetooth.jpg",
    price: "R$ 65,90",
    store: "TikTok Shop",
    category: "skincare",
    categoryLabel: "Skin Care",
    link: "https://tiktok.com",
    highlight: "Hit no TikTok",
  },
  {
    id: "kids-shopee-1",
    title: "Kit Escolar Criativo",
    description: "Itens coloridos para incentivar aprendizado e organização.",
    image: "/images/products/luminaria-led.jpg",
    price: "R$ 54,90",
    store: "Shopee",
    category: "infantil",
    categoryLabel: "Infantil",
    link: "https://shopee.com.br",
    highlight: "Volta às aulas",
  },
  {
    id: "kids-shein-1",
    title: "Conjunto Infantil Confort",
    description: "Roupa leve, divertida e ideal para brincar com liberdade.",
    image: "/images/products/kit-skincare.jpg",
    price: "R$ 76,90",
    store: "Shein",
    category: "infantil",
    categoryLabel: "Infantil",
    link: "https://shein.com.br",
    highlight: "Novo lançamento",
  },
  {
    id: "kids-tiktok-1",
    title: "Brinquedo Sensorial Smart Play",
    description: "Diversão educativa com foco em estímulo criativo.",
    image: "/images/products/fone-bluetooth.jpg",
    price: "R$ 69,90",
    originalPrice: "R$ 99,90",
    store: "TikTok Shop",
    category: "infantil",
    categoryLabel: "Infantil",
    link: "https://tiktok.com",
    highlight: "Sucesso entre mães",
  },
];

export function getCategoryFromQuery(queryValue?: string): LojasCategoryKey {
  if (!queryValue) {
    return defaultLojasCategory;
  }

  const matchedCategory = lojasCategories.find((category) => category.key === queryValue);
  return matchedCategory?.key ?? defaultLojasCategory;
}