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
        whatsapp: {
          teal: "#075E54",
          green: "#128C7E",
          light: "#25D366",
          bubble: "#DCF8C6",
          bg: "#EFEAE2",
          dark: "#0B141A",
        },
        yemen: {
          coffee: "#5C3A21",
          gold: "#D4AF37",
          terracotta: "#B84A39",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
