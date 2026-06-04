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
        medical: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7cc8fb",
          400: "#38aef7",
          500: "#2F80ED", // Brand Blue
          600: "#0b76e5",
          700: "#095ec4",
          800: "#0d4da0",
          900: "#10417f",
          950: "#0b2952",
        },
        slate: {
          850: "#1e293b",
          950: "#020617",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
