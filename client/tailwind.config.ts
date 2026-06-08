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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#2F80ED",
          foreground: "#FFFFFF",
          50: "#EBF3FE",
          100: "#D7E7FD",
          200: "#AFCEFB",
          300: "#87B5F9",
          400: "#5F9CF7",
          500: "#2F80ED",
          600: "#1461D2",
          700: "#0F4AA1",
          800: "#0A3370",
          900: "#051C3E",
        },
        slate: {
          950: "#0F172A",
        }
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        playfair: ["var(--font-playfair)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
