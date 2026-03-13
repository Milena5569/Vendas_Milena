import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Baby Pink Luxury Color System
        "background-primary": "#0D0D0F",
        "background-secondary": "#121216", 
        "background-tertiary": "#1A1A1F",
        "surface-card": "#FFFFFF",
        "surface-soft": "#FFF8FA",
        "border-soft": "#F7C8D8",
        "text-primary": "#FFFFFF",
        "text-secondary": "#E6EAF2",
        "text-tertiary": "#9AA3B2",
        "accent-primary": "#F7C8D8",
        "accent-secondary": "#F4AFC4",
        "accent-hover": "#EC8FB1",
        "glow-soft": "#FFD6E4",
        "glow-warm": "#FADADD",
        "accent-success": "#4CAF6A",
      },
      spacing: {
        "8": "8px",
        "16": "16px",
        "24": "24px",
        "32": "32px",
        "48": "48px",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#E6EAF2",
            lineHeight: "1.6",
            maxWidth: "none",
            a: {
              color: "#F2B705",
              "&:hover": {
                color: "#D9A300",
              },
            },
          },
        },
      },
      fontFamily: {
        title: ['var(--font-title)', 'system-ui'],
        body: ['var(--font-body)', 'system-ui'],
      },
    },
  },
  plugins: [],
} satisfies Config;
