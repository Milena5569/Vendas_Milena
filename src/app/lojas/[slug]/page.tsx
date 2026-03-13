import { notFound } from "next/navigation";

export default function StorePage({ params }: { params: { slug: string } }) {
  const stores = {
    "shopee": {
      name: "Shopee",
      description: "Plataforma de comércio eletrônico com milhões de produtos.",
      link: "https://shopee.com.br"
    },
    "shein": {
      name: "Shein",
      description: "Moda jovem e acessível com entrega rápida.",
      link: "https://shein.com.br"
    },
    "tiktok-shop": {
      name: "TikTok Shop",
      description: "Compras integradas ao TikTok com descobertas virais.",
      link: "https://tiktok.com"
    }
  };

  const store = stores[params.slug as keyof typeof stores];
  
  if (!store) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-text-primary mb-4">{store.name}</h1>
        <p className="text-text-secondary mb-8">{store.description}</p>
        
        <div className="bg-surface-card border border-border-soft rounded-lg p-6">
          <p className="text-text-secondary mb-4">Visite a loja oficial:</p>
          <a 
            href={store.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-accent-primary text-white rounded-full hover:bg-accent-primary/90 transition-colors text-lg font-semibold"
          >
            Ir para {store.name}
          </a>
        </div>
      </div>
    </div>
  );
}