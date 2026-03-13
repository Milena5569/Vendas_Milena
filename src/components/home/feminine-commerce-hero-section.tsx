import { FeminineCommerceBackground } from "@/components/FeminineCommerceBackground";
import Link from "next/link";
import { RECENT_OFFERS_HASH, STORES_PAGE_PATH } from "@/constants/navigation";

export function FeminineCommerceHeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-b from-[#08080A] via-[#0D0D10] to-[#111114]">
      {/* Feminine Commerce Background */}
      <FeminineCommerceBackground />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - Content Block */}
          <div className="space-y-7">
            {/* Eyebrow Label */}
            <p className="text-sm font-semibold text-accent-primary uppercase tracking-wider bg-white/5 backdrop-blur-sm px-5 py-2.5 rounded-full inline-block border border-pink-300/30 shadow-[0_10px_26px_rgba(244,175,196,0.12)]">
              Curadoria premium
            </p>
            
            {/* Main Headline */}
            <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white">
              Seu espaço
              <br />
              <span className="bg-gradient-to-r from-[#F7C8D8] via-[#F4AFC4] to-[#EFA9C5] bg-clip-text text-transparent">inteligente</span> para
              <br />
              comprar melhor
            </h1>
            
            {/* Supporting Paragraph */}
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-xl rounded-2xl border border-pink-300/20 bg-white/[0.03] p-5 md:p-6 shadow-[0_16px_40px_rgba(0,0,0,0.32)]">
              Explore produtos escolhidos da Shopee, Shein e TikTok Shop em uma experiência visual mais limpa, organizada e agradável.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={RECENT_OFFERS_HASH}
                aria-label="Ver ofertas recentes"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#F7C8D8] via-[#F4AFC4] to-[#EFA9C5] text-[#08080A] font-bold px-8 md:px-10 py-3.5 md:py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_34px_rgba(244,175,196,0.3)] border border-pink-200/40 bg-size-200 bg-pos-0 hover:bg-pos-100"
              >
                Ver ofertas
              </Link>
              <Link
                href={STORES_PAGE_PATH}
                aria-label="Explorar lojas parceiras"
                className="inline-flex items-center justify-center border border-pink-300/40 bg-transparent text-white/90 font-semibold px-8 md:px-10 py-3.5 md:py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:border-pink-300/60 hover:bg-pink-300/10 hover:text-white hover:shadow-[0_8px_24px_rgba(244,175,196,0.16)]"
              >
                Explorar lojas
              </Link>
            </div>
            
            {/* Supporting Caption */}
            <p className="text-sm text-white/60 italic px-5 py-2.5 rounded-full inline-block border border-white/10 bg-white/[0.02]">
              Curadoria visual pensada para conforto, foco e descoberta
            </p>
          </div>

          {/* RIGHT SIDE - Open Atmospheric Space */}
          <div className="relative">
            {/* Open atmospheric space with floating commerce elements */}
            <div className="relative w-full h-96 lg:h-auto">
              {/* Floating commerce elements */}
              <div className="absolute inset-0">
                {/* Floating price tag */}
                <div className="absolute top-1/4 left-1/4 w-24 h-16 bg-gradient-to-br from-pink-300/15 to-pink-200/10 border border-pink-300/30 rounded-xl shadow-[0_10px_25px_rgba(244,175,196,0.12)] transform rotate-[-5deg] animate-float-slow opacity-70"></div>
                
                {/* Floating product card */}
                <div className="absolute top-2/3 right-1/4 w-28 h-20 bg-gradient-to-br from-white/[0.05] to-transparent border border-pink-300/20 rounded-xl shadow-[0_14px_34px_rgba(0,0,0,0.28)] transform rotate-[3deg] animate-float-slow-delay opacity-70"></div>
                
                {/* Floating shopping bag */}
                <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-gradient-to-br from-pink-200/10 to-transparent border border-pink-300/25 rounded-xl shadow-[0_10px_26px_rgba(244,175,196,0.12)] transform rotate-[-2deg] animate-float-slow-reverse opacity-60"></div>
                
                {/* Central decorative element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 rounded-full blur-xl animate-pulse-gentle bg-[radial-gradient(circle,rgba(244,175,196,0.16)_0%,rgba(247,200,216,0.12)_45%,transparent_75%)]"></div>
                </div>
                
                {/* Floating icons */}
                <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-pink-300/10 border border-pink-300/25 rounded-full flex items-center justify-center text-lg animate-float-subtle">
                  ⭐
                </div>
                <div className="absolute bottom-1/4 left-1/3 w-16 h-10 bg-white/[0.04] border border-white/10 rounded-full flex items-center justify-center text-sm text-white/70 animate-float-slow-reverse">
                  +100
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}