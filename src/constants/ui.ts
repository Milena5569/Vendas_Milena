export const UI_CONSTANTS = {
  // Layout
  HEADER_HEIGHT: 80,
  FOOTER_HEIGHT: 200,
  
  // Grid
  GRID_GAP: 24,
  GRID_COLUMNS: {
    SM: 1,
    MD: 2,
    LG: 3,
    XL: 4
  },
  
  // Breakpoints
  BREAKPOINTS: {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280
  },
  
  // Animations
  TRANSITION_DURATION: 300,
  TRANSITION_EASING: "cubic-bezier(0.4, 0, 0.2, 1)",
  
  // Colors (matching existing theme)
  COLORS: {
    BACKGROUND_PRIMARY: "#0F1115",
    SURFACE_CARD: "#171A21",
    BORDER_SOFT: "#232730",
    TEXT_PRIMARY: "#E6EAF2",
    TEXT_SECONDARY: "#9AA3B2",
    ACCENT_PRIMARY: "#F2B705",
    ACCENT_SUCCESS: "#4CAF6A"
  },
  
  // Typography
  TYPOGRAPHY: {
    FONT_FAMILY: "system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif",
    FONT_SIZES: {
      XS: "0.75rem",
      SM: "0.875rem",
      BASE: "1rem",
      LG: "1.125rem",
      XL: "1.25rem",
      "2XL": "1.5rem",
      "3XL": "1.875rem",
      "4XL": "2.25rem",
      "5XL": "3rem"
    },
    LINE_HEIGHTS: {
      TIGHT: 1.25,
      NORMAL: 1.5,
      RELAXED: 1.625
    }
  },
  
  // Spacing
  SPACING: {
    XS: "8px",
    SM: "16px",
    MD: "24px",
    LG: "32px",
    XL: "48px",
    "2XL": "64px",
    "3XL": "96px",
    "4XL": "128px"
  },
  
  // Shadows
  SHADOWS: {
    SOFT: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
    MEDIUM: "0 4px 6px -1px rgba(0, 0, 0, 0.5)",
    LARGE: "0 10px 15px -3px rgba(0, 0, 0, 0.5)",
    CARD: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
  },
  
  // Z-Index
  Z_INDEX: {
    BACKGROUND: 0,
    BASE: 10,
    FLOATING: 100,
    MODAL: 1000,
    TOOLTIP: 2000,
    HEADER: 3000
  }
} as const;