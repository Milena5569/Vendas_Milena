export const RECENT_OFFERS_HASH = "#ofertas-recentes";
export const STORES_PAGE_PATH = "/lojas";
export const COLLECTIONS_PAGE_PATH = "/colecoes";

export function getRecentOffersHref(isHomepage: boolean) {
  return isHomepage ? RECENT_OFFERS_HASH : `/${RECENT_OFFERS_HASH}`;
}