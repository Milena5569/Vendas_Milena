"use client";

import { useMemo, useState } from "react";
import { Product } from "@/types/product";

export function useProductFilters(products: Product[]) {
  const [category, setCategory] = useState("Todos");
  const [gender, setGender] = useState("Todos");
  const [store, setStore] = useState("Todos");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory =
        category === "Todos" || product.category.name === category;
      const matchGender = gender === "Todos" || product.gender === gender;
      const matchStore = store === "Todos" || product.links[0]?.store === store;

      return matchCategory && matchGender && matchStore;
    });
  }, [products, category, gender, store]);

  return {
    category,
    gender,
    store,
    setCategory,
    setGender,
    setStore,
    filteredProducts,
  };
}