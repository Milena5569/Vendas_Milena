export function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function calculateDiscountPercentage(
  original: number,
  discount: number
) {
  if (original <= 0) return 0;
  return Math.round(((original - discount) / original) * 100);
}