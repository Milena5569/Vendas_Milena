import Link from "next/link";
import { RECENT_OFFERS_HASH, STORES_PAGE_PATH } from "@/constants/navigation";

export function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#08080A] via-[#0D0D10] to-[#111114]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] border border-pink-300/25 bg-gradient-to-b from-[#0D0D10] to-[#111114] p-8 md:p-14 shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
          <div className="pointer-events-none absolute -top-28 -left-20 h-64 w-64 rounded-full bg-pink-300/12 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-16 h-72 w-72 rounded-full bg-pink-200/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(244,175,196,0.16),transparent_60%)]" />

          <div className="relative text-center space-y-9">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-3 rounded-full border border-pink-300/25 bg-pink-200/10 px-5 py-2.5 mx-auto shadow-[0_8px_24px_rgba(244,175,196,0.12)] backdrop-blur-sm transition-all duration-300 hover:border-pink-300/35 hover:bg-pink-200/15">
                <span className="text-xs font-medium tracking-wide text-pink-100/90">Premium Experience</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-tight">
                Pronto para descobrir ofertas incríveis?
              </h2>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Junte-se a milhares de compradores inteligentes que encontram os melhores produtos com mais estilo e menos esforço.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={RECENT_OFFERS_HASH}
                aria-label="Ir para ofertas recentes"
                className="rounded-full border border-pink-200/35 bg-gradient-to-r from-[#F7C8D8] via-[#F4AFC4] to-[#EFA9C5] text-[#08080A] font-semibold px-8 py-3 transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_10px_30px_rgba(244,175,196,0.28)]"
              >
                Começar a explorar
              </Link>
              <Link
                href={STORES_PAGE_PATH}
                aria-label="Ver todas as lojas"
                className="rounded-full border border-pink-300/30 bg-transparent text-pink-100/85 font-semibold px-8 py-3 transition-all duration-300 hover:-translate-y-[1px] hover:border-pink-300/50 hover:bg-pink-300/10 hover:text-white hover:shadow-[0_8px_24px_rgba(244,175,196,0.15)]"
              >
                Ver todas as lojas
              </Link>
            </div>
            
            <p className="text-sm text-white/60">
              Sem compromissos. Sem surpresas. Apenas ofertas selecionadas para você.
            </p>

            <div className="pointer-events-none absolute top-10 left-10 h-1.5 w-1.5 rounded-full bg-pink-200/60" />
            <div className="pointer-events-none absolute top-16 right-16 h-1 w-1 rounded-full bg-pink-100/50" />
            <div className="pointer-events-none absolute bottom-12 left-20 h-1 w-1 rounded-full bg-pink-200/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
