import Link from "next/link";

export function StoresInformationSection() {
  const stores = [
    {
      name: "Shopee",
      icon: "🛍️",
      subtitle: "Ofertas populares",
      description:
        "Descubra eletrônicos, utilidades, acessórios e achadinhos com preços competitivos e promoções que aparecem todos os dias.",
      ctaLabel: "Ver ofertas da Shopee",
      badges: ["⭐ Mais vendidos", "💸 Promoções do dia"],
      color: "from-blue-400 to-cyan-400",
      href: "/lojas#shopee",
    },
    {
      name: "Shein",
      icon: "👗",
      subtitle: "Moda em alta",
      description:
        "Explore roupas, beleza e lifestyle com produtos virais, tendências populares e achadinhos que fazem sucesso online.",
      ctaLabel: "Ver ofertas da Shein",
      badges: ["🔥 Produtos virais", "⭐ Mais vendidos"],
      color: "from-pink-400 to-purple-400",
      href: "/lojas#shein",
    },
    {
      name: "TikTok Shop",
      icon: "📱",
      subtitle: "Produtos virais",
      description:
        "Encontre itens que estão bombando nas redes sociais, descobertos por criadores e tendências que viralizaram.",
      ctaLabel: "Ver ofertas do TikTok",
      badges: ["🔥 Produtos virais", "💸 Promoções do dia"],
      color: "from-black to-gray-600",
      href: "/lojas#tiktok",
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0D0D10] to-[#111114]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
            Descubra ofertas nas lojas mais populares da internet
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Selecionamos produtos virais, promoções escondidas e ofertas que realmente valem a pena nas principais plataformas de compra online.
            <span className="block mt-2 text-white/70">
              Tudo organizado para você encontrar achadinhos mais rápido.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {stores.map((store, index) => (
            <div
              key={store.name}
              className="group rounded-xl p-8 border border-pink-300/20 bg-[#111114] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-pink-300/50 hover:shadow-[0_0_0_1px_rgba(244,175,196,0.16),0_14px_34px_rgba(244,175,196,0.16)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${store.color} flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                  {store.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
                    {store.name}
                  </h3>
                  <p className="text-sm text-white/65">{store.subtitle}</p>
                </div>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {store.badges.map((badge) => (
                  <span
                    key={`${store.name}-${badge}`}
                    className="rounded-full border border-pink-200/25 bg-pink-200/10 px-2.5 py-1 text-[11px] text-pink-100/85"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              
              <p className="text-white/80 leading-relaxed mb-6">
                {store.description}
              </p>
              
              <Link
                href={store.href}
                className="inline-flex items-center gap-2 rounded-full border border-pink-300/30 bg-pink-200/5 px-4 py-2.5 text-sm font-medium text-pink-200 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-pink-300/50 hover:bg-pink-300/12 hover:text-white hover:shadow-[0_0_20px_rgba(244,175,196,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300/40"
              >
                {store.ctaLabel}
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