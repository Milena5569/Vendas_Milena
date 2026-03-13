import { HeaderProfile } from "@/components/layout/header-profile";
import { BadgeOrigin } from "@/components/ui/badge-origin";
import { HeroCommerceVisual } from "./hero-commerce-visual";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-card via-transparent to-accent-primary/5" />
      
      <div className="relative container mx-auto px-4 py-0 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Column - Profile */}
          <div className="lg:col-span-1">
            <HeaderProfile 
              username="Social Shop"
              avatarUrl="/images/profile.jpg"
              isVip={true}
            />
          </div>

          {/* Center Column - Hero Content */}
          <div className="lg:col-span-1 text-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 bg-surface-card border border-border-soft rounded-full px-4 py-2 mx-auto">
                <BadgeOrigin origin="Shopee" />
                <span className="text-xs text-text-secondary">Curated Selection</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
                Social Commerce
                <span className="text-accent-primary"> Hub</span>
              </h1>
              
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-md mx-auto">
                Descubra os melhores produtos das principais lojas online, 
                cuidadosamente selecionados para você.
              </p>
              
              <div className="flex items-center justify-center gap-4 text-sm text-text-secondary">
                <span className="inline-flex items-center gap-2">
                  📦 100+ produtos
                </span>
                <span className="w-1 h-1 bg-border-soft rounded-full" />
                <span className="inline-flex items-center gap-2">
                  ⭐ 4.9/5 avaliações
                </span>
                <span className="w-1 h-1 bg-border-soft rounded-full" />
                <span className="inline-flex items-center gap-2">
                  🚀 Entrega rápida
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Commerce Illustration */}
          <div className="lg:col-span-1 flex items-center justify-center">
            <HeroCommerceVisual />
          </div>
        </div>
      </div>
    </section>
  );
}