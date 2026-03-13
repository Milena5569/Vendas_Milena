import { FeminineCommerceBackground } from "@/components/FeminineCommerceBackground";
import Link from "next/link";
import { RECENT_OFFERS_HASH, STORES_PAGE_PATH } from "@/constants/navigation";

export function FeminineCommerceHeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-pink-100 via-pink-50 to-white">
      {/* Feminine Commerce Background */}
      <FeminineCommerceBackground />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - Content Block */}
          <div className="space-y-8">
            {/* Eyebrow Label */}
            <p className="text-sm font-semibold text-accent-primary uppercase tracking-wider bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 backdrop-blur-sm px-6 py-3 rounded-full inline-block shadow-lg shadow-accent-primary/20 border border-border-soft/70">
              Curadoria premium
            </p>
            
            {/* Main Headline */}
            <h1 className="relative z-10 text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-text text-transparent p-8 rounded-2xl shadow-xl shadow-pink-200/35 border border-pink-100/60 backdrop-blur-sm">
              Seu espaço
              <br />
              inteligente para
              <br />
              comprar melhor
            </h1>
            
            {/* Supporting Paragraph */}
            <p className="text-lg text-text-secondary leading-relaxed max-w-lg bg-gradient-to-br from-surface-soft/80 to-transparent backdrop-blur-sm p-6 rounded-xl shadow-lg shadow-glow-warm/10 border border-border-soft/60">
              Explore produtos escolhidos da Shopee, Shein e TikTok Shop em uma experiência visual mais limpa, organizada e agradável.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={RECENT_OFFERS_HASH}
                aria-label="Ver ofertas recentes"
                className="inline-flex items-center justify-center bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary hover:from-accent-primary/95 hover:via-accent-secondary/95 hover:to-accent-primary/95 text-background-primary font-bold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-glow-soft/40 border border-accent-primary/30 transform hover:scale-105 hover:-translate-y-1 bg-size-200 bg-pos-0 hover:bg-pos-100"
              >
                Ver ofertas
              </Link>
              <Link
                href={STORES_PAGE_PATH}
                aria-label="Explorar lojas parceiras"
                className="inline-flex items-center justify-center border-2 border-accent-primary/50 hover:border-accent-primary/80 text-text-primary hover:text-text-primary font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-glow-warm/30 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent"
              >
                Explorar lojas
              </Link>
            </div>
            
            {/* Supporting Caption */}
            <p className="text-sm text-text-secondary/90 italic bg-gradient-to-r from-transparent to-surface-soft/30 backdrop-blur-sm px-6 py-3 rounded-full inline-block shadow-md shadow-glow-soft/15 border border-border-soft/50">
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
                <div className="absolute top-1/4 left-1/4 w-24 h-16 bg-gradient-to-br from-accent-primary/15 to-accent-secondary/15 border border-border-soft rounded-xl shadow-lg shadow-glow-soft/15 transform rotate-[-5deg] animate-float-slow opacity-60"></div>
                
                {/* Floating product card */}
                <div className="absolute top-2/3 right-1/4 w-28 h-20 bg-gradient-to-br from-surface-soft/70 to-transparent border border-border-soft rounded-xl shadow-lg shadow-glow-warm/10 transform rotate-[3deg] animate-float-slow-delay opacity-60"></div>
                
                {/* Floating shopping bag */}
                <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-gradient-to-br from-glow-soft/20 to-transparent border border-border-soft rounded-xl shadow-lg shadow-accent-primary/15 transform rotate-[-2deg] animate-float-slow-reverse opacity-55"></div>
                
                {/* Central decorative element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 bg-gradient-radial from-accent-primary/18 via-accent-secondary/12 to-transparent rounded-full blur-xl animate-pulse-gentle"></div>
                </div>
                
                {/* Floating icons */}
                <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-accent-primary/15 border border-border-soft rounded-full flex items-center justify-center text-lg animate-float-subtle">
                  ⭐
                </div>
                <div className="absolute bottom-1/4 left-1/3 w-16 h-10 bg-surface-soft/65 border border-border-soft rounded-full flex items-center justify-center text-sm text-text-secondary/80 animate-float-slow-reverse">
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