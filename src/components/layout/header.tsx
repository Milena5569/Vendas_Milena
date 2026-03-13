"use client";

import { Search, ChevronDown, Heart } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandAvatar } from "@/components/ui/brand-avatar";

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
  const isBuscarActive = pathname === "/buscar";
  const isFavoritosActive = pathname === "/favoritos";

  const toggleCategorias = () => {
    setCategoriasOpen((prev) => !prev);
    setLojasOpen(false);
  };

  const toggleLojas = () => {
    setLojasOpen((prev) => !prev);
    setCategoriasOpen(false);
  };

  useEffect(() => {
    setCategoriasOpen(false);
    setLojasOpen(false);
  }, [pathname, activeCategory]);

  const navItemBase =
    "px-4 py-2 rounded-full text-sm font-medium transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary";
  const navItemInactive = "border-transparent text-white/70 hover:text-white hover:bg-white/5";
  const navItemActive = "bg-pink-300/15 border-pink-300/40 text-white";

  const dropdownItemBase =
    "mx-2 block whitespace-nowrap rounded-xl px-3 py-3 text-sm leading-none transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300/70";
  const dropdownItemInactive = "border-transparent text-white/70 hover:text-white hover:bg-white/5";
  const dropdownItemActive = "bg-pink-300/15 border-pink-300/40 text-white";

  const utilityItemBase =
    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary";
  const utilityItemInactive =
    "text-text-secondary hover:text-text-primary bg-surface-card/50 border-border-soft hover:border-accent-primary/30 hover:bg-surface-pink";
  const utilityItemActive = "bg-pink-300/15 border-pink-300/40 text-white";

  return (
    <header
      className="sticky top-0 z-[60] w-full overflow-visible border-b border-border-soft bg-background-primary/95 shadow-lg shadow-black/5 backdrop-blur-xl"
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="mx-auto max-w-7xl overflow-visible px-4 sm:px-6 lg:px-8">
        <div className="hidden h-20 items-center justify-between overflow-visible md:flex">
          {/* Brand - Left */}
          <div className="flex items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 sm:gap-3"
            >
              <BrandAvatar
                alt="Avatar ClickVendas"
                className="h-8 w-8 sm:h-9 sm:w-9"
              />
              <span className="text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-pink-300 to-pink-200 bg-clip-text text-transparent hover:from-pink-400 hover:to-pink-300 transition-all duration-300">
                ClickVendas
              </span>
            </Link>
          </div>

          {/* Navigation - Center */}
          <nav className="relative z-[65] flex items-center gap-3 overflow-visible">
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
                onClick={toggleCategorias}
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
                onClick={toggleLojas}
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
              className={`${utilityItemBase} ${isBuscarActive ? utilityItemActive : utilityItemInactive}`}
            >
              <Search size={18} />
              Buscar
            </Link>
          </div>
        </div>

        {/* Mobile / Tablet */}
        <div className="flex flex-col gap-3 py-3 md:hidden">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/"
              className="inline-flex min-w-0 items-center gap-2.5"
            >
              <BrandAvatar
                alt="Avatar ClickVendas"
                className="h-8 w-8"
              />
              <span className="truncate text-lg font-bold tracking-tight text-transparent transition-all duration-300 bg-gradient-to-r from-pink-300 to-pink-200 bg-clip-text hover:from-pink-400 hover:to-pink-300 sm:text-xl">
                ClickVendas
              </span>
            </Link>

            <div className="ml-auto flex items-center gap-2">
              <Link
                href="/buscar"
                className={`${utilityItemBase} px-3 py-2 text-xs sm:px-4 sm:text-sm ${isBuscarActive ? utilityItemActive : utilityItemInactive}`}
              >
                <Search size={16} />
                Buscar
              </Link>
              <Link
                href="/favoritos"
                className={`${utilityItemBase} px-3 py-2 text-xs sm:px-4 sm:text-sm ${isFavoritosActive ? utilityItemActive : utilityItemInactive}`}
              >
                <Heart size={16} />
                Favoritos
              </Link>
            </div>
          </div>

          <nav className="relative z-[65] flex items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <Link
              href="/"
              className={`${navItemBase} min-w-fit whitespace-nowrap ${isHomeActive ? navItemActive : navItemInactive}`}
            >
              Página Principal
            </Link>

            <button
              onClick={toggleCategorias}
              className={`flex min-w-fit items-center gap-2 whitespace-nowrap ${navItemBase} ${isCategoriasActive ? navItemActive : navItemInactive}`}
              aria-haspopup="true"
              aria-expanded={categoriasOpen}
            >
              Categorias
              <ChevronDown size={16} className={`transition-transform duration-200 ${categoriasOpen ? "rotate-180" : ""}`} />
            </button>

            <button
              onClick={toggleLojas}
              className={`flex min-w-fit items-center gap-2 whitespace-nowrap ${navItemBase} ${isLojasActive ? navItemActive : navItemInactive}`}
              aria-haspopup="true"
              aria-expanded={lojasOpen}
            >
              Lojas
              <ChevronDown size={16} className={`transition-transform duration-200 ${lojasOpen ? "rotate-180" : ""}`} />
            </button>

            <Link
              href="/colecoes"
              className={`${navItemBase} min-w-fit whitespace-nowrap ${isColecoesActive ? navItemActive : navItemInactive}`}
            >
              Coleções
            </Link>

            <Link
              href="/sobre"
              className={`${navItemBase} min-w-fit whitespace-nowrap ${isSobreActive ? navItemActive : navItemInactive}`}
            >
              Sobre
            </Link>
          </nav>

          {categoriasOpen && (
            <div className="z-[80] rounded-2xl border border-border-soft/90 bg-surface-card/95 py-2 backdrop-blur-md shadow-xl shadow-black/15">
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
          )}

          {lojasOpen && (
            <div className="z-[80] rounded-2xl border border-border-soft/90 bg-surface-card/95 py-2 backdrop-blur-md shadow-xl shadow-black/15">
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
          )}
        </div>
      </div>
    </header>
  );
}
