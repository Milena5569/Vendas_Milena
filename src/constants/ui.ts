/**
 * @deprecated Phase 2 note:
 * Tailwind theme tokens in `tailwind.config.ts` are the active source of truth.
 * This file is kept only for governance clarity during transition and should
 * not be used as runtime styling source.
 */
export const LEGACY_UI_TOKENS = {
  status: "deprecated",
  sourceOfTruth: "tailwind.config.ts",
  legacyPalette: {
    backgroundPrimary: "#0F1115",
    surfaceCard: "#171A21",
    borderSoft: "#232730",
    textPrimary: "#E6EAF2",
    textSecondary: "#9AA3B2",
    accentPrimary: "#F2B705",
  },
} as const;
