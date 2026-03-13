import Link from "next/link";
import { StoreFooter } from "@/components/layout/footer";
import { StoreHeader } from "@/components/layout/header";
import { BrandAvatar } from "@/components/ui/brand-avatar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <StoreHeader />

      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute top-10 left-8 h-64 w-64 rounded-full bg-pink-300/10 blur-3xl" />
        <div className="pointer-events-none absolute right-10 top-1/3 h-72 w-72 rounded-full bg-pink-200/10 blur-3xl" />

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="rounded-[32px] border border-pink-300/25 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-8 shadow-[0_16px_45px_rgba(0,0,0,0.32)] backdrop-blur-sm md:p-12">
            <span className="inline-flex rounded-full border border-pink-300/35 bg-pink-200/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-pink-100/90">
              Sobre a ClickVendas
            </span>

            <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-pink-300/30 bg-white/[0.03] px-4 py-2 shadow-[0_10px_24px_rgba(244,175,196,0.14)]">
              <BrandAvatar
                size="md"
                alt="Curadoria ClickVendas"
                className="h-9 w-9"
              />
              <div className="text-left leading-tight">
                <p className="text-sm font-semibold text-pink-100">Curadoria por Milena</p>
                <p className="text-xs text-white/65">Seleção humana com foco nos melhores achadinhos</p>
              </div>
            </div>

            <h1 className="mt-6 max-w-4xl text-3xl font-semibold tracking-tight text-white md:text-5xl md:leading-tight">
              Curadoria inteligente para encontrar achadinhos com mais facilidade
            </h1>

            <p className="mt-6 max-w-4xl text-base leading-relaxed text-text-secondary/90 md:text-lg">
              A ClickVendas reúne achadinhos, ofertas, coleções e oportunidades de compra de diferentes lojas
              parceiras, com curadoria feita por afiliada, para ajudar você a descobrir produtos com mais
              praticidade, foco e confiança — sem perder horas em buscas aleatórias.
            </p>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 md:pb-20">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-border-soft bg-surface-card/55 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm md:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-white">O que é a ClickVendas</h2>
              <p className="mt-4 text-text-secondary/90 leading-relaxed">
                A ClickVendas não é uma loja genérica. É uma experiência de descoberta com curadoria, pensada
                para organizar oportunidades reais de marketplaces como Shopee, Shein e TikTok Shop em um só
                lugar, de forma clara e agradável.
              </p>
            </article>

            <article className="rounded-3xl border border-border-soft bg-surface-card/55 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm md:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Como ela ajuda no dia a dia</h2>
              <ul className="mt-4 space-y-3 text-text-secondary/90 leading-relaxed">
                <li>• Facilita a descoberta de produtos úteis e interessantes.</li>
                <li>• Troca navegação aleatória por seleções com contexto.</li>
                <li>• Organiza coleções temáticas para diferentes momentos.</li>
                <li>• Melhora a navegação por loja e categoria.</li>
                <li>• Traz mais conforto na hora de pesquisar ofertas.</li>
              </ul>
            </article>
          </div>

          <article className="mt-6 rounded-3xl border border-pink-300/20 bg-gradient-to-r from-pink-200/10 via-transparent to-pink-300/10 p-6 shadow-[0_12px_30px_rgba(0,0,0,0.22)] md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white">Por que isso existe</h2>
            <p className="mt-4 max-w-5xl text-text-secondary/90 leading-relaxed">
              Muita gente perde tempo pulando entre páginas, ofertas espalhadas e vitrines sem direção.
              A ClickVendas nasceu para simplificar esse processo: reunir achadinhos relevantes e apresentar
              tudo de um jeito mais limpo, intencional e confiável para quem quer encontrar boas oportunidades
              com rapidez.
            </p>
          </article>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 md:pb-24">
          <div className="rounded-[32px] border border-pink-300/30 bg-gradient-to-br from-pink-200/12 via-white/[0.03] to-pink-300/12 p-8 text-center shadow-[0_18px_45px_rgba(0,0,0,0.35)] md:p-12">
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Pronta para descobrir ofertas com mais foco?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-text-secondary/90 leading-relaxed">
              Explore lojas, veja coleções e comece agora a encontrar achadinhos com uma curadoria que poupa
              seu tempo e deixa a experiência de descoberta muito mais leve.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/lojas"
                className="inline-flex items-center justify-center rounded-full border border-pink-300/50 bg-pink-300/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-300/30 hover:shadow-[0_0_26px_rgba(244,175,196,0.28)]"
              >
                Explorar lojas
              </Link>
              <Link
                href="/colecoes"
                className="inline-flex items-center justify-center rounded-full border border-border-soft bg-surface-card/70 px-6 py-3 text-sm font-semibold text-text-secondary transition-colors hover:border-pink-300/40 hover:bg-surface-pink hover:text-text-primary"
              >
                Ver coleções
              </Link>
              <Link
                href="/lojas#shopee"
                className="inline-flex items-center justify-center rounded-full border border-border-soft bg-surface-card/70 px-6 py-3 text-sm font-semibold text-text-secondary transition-colors hover:border-pink-300/40 hover:bg-surface-pink hover:text-text-primary"
              >
                Começar a descobrir ofertas
              </Link>
            </div>
          </div>
        </section>
      </main>

      <StoreFooter />
    </div>
  );
}