import { Button } from "@/components/ui/button";
import { FeminineCommerceBackground } from "@/components/FeminineCommerceBackground";

export function EditorialHeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-background-primary via-surface-card to-background-primary">
      {/* Feminine Commerce Background */}
      <FeminineCommerceBackground />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Block */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-accent-primary uppercase tracking-wider bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full inline-block shadow-sm border border-border-soft">
                Curadoria premium
              </p>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary leading-tight bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg shadow-accent-primary/10 border border-border-soft">
                Seu espaço inteligente para comprar melhor
              </h1>
              <p className="text-lg text-text-primary leading-relaxed max-w-lg bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm shadow-accent-primary/5 border border-border-soft">
                Explore produtos escolhidos da Shopee, Shein e TikTok Shop em uma experiência visual mais limpa, organizada e agradável.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent-primary hover:bg-accent-primary/95 text-background-primary font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/30 border border-accent-primary/20 transform hover:scale-105"
              >
                Ver ofertas
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-accent-primary/40 hover:border-accent-primary text-text-primary hover:text-text-primary font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/20 transform hover:scale-105"
              >
                Explorar lojas
              </Button>
            </div>
            
            <p className="text-sm text-text-primary/90 italic bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full inline-block shadow-sm border border-border-soft">
              Curadoria visual pensada para conforto, foco e descoberta
            </p>
          </div>

          {/* Visual Block */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-pink-200/30 border border-pink-200/40 bg-gradient-to-br from-white via-pink-50 to-white">
              {/* Premium commerce illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50 to-white">
                <div className="absolute inset-0 opacity-15">
                  <div className="absolute top-8 left-8 w-24 h-24 bg-pink-200/30 rounded-full blur-xl"></div>
                  <div className="absolute top-24 right-8 w-16 h-16 bg-pink-300/20 rounded-full blur-xl"></div>
                  <div className="absolute bottom-8 left-16 w-20 h-20 bg-pink-200/25 rounded-full blur-xl"></div>
                </div>
                
                {/* Commerce Illustration */}
                <div className="relative h-full flex items-center justify-center p-8">
                  <div className="relative w-full h-full max-w-md">
                    {/* Floating Product Cards */}
                    <div className="absolute top-0 left-0 w-24 h-16 bg-surface-card border border-border-soft rounded-xl shadow-lg shadow-black/10 opacity-90 transform rotate-[-5deg]"></div>
                    <div className="absolute top-6 right-0 w-20 h-14 bg-surface-card border border-border-soft rounded-xl shadow-lg shadow-black/10 opacity-80 transform rotate-[3deg]"></div>
                    <div className="absolute bottom-0 left-6 w-28 h-18 bg-surface-card border border-border-soft rounded-xl shadow-lg shadow-black/10 opacity-85 transform rotate-[-2deg]"></div>
                    
                    {/* Central Shopping Bag Icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg width="120" height="120" viewBox="0 0 96 96" fill="none" className="drop-shadow-lg">
                        {/* Bag Body */}
                        <rect x="16" y="28" width="64" height="44" rx="8" fill="#FFF5F8" stroke="#F7B6CC" strokeWidth="2"/>
                        {/* Bag Handle */}
                        <path d="M28 28 C28 20 36 16 44 16 C52 16 60 20 60 28" stroke="#F7B6CC" strokeWidth="3" fill="none"/>
                        {/* Price Tag */}
                        <circle cx="56" cy="48" r="12" fill="#FFE3ED" opacity="0.8"/>
                        <circle cx="56" cy="48" r="10" fill="#FFF5F8" stroke="#F7B6CC" strokeWidth="2"/>
                        <text x="56" y="52" textAnchor="middle" className="text-xs font-bold fill-pink-600" fontSize="8">R$</text>
                        
                        {/* Cursor/Click Indicator */}
                        <path d="M12 20 L24 32 L18 38 L30 50" stroke="#F7B6CC" strokeWidth="3" fill="none" strokeLinecap="round"/>
                        <circle cx="30" cy="50" r="4" fill="#FFE3ED" opacity="0.9"/>
                        
                        {/* Favorite Heart */}
                        <path d="M72 32 C76 28 80 32 80 36 C80 40 76 44 72 40 C68 44 64 40 64 36 C64 32 68 28 72 32 Z" fill="#F7B6CC" opacity="0.8" stroke="#EC8FB1" strokeWidth="2"/>
                        
                        {/* Small Package Box */}
                        <rect x="36" y="60" width="24" height="16" rx="4" fill="#FFF5F8" stroke="#F7B6CC" strokeWidth="2"/>
                        <path d="M36 68 L60 68" stroke="#F7B6CC" strokeWidth="2"/>
                        <path d="M48 60 L48 76" stroke="#F7B6CC" strokeWidth="2"/>
                      </svg>
                    </div>
                    
                    {/* Floating Icons */}
                    <div className="absolute top-8 right-8 w-10 h-10 bg-accent-primary/20 border border-border-soft rounded-full flex items-center justify-center">
                      <span className="text-sm">⭐</span>
                    </div>
                    <div className="absolute bottom-8 left-8 w-12 h-7 bg-surface-card border border-border-soft rounded-full flex items-center justify-center text-xs text-text-secondary">
                      +100
                    </div>
                    
                    {/* Subtle Glow Background */}
                    <div className="absolute inset-0 bg-gradient-radial from-accent-primary/5 to-transparent rounded-full"></div>
                  </div>
                </div>
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-primary/50 to-transparent"></div>
              </div>
              
              {/* Decorative border accents */}
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-accent-primary/30 rounded-br-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-accent-success/30 rounded-tl-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}