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
        background: "#FFFFFF",
        foreground: "#0F172A",
        primary: {
          DEFAULT: "#2563EB", // Primary Blue
          dark: "#1d4ed8",
          light: "#eff6ff",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#0EA5A4", // Secondary Teal
          dark: "#0d9488",
          light: "#f0fdfa",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#14B8A6", // Accent Teal
          light: "#ccfbf1",
        },
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          500: "#64748B",
          600: "#475569",
          900: "#0F172A",
        },
        success: "#10B981",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
        'premium-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
} satisfies Config;
