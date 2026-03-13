import { Product, Category } from "@/types/product";

const defaultCategory: Category = {
  id: "1",
  name: "Eletronicos",
  slug: "eletronicos",
  description: "Produtos eletrônicos e gadgets",
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date()
};

export const products: Product[] = [
  {
    id: "1",
    name: "Fone Bluetooth Premium Bass",
    slug: "fone-bluetooth-premium-bass",
    description: "Fone de ouvido Bluetooth com excelente qualidade de som e bateria de longa duração",
    shortDescription: "Fone Bluetooth com ótima qualidade de som",
    price: 199.9,
    discountPrice: 129.9,
    category: defaultCategory,
    gender: "Uni",
    type: "Individual",
    images: [
      {
        id: "1",
        url: "/images/products/fone-bluetooth.jpg",
        alt: "Fone Bluetooth Premium Bass",
        isPrimary: true,
        order: 1
      }
    ],
    links: [
      {
        id: "1",
        url: "https://shopee.com.br/seu-link-afiliado-1",
        store: "Shopee",
        isActive: true,
        createdAt: new Date()
      }
    ],
    tags: ["eletronicos", "audio", "bluetooth"],
    isFeatured: true,
    isHot: true,
    viewCount: 37,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "2",
    name: "Kit Skincare Glow Essentials",
    slug: "kit-skincare-glow-essentials",
    description: "Kit completo de skincare para pele radiante e hidratada",
    shortDescription: "Kit skincare para pele radiante",
    price: 249.9,
    discountPrice: 169.9,
    category: {
      ...defaultCategory,
      id: "2",
      name: "Beleza",
      slug: "beleza",
      description: "Produtos de beleza e cuidados pessoais"
    },
    gender: "Fem",
    type: "Individual",
    images: [
      {
        id: "2",
        url: "/images/products/kit-skincare.jpg",
        alt: "Kit Skincare Glow Essentials",
        isPrimary: true,
        order: 1
      }
    ],
    links: [
      {
        id: "2",
        url: "https://br.shein.com/seu-link-afiliado-2",
        store: "Shein",
        isActive: true,
        createdAt: new Date()
      }
    ],
    tags: ["beleza", "skincare", "cuidados"],
    isFeatured: true,
    isHot: false,
    viewCount: 25,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "3",
    name: "Luminaria LED Sunset Decor",
    slug: "luminaria-led-sunset-decor",
    description: "Luminária LED com efeito de pôr-do-sol para decoração moderna",
    shortDescription: "Luminária LED com efeito de pôr-do-sol",
    price: 159.9,
    discountPrice: 89.9,
    category: {
      ...defaultCategory,
      id: "3",
      name: "Casa",
      slug: "casa",
      description: "Produtos para casa e decoração"
    },
    gender: "Uni",
    type: "Individual",
    images: [
      {
        id: "3",
        url: "/images/products/luminaria-led.jpg",
        alt: "Luminaria LED Sunset Decor",
        isPrimary: true,
        order: 1
      }
    ],
    links: [
      {
        id: "3",
        url: "https://www.tiktok.com/seu-link-afiliado-3",
        store: "TikTok Shop",
        isActive: true,
        createdAt: new Date()
      }
    ],
    tags: ["casa", "decoracao", "iluminacao"],
    isFeatured: false,
    isHot: true,
    viewCount: 42,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
];
