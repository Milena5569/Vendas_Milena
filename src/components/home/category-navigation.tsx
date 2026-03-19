"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  "Todos",
  "Eletrônicos", 
  "Beleza",
  "Casa",
  "Moda",
  "Achadinhos",
  "Mais Vendidos"
];

export function CategoryNavigation() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right', container: HTMLDivElement) => {
    const scrollAmount = 200;
    if (direction === 'left') {
      container.scrollLeft = Math.max(0, container.scrollLeft - scrollAmount);
    } else {
      container.scrollLeft = Math.min(maxScroll, container.scrollLeft + scrollAmount);
    }
  };

  const handleScrollUpdate = (container: HTMLDivElement) => {
    setScrollLeft(container.scrollLeft);
    setMaxScroll(container.scrollWidth - container.clientWidth);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const update = () => handleScrollUpdate(container);
    update();
    container.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      container.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="relative">
      {/* Scroll controls */}
      {scrollLeft > 0 && (
        <button
          onClick={() => scrollRef.current && handleScroll('left', scrollRef.current)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-surface-card border border-border-soft p-2 hover:bg-surface-card/80 transition-colors"
          aria-label="Rolar categorias para a esquerda"
        >
          <ChevronLeft size={20} className="text-text-secondary" />
        </button>
      )}
      
      {scrollLeft < maxScroll && (
        <button
          onClick={() => scrollRef.current && handleScroll('right', scrollRef.current)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-surface-card border border-border-soft p-2 hover:bg-surface-card/80 transition-colors"
          aria-label="Rolar categorias para a direita"
        >
          <ChevronRight size={20} className="text-text-secondary" />
        </button>
      )}

      <div ref={scrollRef} className="category-scroll relative flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`group flex min-h-11 flex-shrink-0 items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] ${
              activeCategory === category
                ? 'bg-accent-primary text-background-primary shadow-lg shadow-accent-primary/20'
                : 'bg-surface-card text-text-secondary border border-border-soft hover:bg-surface-card/80 hover:text-text-primary hover:border-pink-300/50 hover:shadow-[0_8px_22px_rgba(244,175,196,0.18)]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {maxScroll > 0 && scrollLeft > 4 && (
        <div className="pointer-events-none absolute inset-y-0 left-0 z-0 w-8 bg-gradient-to-r from-background-primary via-background-primary/80 to-transparent" />
      )}

      {maxScroll > 0 && scrollLeft < maxScroll - 4 && (
        <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-10 bg-gradient-to-l from-background-primary via-background-primary/80 to-transparent" />
      )}
    </section>
  );
}
