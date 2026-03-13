"use client";

import { Search, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function StoreHeader() {
  const [categoriasOpen, setCategoriasOpen] = useState(false);
  const [lojasOpen, setLojasOpen] = useState(false);
  const [activeStoreHash, setActiveStoreHash] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("categoria")?.toLowerCase() ?? "";

  const categorias = [
    { name: "Feminino", href: "/lojas?categoria=feminino" },
    { name: "Masculino", href: "/lojas?categoria=masculino" },
    { name: "Casa", href: "/lojas?categoria=casa" },
    { name: "Skin Care", href: "/lojas?categoria=skincare" },
    { name: "Infantil", href: "/lojas?categoria=infantil" }
  ];

  const lojas = [
    { name: "Shopee", href: "/lojas#shopee", hash: "shopee" },
    { name: "Shein", href: "/lojas#shein", hash: "shein" },
    { name: "TikTok Shop", href: "/lojas#tiktok", hash: "tiktok" }
  ];

  useEffect(() => {
    const updateHash = () => {
      setActiveStoreHash(window.location.hash.replace("#", "").toLowerCase());
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname]);

  const isHomeActive = pathname === "/";
  const isCategoriasActive = pathname === "/lojas" && Boolean(activeCategory);
  const isLojasActive = pathname === "/lojas" || pathname.startsWith("/lojas/");
  const isColecoesActive = pathname === "/colecoes" || pathname.startsWith("/colecao/");
  const isSobreActive = pathname === "/sobre";

  const navItemBase =
    "px-4 py-2 rounded-full text-sm font-medium transition-colors border";
  const navItemInactive = "border-transparent text-white/70 hover:text-white hover:bg-white/5";
  const navItemActive = "bg-pink-300/15 border-pink-300/40 text-white";

  const dropdownItemBase =
    "mx-2 block whitespace-nowrap rounded-xl px-3 py-3 text-sm leading-none transition-colors border";
  const dropdownItemInactive = "border-transparent text-white/70 hover:text-white hover:bg-white/5";
  const dropdownItemActive = "bg-pink-300/15 border-pink-300/40 text-white";

  return (
    <header className="sticky top-0 z-[60] overflow-visible bg-background-primary/95 backdrop-blur-xl border-b border-border-soft shadow-lg shadow-black/5">
      <div className="mx-auto max-w-7xl overflow-visible px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between overflow-visible">
          {/* Brand - Left */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-2xl font-bold tracking-tight bg-gradient-to-r from-pink-300 to-pink-200 bg-clip-text text-transparent hover:from-pink-400 hover:to-pink-300 transition-all duration-300"
            >
              ClickVendas
            </Link>
          </div>

          {/* Navigation - Center */}
          <nav className="relative z-[65] hidden items-center gap-3 overflow-visible md:flex">
            {/* Página Principal */}
            <Link 
              href="/" 
              className={`${navItemBase} ${isHomeActive ? navItemActive : navItemInactive}`}
            >
              Página Principal
            </Link>

            {/* Categorias with Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setCategoriasOpen(true)}
                onMouseLeave={() => setCategoriasOpen(false)}
                onClick={() => setCategoriasOpen(!categoriasOpen)}
                className={`flex items-center gap-2 ${navItemBase} ${isCategoriasActive ? navItemActive : navItemInactive}`}
                aria-haspopup="true"
                aria-expanded={categoriasOpen}
              >
                Categorias
                <ChevronDown size={16} className={`transition-transform duration-200 ${categoriasOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`absolute left-0 top-full z-[80] mt-2 min-w-[200px] w-max overflow-hidden rounded-2xl border border-border-soft/90 bg-surface-card/95 backdrop-blur-md shadow-xl shadow-black/15 transition-all duration-200 ${categoriasOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-1 opacity-0'}`}
                onMouseEnter={() => setCategoriasOpen(true)}
                onMouseLeave={() => setCategoriasOpen(false)}
              >
                <div className="py-2">
                  {categorias.map((categoria) => (
                    <Link
                      key={categoria.name}
                      href={categoria.href}
                      className={`${dropdownItemBase} ${activeCategory === categoria.name.toLowerCase() ? dropdownItemActive : dropdownItemInactive}`}
                      onClick={() => setCategoriasOpen(false)}
                    >
                      {categoria.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Lojas with Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setLojasOpen(true)}
                onMouseLeave={() => setLojasOpen(false)}
                onClick={() => setLojasOpen(!lojasOpen)}
                className={`flex items-center gap-2 ${navItemBase} ${isLojasActive ? navItemActive : navItemInactive}`}
                aria-haspopup="true"
                aria-expanded={lojasOpen}
              >
                Lojas
                <ChevronDown size={16} className={`transition-transform duration-200 ${lojasOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`absolute left-0 top-full z-[80] mt-2 min-w-[200px] w-max overflow-hidden rounded-2xl border border-border-soft/90 bg-surface-card/95 backdrop-blur-md shadow-xl shadow-black/15 transition-all duration-200 ${lojasOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-1 opacity-0'}`}
                onMouseEnter={() => setLojasOpen(true)}
                onMouseLeave={() => setLojasOpen(false)}
              >
                <div className="py-2">
                  {lojas.map((loja) => (
                    <Link
                      key={loja.name}
                      href={loja.href}
                      className={`${dropdownItemBase} ${pathname === "/lojas" && activeStoreHash === loja.hash ? dropdownItemActive : dropdownItemInactive}`}
                      onClick={() => setLojasOpen(false)}
                    >
                      {loja.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Coleções */}
            <Link 
              href="/colecoes" 
              className={`${navItemBase} ${isColecoesActive ? navItemActive : navItemInactive}`}
            >
              Coleções
            </Link>

            {/* Sobre */}
            <Link 
              href="/sobre" 
              className={`${navItemBase} ${isSobreActive ? navItemActive : navItemInactive}`}
            >
              Sobre
            </Link>
          </nav>

          {/* Utility Actions - Right */}
          <div className="flex items-center gap-3">
            <Link
              href="/buscar"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-text-secondary hover:text-text-primary transition-colors bg-surface-card/50 border border-border-soft hover:border-accent-primary/30 hover:bg-surface-pink"
            >
              <Search size={18} />
              Buscar
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
