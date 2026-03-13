"use client";

import { FeminineCommerceBackground } from "@/components/FeminineCommerceBackground";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RECENT_OFFERS_HASH, STORES_PAGE_PATH } from "@/constants/navigation";
import { BrandAvatar } from "@/components/ui/brand-avatar";

export function FeminineCommerceHeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const achadinhosPreview = [
    {
      image: "/images/products/fone-bluetooth.jpg",
      discount: "-35%",
      name: "Fone Bluetooth",
      price: "R$ 89,90",
      label: "🔥 Viral",
    },
    {
      image: "/images/products/kit-skincare.jpg",
      discount: "-28%",
      name: "Kit Skincare",
      price: "R$ 69,90",
      label: "💸 Oferta",
    },
    {
      image: "/images/products/luminaria-led.jpg",
      discount: "-42%",
      name: "Luminária LED",
      price: "R$ 54,90",
      label: "⭐ Mais vendido",
    },
  ];

  const previewLoop = [...achadinhosPreview, ...achadinhosPreview];
  const parallaxOffset = Math.min(scrollY * 0.08, 28);

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
              ACHADINHOS QUE VALEM A PENA
            </p>

            {/* Trending Indicator */}
            <p className="-mt-3 text-xs md:text-sm text-pink-100/85 border border-pink-200/35 bg-pink-200/10 px-4 py-2 rounded-full inline-flex items-center gap-2 backdrop-blur-sm shadow-[0_8px_24px_rgba(244,175,196,0.14)]">
              🔥 Produtos em alta hoje
            </p>
            
            {/* Main Headline */}
            <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] md:leading-tight tracking-tight text-white">
              Os melhores <span className="text-[#F4AFC4]">achadinhos</span> da <span className="text-[#F4AFC4]">internet</span> em um só lugar
            </h1>
            
            {/* Supporting Paragraph */}
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-xl rounded-2xl border border-pink-300/20 bg-white/[0.03] p-5 md:p-6 shadow-[0_16px_40px_rgba(0,0,0,0.32)]">
              Produtos virais, promoções escondidas e <span className="text-[#F4AFC4] font-medium">ofertas</span> que realmente compensam. Tudo selecionado para você comprar melhor e gastar menos.
            </p>

            {/* Humanized Trust Line */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-pink-300/25 bg-white/[0.03] px-3 py-2 text-xs md:text-sm text-white/80 shadow-[0_8px_20px_rgba(244,175,196,0.12)]">
              <BrandAvatar
                size="sm"
                alt="Curadoria ClickVendas"
                className="h-7 w-7"
              />
              <span>
                Curadoria por <span className="font-semibold text-pink-100">Milena</span>
              </span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-soft">
              <Link
                href={RECENT_OFFERS_HASH}
                aria-label="Ver ofertas recentes"
                className="animate-cta-glow relative isolate overflow-hidden inline-flex items-center justify-center bg-gradient-to-r from-[#F7C8D8] via-[#F4AFC4] to-[#EFA9C5] text-[#08080A] font-bold px-8 md:px-10 py-3.5 md:py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_0_0_1px_rgba(247,200,216,0.35),0_0_32px_rgba(244,175,196,0.42)] border border-pink-200/40 bg-size-200 bg-pos-0 hover:bg-pos-100 after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle,rgba(255,255,255,0.32)_0%,rgba(255,255,255,0.08)_45%,transparent_70%)] after:opacity-0 after:blur-md after:transition-opacity after:duration-500 hover:after:opacity-100 hover:after:animate-pulse"
              >
                🔥 Ver os melhores achadinhos
              </Link>
              <Link
                href={STORES_PAGE_PATH}
                aria-label="Explorar lojas parceiras"
                className="inline-flex items-center justify-center border border-pink-300/40 bg-transparent text-white/90 font-semibold px-8 md:px-10 py-3.5 md:py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:border-pink-300/60 hover:bg-pink-300/10 hover:text-white hover:shadow-[0_0_24px_rgba(244,175,196,0.2)]"
              >
                🛍 Explorar lojas
              </Link>
            </div>

            {/* Achadinhos Preview Strip */}
            <div className="space-y-3 animate-fade-in-soft">
              <p className="text-xs md:text-sm uppercase tracking-wide text-pink-100/75 font-semibold">
                Achadinhos Preview
              </p>
              <div className="relative overflow-hidden rounded-2xl border border-pink-200/20 bg-white/[0.02] p-2">
                <div className="hero-preview-marquee flex w-max gap-3">
                  {previewLoop.map((item, index) => (
                    <article
                      key={`${item.name}-${index}`}
                      className="group min-w-[210px] max-w-[210px] rounded-xl border border-white/10 bg-[#111114]/85 p-2.5 transition-all duration-300 hover:-translate-y-1.5 hover:border-pink-300/70 hover:shadow-[0_0_0_1px_rgba(244,175,196,0.3),0_12px_28px_rgba(244,175,196,0.24)]"
                    >
                      <div className="relative mb-2 overflow-hidden rounded-lg">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={194}
                          height={112}
                          className="h-24 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute left-2 top-2 rounded-md bg-gradient-to-r from-[#F7C8D8] to-[#F4AFC4] px-2 py-1 text-[10px] font-bold text-[#32131F] shadow-[0_6px_14px_rgba(244,175,196,0.25)]">
                          {item.discount}
                        </span>
                      </div>
                      <p className="mb-1 text-[11px] text-pink-100/80">{item.label}</p>
                      <h3 className="line-clamp-1 text-sm font-semibold text-white/95">{item.name}</h3>
                      <p className="text-base font-bold text-[#F4AFC4]">{item.price}</p>
                    </article>
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#111114] to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#111114] to-transparent" />
              </div>
            </div>

            {/* Achado do dia highlight */}
            <article className="animate-fade-in-soft relative max-w-xl rounded-2xl border border-pink-300/30 bg-gradient-to-r from-white/[0.06] via-pink-200/[0.08] to-white/[0.04] p-4 md:p-5 shadow-[0_14px_34px_rgba(244,175,196,0.14)]">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-xs md:text-sm font-semibold uppercase tracking-wide text-pink-100/85">
                  Achado do dia
                </p>
                <span className="animate-float-gentle rounded-full border border-pink-200/40 bg-pink-200/15 px-3 py-1 text-[11px] text-pink-100/90">
                  🔥 Tendência agora
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative overflow-hidden rounded-lg border border-pink-200/30">
                  <Image
                    src="/images/products/fone-bluetooth.jpg"
                    alt="Achado do dia"
                    width={84}
                    height={84}
                    className="h-16 w-16 md:h-[72px] md:w-[72px] object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-sm md:text-base font-semibold text-white/95">Fone Bluetooth com cancelamento</p>
                  <p className="text-xs text-pink-100/80">Produto viral encontrado</p>
                  <p className="text-sm font-bold text-[#F4AFC4]">R$ 89,90</p>
                </div>
              </div>

              <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/75">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F4AFC4] animate-pulse" />
                +500 ofertas encontradas
              </p>
            </article>
            
            {/* FOMO Micro Indicator */}
            <p className="text-sm text-white/65 px-5 py-2.5 rounded-full inline-flex items-center gap-2 border border-white/10 bg-white/[0.02]">
              <span className="h-2 w-2 rounded-full bg-[#F4AFC4] animate-pulse"></span>
              Novos achadinhos adicionados toda semana.
            </p>

            {/* Scroll hint */}
            <div className="inline-flex items-center gap-2 text-xs md:text-sm text-white/55 animate-fade-in-soft">
              <span className="uppercase tracking-wide">Continue explorando</span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-pink-300/30 bg-pink-200/10 animate-float-gentle-reverse">
                ↓
              </span>
            </div>
          </div>

          {/* RIGHT SIDE - Open Atmospheric Space */}
          <div
            className="relative transition-transform duration-300 ease-out"
            style={{ transform: `translateY(${-parallaxOffset}px)` }}
          >
            {/* Open atmospheric space with floating commerce elements */}
            <div className="relative w-full h-96 lg:h-auto">
              {/* Floating commerce elements */}
              <div className="absolute inset-0">
                {/* Ambient depth glow */}
                <div className="pointer-events-none absolute left-1/2 top-[50%] h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(244,175,196,0.14)_0%,rgba(247,200,216,0.08)_46%,transparent_76%)] blur-2xl"></div>

                {/* Decorative premium cards */}
                <div className="absolute top-[22%] left-[14%] h-16 w-24 rounded-xl border border-pink-300/25 bg-gradient-to-br from-pink-300/12 to-pink-200/5 shadow-[0_8px_20px_rgba(244,175,196,0.12)] rotate-[-6deg] animate-float-slow opacity-65"></div>
                <div className="absolute bottom-[18%] left-[24%] h-20 w-28 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent shadow-[0_12px_30px_rgba(0,0,0,0.25)] rotate-[4deg] animate-float-slow-delay opacity-65"></div>

                {/* Central decorative element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="h-32 w-32 rounded-full blur-xl animate-pulse-gentle bg-[radial-gradient(circle,rgba(244,175,196,0.14)_0%,rgba(247,200,216,0.08)_45%,transparent_75%)]"></div>
                </div>

                {/* Realistic social proof comments (fixed non-overlapping positions) */}
                <div className="absolute top-[10%] right-[8%] max-w-[235px] rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] md:text-xs text-white/62 backdrop-blur-sm animate-float-gentle">
                  Esse produto estava mais barato aqui
                </div>
                <div className="absolute top-[36%] right-[10%] max-w-[245px] rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[11px] md:text-xs text-white/58 backdrop-blur-sm animate-float-gentle-delay">
                  Os achadinhos daqui realmente compensam
                </div>
                <div className="absolute bottom-[14%] right-[8%] max-w-[270px] rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[11px] md:text-xs text-white/56 backdrop-blur-sm animate-float-gentle-reverse">
                  Não preciso mais ficar horas procurando promoções
                </div>
                <div className="absolute top-[50%] left-[40%] max-w-[220px] -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] md:text-xs text-white/58 backdrop-blur-sm animate-float-gentle">
                  Vale muito a pena conferir as ofertas daqui
                </div>

                {/* Separate floating icons */}
                <div className="absolute top-[18%] left-[44%] text-lg text-pink-100/45 animate-float-gentle">⭐</div>
                <div className="absolute top-[54%] left-[18%] text-lg text-pink-100/40 animate-float-gentle-delay">🔥</div>
                <div className="absolute bottom-[32%] left-[10%] text-lg text-pink-100/38 animate-float-gentle-reverse">💸</div>
                <div className="absolute bottom-[8%] left-[50%] text-lg text-pink-100/35 animate-float-gentle">🛍</div>
                <div className="absolute top-[28%] left-[34%] rounded-lg bg-gradient-to-r from-[#F7C8D8] to-[#F4AFC4] px-2.5 py-1 text-[11px] font-semibold text-pink-950 shadow-[0_8px_20px_rgba(244,175,196,0.22)] rotate-[-8deg] animate-float-slow opacity-90">
                  -30%
                </div>
                <div className="absolute bottom-[24%] left-[40%] rounded-lg bg-gradient-to-r from-[#F7C8D8] to-[#F4AFC4] px-2.5 py-1 text-[11px] font-semibold text-pink-950 shadow-[0_8px_20px_rgba(244,175,196,0.22)] rotate-[6deg] animate-float-slow-delay opacity-90">
                  -50%
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Smooth section transition blend */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-[#111114]/70 to-[#0A0A0D]" />
    </section>
  );
}