export type SupportedStoreSlug = 'shopee' | 'shein' | 'tiktok-shop';

export function detectStoreFromUrl(url: string): SupportedStoreSlug | null {
  const normalized = (url || '').toLowerCase();
  if (!normalized) return null;

  if (normalized.includes('shopee')) return 'shopee';
  if (normalized.includes('shein')) return 'shein';
  if (normalized.includes('tiktok')) return 'tiktok-shop';

  return null;
}
