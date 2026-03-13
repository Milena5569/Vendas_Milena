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
        "background-primary": "#08080A",
        "background-secondary": "#0D0D10", 
        "background-tertiary": "#111114",
        "surface-card": "#111114",
        "surface-soft": "#16161D",
        "border-soft": "rgba(247, 200, 216, 0.24)",
        "text-primary": "#FFFFFF",
        "text-secondary": "rgba(255, 255, 255, 0.8)",
        "text-tertiary": "rgba(255, 255, 255, 0.6)",
        "accent-primary": "#F7C8D8",
        "accent-secondary": "#F4AFC4",
        "accent-hover": "#EFA9C5",
        "glow-soft": "rgba(247, 200, 216, 0.12)",
        "glow-warm": "rgba(244, 175, 196, 0.16)",
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
