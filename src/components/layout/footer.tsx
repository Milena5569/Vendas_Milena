"use client";

import { Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";

export function StoreFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#0d0d10] to-[#08080a]">
      <div className="pointer-events-none absolute -top-24 left-8 h-56 w-56 rounded-full bg-pink-300/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 right-10 h-64 w-64 rounded-full bg-pink-200/8 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(244,175,196,0.12),transparent_38%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-300 to-pink-200 flex items-center justify-center shadow-[0_0_20px_rgba(244,175,196,0.22)]">
                  <span className="text-sm font-bold text-white">CV</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-text-primary group-hover:text-pink-100 transition-colors duration-200">
                    ClickVendas
                  </h3>
                  <p className="text-sm text-white/65 group-hover:text-pink-100 transition-colors duration-200">
                    Curadoria inteligente
                  </p>
                </div>
              </Link>
            </div>
            <p className="text-sm text-white/60 max-w-sm leading-relaxed">
              ClickVendas reúne produtos, coleções e oportunidades de compra com curadoria inteligente e foco em descoberta.
            </p>
          </div>

          {/* Navegação */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-[0.12em]">Navegação</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-white/65 hover:text-pink-200 transition-colors duration-200">
                Página Principal
              </Link>
              <Link href="/lojas" className="block text-sm text-white/65 hover:text-pink-200 transition-colors duration-200">
                Categorias
              </Link>
              <Link href="/lojas" className="block text-sm text-white/65 hover:text-pink-200 transition-colors duration-200">
                Lojas
              </Link>
              <Link href="/colecoes" className="block text-sm text-white/65 hover:text-pink-200 transition-colors duration-200">
                Coleções
              </Link>
              <Link href="/sobre" className="block text-sm text-white/65 hover:text-pink-200 transition-colors duration-200">
                Sobre
              </Link>
            </div>
          </div>

          {/* Explorar */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-[0.12em]">Explorar</h4>
            <div className="space-y-2">
              <Link href="/lojas#shopee" className="block text-sm text-white/65 hover:text-pink-200 transition-colors duration-200">
                Shopee
              </Link>
              <Link href="/lojas#shein" className="block text-sm text-white/65 hover:text-pink-200 transition-colors duration-200">
                Shein
              </Link>
              <Link href="/lojas#tiktok" className="block text-sm text-white/65 hover:text-pink-200 transition-colors duration-200">
                TikTok Shop
              </Link>
            </div>
          </div>

          {/* Conecte-se */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-[0.12em]">Conecte-se</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/clickvendas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-full border border-pink-300/30 bg-white/[0.02] transition-all duration-300 hover:border-pink-300/50 hover:bg-pink-300/10 hover:shadow-[0_0_20px_rgba(244,175,196,0.15)] group"
              >
                <Instagram size={20} className="text-white/70 group-hover:text-pink-100 transition-colors duration-200" />
                <span className="text-sm text-white/70 group-hover:text-pink-100 transition-colors duration-200">Instagram</span>
              </a>
              
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-full border border-pink-300/30 bg-white/[0.02] transition-all duration-300 hover:border-pink-300/50 hover:bg-pink-300/10 hover:shadow-[0_0_20px_rgba(244,175,196,0.15)] group"
              >
                <MessageCircle size={20} className="text-white/70 group-hover:text-pink-100 transition-colors duration-200" />
                <span className="text-sm text-white/70 group-hover:text-pink-100 transition-colors duration-200">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-7 border-t border-white/10">
          <p className="text-sm text-white/60 text-center">
            © {new Date().getFullYear()} ClickVendas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
