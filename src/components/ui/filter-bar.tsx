"use client";

import { useState } from "react";
import { Filter, ChevronDown, ChevronUp, Search } from "lucide-react";
import { ProductCategory, ProductGender, StoreOrigin } from "@/types/product";

interface FilterBarProps {
  category: string;
  gender: string;
  store: string;
  searchTerm?: string;
  onCategoryChange: (category: string) => void;
  onGenderChange: (gender: string) => void;
  onStoreChange: (store: string) => void;
  onSearchChange?: (search: string) => void;
  showSearch?: boolean;
  showCategory?: boolean;
  showGender?: boolean;
  showStore?: boolean;
}

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
    { value: "Amazon", label: "Amazon" },
    { value: "Magalu", label: "Magalu" },
  ];

  return (
    <div className="bg-surface-card border border-border-soft rounded-2xl p-4 shadow-lg shadow-black/10">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Filter size={20} className="text-text-secondary" />
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

      <div className={`space-y-3 ${isExpanded ? 'block' : 'hidden md:block'}`}>
        {/* Search Input */}
        {showSearch && (
          <div>
            <label className="block text-xs text-text-secondary mb-1">Buscar produtos</label>
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange?.(e.target.value)}
                placeholder="Digite o nome do produto..."
                className="w-full bg-background-primary border border-border-soft rounded-xl pl-10 pr-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/30 focus:border-transparent transition-all"
              />
            </div>
          </div>
        )}

        {/* Category Filter */}
        {showCategory && (
          <div>
            <label className="block text-xs text-text-secondary mb-1">Categoria</label>
            <select
              value={category}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full bg-background-primary border border-border-soft rounded-xl px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/30 focus:border-transparent transition-all"
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
            <label className="block text-xs text-text-secondary mb-1">Gênero</label>
            <select
              value={gender}
              onChange={(e) => onGenderChange(e.target.value)}
              className="w-full bg-background-primary border border-border-soft rounded-xl px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/30 focus:border-transparent transition-all"
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
            <label className="block text-xs text-text-secondary mb-1">Loja</label>
            <select
              value={store}
              onChange={(e) => onStoreChange(e.target.value)}
              className="w-full bg-background-primary border border-border-soft rounded-xl px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/30 focus:border-transparent transition-all"
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
