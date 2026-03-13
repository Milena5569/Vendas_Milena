import Link from "next/link";

export function StoresInformationSection() {
  const stores = [
    {
      name: "Shopee",
      icon: "🛍️",
      description: "Encontre eletrônicos, utilidades, acessórios, itens para casa e ofertas relâmpago com excelente variedade e preços competitivos.",
      color: "from-blue-400 to-cyan-400",
      href: "/lojas#shopee",
    },
    {
      name: "Shein",
      icon: "👗",
      description: "Descubra moda, beleza, lifestyle e itens em alta com apelo visual forte, tendências e opções populares para diferentes estilos.",
      color: "from-pink-400 to-purple-400",
      href: "/lojas#shein",
    },
    {
      name: "TikTok Shop",
      icon: "📱",
      description: "Acompanhe produtos virais, achados em alta e itens impulsionados por creators, tendências e descoberta social.",
      color: "from-black to-gray-600",
      href: "/lojas#tiktok",
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0D0D10] to-[#111114]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
            Compre nas lojas que mais movimentam ofertas online
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Na ClickVendas, reunimos oportunidades das principais plataformas de compra para facilitar sua busca por produtos desejados, tendências e promoções relevantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {stores.map((store, index) => (
            <div
              key={store.name}
              className="group rounded-xl p-8 border border-pink-300/20 bg-[#111114] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-pink-300/40 hover:shadow-[0_10px_30px_rgba(244,175,196,0.12)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${store.color} flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                  {store.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
                    {store.name}
                  </h3>
                  <p className="text-sm text-white/60">Loja parceira</p>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed mb-6">
                {store.description}
              </p>
              
              <Link
                href={store.href}
                className="inline-flex items-center gap-2 rounded-full border border-pink-300/30 bg-pink-200/5 px-4 py-2.5 text-sm font-medium text-pink-200 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-pink-300/50 hover:bg-pink-300/12 hover:text-white hover:shadow-[0_0_20px_rgba(244,175,196,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300/40"
              >
                Ver ofertas da loja
                <svg className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}