"use client";

import { Search, ChevronDown, Heart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { BrandAvatar } from "@/components/ui/brand-avatar";
import { getSupabaseClient, isSupabaseConfigured } from "@/lib/supabase";

interface HeaderCategoryItem {
  name: string;
  slug?: string;
  href: string;
}

export function StoreHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const categoriasButtonRef = useRef<HTMLButtonElement>(null);
  const lojasButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  const [categoriasOpen, setCategoriasOpen] = useState(false);
  const [lojasOpen, setLojasOpen] = useState(false);
  const [mobileNavAtStart, setMobileNavAtStart] = useState(true);
  const [mobileNavAtEnd, setMobileNavAtEnd] = useState(false);
  const [mobileNavHasOverflow, setMobileNavHasOverflow] = useState(false);
  const [categorias, setCategorias] = useState<HeaderCategoryItem[]>([
    { name: "Feminino", href: "/lojas?categoria=feminino" },
    { name: "Masculino", href: "/lojas?categoria=masculino" },
    { name: "Casa", href: "/lojas?categoria=casa" },
    { name: "Skin Care", href: "/lojas?categoria=skincare" },
    { name: "Infantil", href: "/lojas?categoria=infantil" },
  ]);
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState("");
  const activeCategorySlug = pathname.startsWith("/categorias/") ? pathname.split("/")[2] : "";

  const lojas = [
    { name: "Shopee", href: "/lojas/shopee" },
    { name: "Shein", href: "/lojas/shein" },
    { name: "TikTok Shop", href: "/lojas/tiktok-shop" }
  ];

  useEffect(() => {
    const loadCategories = async () => {
      if (!isSupabaseConfigured()) return;

      const supabase = getSupabaseClient();
      if (!supabase) return;

      const { data, error } = await supabase
        .from("categories")
        .select("name,slug")
        .eq("is_active", true)
        .order("sort_order", { ascending: true })
        .limit(20);

      if (error || !data?.length) return;

      const mapped = data
        .map((item: any) => ({
          name: String(item?.name || "").trim(),
          slug: String(item?.slug || "").trim(),
          href: `/categorias/${String(item?.slug || "").trim()}`,
        }))
        .filter((item) => item.name && item.slug);

      if (mapped.length > 0) {
        setCategorias(mapped);
      }
    };

    loadCategories();

    const updateCategoryQuery = () => {
      const params = new URLSearchParams(window.location.search);
      setActiveCategory((params.get("categoria") || "").toLowerCase());
    };

    updateCategoryQuery();
    window.addEventListener("popstate", updateCategoryQuery);

    return () => {
      window.removeEventListener("popstate", updateCategoryQuery);
    };
  }, [pathname]);

  const isHomeActive = pathname === "/";
  const isCategoriasActive = pathname === "/categorias" || pathname.startsWith("/categorias/") || (pathname === "/lojas" && Boolean(activeCategory));
  const isLojasActive = pathname === "/lojas" || pathname.startsWith("/lojas/");
  const isColecoesActive = pathname === "/colecoes" || pathname.startsWith("/colecoes/") || pathname.startsWith("/colecao/");
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

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (!headerRef.current) return;
      const target = event.target as Node;
      if (!headerRef.current.contains(target)) {
        setCategoriasOpen(false);
        setLojasOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    function handleEscape(event: globalThis.KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (categoriasOpen) {
        closeCategoriasAndFocusTrigger();
        return;
      }
      if (lojasOpen) {
        closeLojasAndFocusTrigger();
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [categoriasOpen, lojasOpen]);

  useEffect(() => {
    const mobileNav = mobileNavRef.current;
    if (!mobileNav) return;

    const updateMobileNavState = () => {
      const maxScrollLeft = mobileNav.scrollWidth - mobileNav.clientWidth;
      setMobileNavHasOverflow(maxScrollLeft > 8);
      setMobileNavAtStart(mobileNav.scrollLeft <= 4);
      setMobileNavAtEnd(mobileNav.scrollLeft >= maxScrollLeft - 4);
    };

    updateMobileNavState();
    mobileNav.addEventListener("scroll", updateMobileNavState, { passive: true });
    window.addEventListener("resize", updateMobileNavState);

    return () => {
      mobileNav.removeEventListener("scroll", updateMobileNavState);
      window.removeEventListener("resize", updateMobileNavState);
    };
  }, [pathname, categoriasOpen, lojasOpen]);

  function closeCategoriasAndFocusTrigger() {
    setCategoriasOpen(false);
    categoriasButtonRef.current?.focus();
  }

  function closeLojasAndFocusTrigger() {
    setLojasOpen(false);
    lojasButtonRef.current?.focus();
  }

  function handleCategoriasKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCategorias();
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeCategoriasAndFocusTrigger();
    }
  }

  function handleLojasKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleLojas();
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeLojasAndFocusTrigger();
    }
  }

  const navItemBase =
    "inline-flex min-h-11 items-center px-4 py-2 rounded-full text-sm font-medium transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary";
  const navItemInactive = "border-transparent text-white/80 hover:text-white hover:bg-white/10";
  const navItemActive = "bg-pink-300/15 border-pink-300/40 text-white";

  const dropdownItemBase =
    "mx-2 block whitespace-nowrap rounded-xl px-3 py-2.5 text-sm leading-normal transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300/70";
  const dropdownItemInactive = "border-transparent text-white/80 hover:text-white hover:bg-white/10";
  const dropdownItemActive = "bg-pink-300/15 border-pink-300/40 text-white";

  const utilityItemBase =
    "flex min-h-11 items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary";
  const utilityItemInactive =
    "text-white/80 hover:text-white bg-white/[0.03] border-white/12 hover:border-pink-300/35 hover:bg-white/[0.06]";
  const utilityItemActive = "bg-pink-300/15 border-pink-300/40 text-white";

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-[60] w-full overflow-visible border-b border-border-soft bg-background-primary/95 shadow-lg shadow-black/15 backdrop-blur-xl"
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
                ref={categoriasButtonRef}
                onMouseEnter={() => setCategoriasOpen(true)}
                onMouseLeave={() => setCategoriasOpen(false)}
                onClick={toggleCategorias}
                onKeyDown={handleCategoriasKeyDown}
                className={`flex items-center gap-2 ${navItemBase} ${isCategoriasActive ? navItemActive : navItemInactive}`}
                aria-haspopup="true"
                aria-expanded={categoriasOpen}
                aria-controls="desktop-categorias-menu"
              >
                Categorias
                <ChevronDown size={16} className={`transition-transform duration-200 ${categoriasOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                id="desktop-categorias-menu"
                className={`absolute left-0 top-full z-[80] mt-2 min-w-[200px] w-max overflow-hidden rounded-2xl border border-border-soft/90 bg-surface-card/95 backdrop-blur-md shadow-xl shadow-black/15 transition-all duration-200 ${categoriasOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-1 opacity-0'}`}
                onMouseEnter={() => setCategoriasOpen(true)}
                onMouseLeave={() => setCategoriasOpen(false)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    event.preventDefault();
                    closeCategoriasAndFocusTrigger();
                  }
                }}
              >
                <div className="py-2">
                  {categorias.map((categoria) => (
                    <Link
                      key={categoria.name}
                      href={categoria.href}
                      className={`${dropdownItemBase} ${activeCategorySlug === categoria.slug || activeCategory === categoria.name.toLowerCase() ? dropdownItemActive : dropdownItemInactive}`}
                      onClick={() => closeCategoriasAndFocusTrigger()}
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
                ref={lojasButtonRef}
                onMouseEnter={() => setLojasOpen(true)}
                onMouseLeave={() => setLojasOpen(false)}
                onClick={toggleLojas}
                onKeyDown={handleLojasKeyDown}
                className={`flex items-center gap-2 ${navItemBase} ${isLojasActive ? navItemActive : navItemInactive}`}
                aria-haspopup="true"
                aria-expanded={lojasOpen}
                aria-controls="desktop-lojas-menu"
              >
                Lojas
                <ChevronDown size={16} className={`transition-transform duration-200 ${lojasOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                id="desktop-lojas-menu"
                className={`absolute left-0 top-full z-[80] mt-2 min-w-[200px] w-max overflow-hidden rounded-2xl border border-border-soft/90 bg-surface-card/95 backdrop-blur-md shadow-xl shadow-black/15 transition-all duration-200 ${lojasOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-1 opacity-0'}`}
                onMouseEnter={() => setLojasOpen(true)}
                onMouseLeave={() => setLojasOpen(false)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    event.preventDefault();
                    closeLojasAndFocusTrigger();
                  }
                }}
              >
                <div className="py-2">
                  {lojas.map((loja) => (
                    <Link
                      key={loja.name}
                      href={loja.href}
                      className={`${dropdownItemBase} ${pathname === loja.href ? dropdownItemActive : dropdownItemInactive}`}
                      onClick={() => closeLojasAndFocusTrigger()}
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
        <div className="flex flex-col gap-2.5 py-3 md:hidden">
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

          <div className="relative">
          <nav
            ref={mobileNavRef}
            className="relative z-[65] flex items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <Link
              href="/"
              className={`${navItemBase} min-w-fit whitespace-nowrap ${isHomeActive ? navItemActive : navItemInactive}`}
            >
              Página Principal
            </Link>

            <button
              onClick={toggleCategorias}
              onKeyDown={handleCategoriasKeyDown}
              className={`flex min-w-fit items-center gap-2 whitespace-nowrap ${navItemBase} ${isCategoriasActive ? navItemActive : navItemInactive}`}
              aria-haspopup="true"
              aria-expanded={categoriasOpen}
              aria-controls="mobile-categorias-menu"
            >
              Categorias
              <ChevronDown size={16} className={`transition-transform duration-200 ${categoriasOpen ? "rotate-180" : ""}`} />
            </button>

            <button
              onClick={toggleLojas}
              onKeyDown={handleLojasKeyDown}
              className={`flex min-w-fit items-center gap-2 whitespace-nowrap ${navItemBase} ${isLojasActive ? navItemActive : navItemInactive}`}
              aria-haspopup="true"
              aria-expanded={lojasOpen}
              aria-controls="mobile-lojas-menu"
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

          {mobileNavHasOverflow && !mobileNavAtStart && (
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background-primary via-background-primary/80 to-transparent" />
          )}

          {mobileNavHasOverflow && !mobileNavAtEnd && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex w-10 items-center justify-end bg-gradient-to-l from-background-primary via-background-primary/80 to-transparent pr-1">
              <ChevronDown size={14} className="rotate-[-90deg] text-pink-100/80" aria-hidden="true" />
            </div>
          )}
          </div>

          {categoriasOpen && (
            <div
              id="mobile-categorias-menu"
              className="z-[80] rounded-2xl border border-border-soft/90 bg-surface-card/95 py-2 backdrop-blur-md shadow-xl shadow-black/15"
            >
              {categorias.map((categoria) => (
                <Link
                  key={categoria.name}
                  href={categoria.href}
                  className={`${dropdownItemBase} ${activeCategorySlug === categoria.slug || activeCategory === categoria.name.toLowerCase() ? dropdownItemActive : dropdownItemInactive}`}
                  onClick={() => closeCategoriasAndFocusTrigger()}
                >
                  {categoria.name}
                </Link>
              ))}
            </div>
          )}

          {lojasOpen && (
            <div
              id="mobile-lojas-menu"
              className="z-[80] rounded-2xl border border-border-soft/90 bg-surface-card/95 py-2 backdrop-blur-md shadow-xl shadow-black/15"
            >
              {lojas.map((loja) => (
                <Link
                  key={loja.name}
                  href={loja.href}
                  className={`${dropdownItemBase} ${pathname === loja.href ? dropdownItemActive : dropdownItemInactive}`}
                  onClick={() => closeLojasAndFocusTrigger()}
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
