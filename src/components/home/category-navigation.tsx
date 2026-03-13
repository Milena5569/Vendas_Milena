"use client";

import { useState } from "react";
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

  return (
    <section className="relative">
      {/* Scroll controls */}
      {scrollLeft > 0 && (
        <button
          onClick={(e) => handleScroll('left', e.currentTarget.parentElement!.querySelector('.category-scroll')!)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-surface-card border border-border-soft p-2 hover:bg-surface-card/80 transition-colors"
        >
          <ChevronLeft size={20} className="text-text-secondary" />
        </button>
      )}
      
      {scrollLeft < maxScroll && (
        <button
          onClick={(e) => handleScroll('right', e.currentTarget.parentElement!.querySelector('.category-scroll')!)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-surface-card border border-border-soft p-2 hover:bg-surface-card/80 transition-colors"
        >
          <ChevronRight size={20} className="text-text-secondary" />
        </button>
      )}

      <div className="category-scroll relative flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`group flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] ${
              activeCategory === category
                ? 'bg-accent-primary text-background-primary shadow-lg shadow-accent-primary/20'
                : 'bg-surface-card text-text-secondary border border-border-soft hover:bg-surface-card/80 hover:text-text-primary hover:border-pink-300/50 hover:shadow-[0_8px_22px_rgba(244,175,196,0.18)]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}
