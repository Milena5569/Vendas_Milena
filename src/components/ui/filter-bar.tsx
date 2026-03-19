"use client";

import { useState } from "react";
import { Filter, ChevronDown, ChevronUp, Search } from "lucide-react";
import { FilterBarProps } from "@/types/component-props";

// Canonical FilterBar API (Phase 2):
// - category, gender, store, optional searchTerm
// - onCategoryChange, onGenderChange, onStoreChange, optional onSearchChange
// - visibility toggles: showSearch/showCategory/showGender/showStore

export function FilterBar({
  category,
  gender,
  store,
  searchTerm = "",
  onCategoryChange,
  onGenderChange,
  onStoreChange,
  onSearchChange,
  showSearch = true,
  showCategory = true,
  showGender = true,
  showStore = true,
}: FilterBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { value: "Todos", label: "Todas as categorias" },
    { value: "Eletronicos", label: "Eletrônicos" },
    { value: "Casa", label: "Casa" },
    { value: "Beleza", label: "Beleza" },
    { value: "Moda", label: "Moda" },
    { value: "Acessorios", label: "Acessórios" },
  ];

  const genders = [
    { value: "Todos", label: "Todos os gêneros" },
    { value: "Uni", label: "Unissex" },
    { value: "Fem", label: "Feminino" },
    { value: "Masc", label: "Masculino" },
  ];

  const stores = [
    { value: "Todos", label: "Todas as lojas" },
    { value: "Shopee", label: "Shopee" },
    { value: "Shein", label: "Shein" },
    { value: "TikTok Shop", label: "TikTok Shop" },
  ];

  return (
    <div className="rounded-2xl border border-border-soft bg-surface-card/80 p-4 shadow-lg shadow-black/12">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-text-secondary/90" />
          <span className="text-sm font-semibold text-text-primary">Filtros</span>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="md:hidden flex items-center gap-1 text-text-secondary hover:text-text-primary transition-colors"
        >
          {isExpanded ? (
            <>
              <ChevronUp size={16} />
              <span className="text-xs">Ocultar</span>
            </>
          ) : (
            <>
              <ChevronDown size={16} />
              <span className="text-xs">Mostrar</span>
            </>
          )}
        </button>
      </div>

      <div className={`space-y-3.5 ${isExpanded ? 'block' : 'hidden md:block'}`}>
        {/* Search Input */}
        {showSearch && (
          <div>
            <label className="mb-1 block text-xs text-text-secondary/90">Buscar produtos</label>
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary/90" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange?.(e.target.value)}
                placeholder="Digite o nome do produto..."
                className="w-full rounded-xl border border-border-soft bg-background-primary/90 py-2.5 pl-10 pr-3 text-sm text-text-primary transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent-primary/35"
              />
            </div>
          </div>
        )}

        {/* Category Filter */}
        {showCategory && (
          <div>
            <label className="mb-1 block text-xs text-text-secondary/90">Categoria</label>
            <select
              value={category}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full rounded-xl border border-border-soft bg-background-primary/90 px-3 py-2.5 text-sm text-text-primary transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent-primary/35"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Gender Filter */}
        {showGender && (
          <div>
            <label className="mb-1 block text-xs text-text-secondary/90">Gênero</label>
            <select
              value={gender}
              onChange={(e) => onGenderChange(e.target.value)}
              className="w-full rounded-xl border border-border-soft bg-background-primary/90 px-3 py-2.5 text-sm text-text-primary transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent-primary/35"
            >
              {genders.map((gen) => (
                <option key={gen.value} value={gen.value}>
                  {gen.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Store Filter */}
        {showStore && (
          <div>
            <label className="mb-1 block text-xs text-text-secondary/90">Loja</label>
            <select
              value={store}
              onChange={(e) => onStoreChange(e.target.value)}
              className="w-full rounded-xl border border-border-soft bg-background-primary/90 px-3 py-2.5 text-sm text-text-primary transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent-primary/35"
            >
              {stores.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
