"use client";

import { ProductCategory, ProductGender, StoreOrigin } from "@/types/product";

interface FilterBarProps {
  category: string;
  gender: string;
  store: string;
  onCategoryChange: (value: string) => void;
  onGenderChange: (value: string) => void;
  onStoreChange: (value: string) => void;
}

const categories: Array<"Todos" | ProductCategory> = [
  "Todos",
  "Eletronicos",
  "Casa",
  "Moda",
  "Beleza",
  "Acessorios",
];

const genders: Array<"Todos" | ProductGender> = [
  "Todos",
  "Masc",
  "Fem",
  "Uni",
];

const stores: Array<"Todos" | StoreOrigin> = [
  "Todos",
  "Shopee",
  "Shein",
  "TikTok Shop",
];

export function FilterBar({
  category,
  gender,
  store,
  onCategoryChange,
  onGenderChange,
  onStoreChange,
}: FilterBarProps) {
  const baseSelectClass =
    "w-full rounded-2xl border border-border-soft bg-surface-card px-4 py-3 text-sm text-text-primary outline-none transition focus:border-accent-primary/40";

  return (
    <section className="rounded-2xl border border-border-soft bg-surface-card/80 p-4 shadow-lg shadow-black/10 backdrop-blur-sm">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className={baseSelectClass}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              Categoria: {item}
            </option>
          ))}
        </select>

        <select
          value={gender}
          onChange={(e) => onGenderChange(e.target.value)}
          className={baseSelectClass}
        >
          {genders.map((item) => (
            <option key={item} value={item}>
              Gênero: {item}
            </option>
          ))}
        </select>

        <select
          value={store}
          onChange={(e) => onStoreChange(e.target.value)}
          className={baseSelectClass}
        >
          {stores.map((item) => (
            <option key={item} value={item}>
              Loja: {item}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
