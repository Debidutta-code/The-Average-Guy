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
          DEFAULT: "#2F80ED", // Soft Blue
          dark: "#1c5dbd",
          light: "#ebf3fe",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#008080", // Medical Teal
          dark: "#006666",
          light: "#e6f2f2",
        },
        medical: {
          blue: "#2F80ED",
          teal: "#008080",
          gray: "#F8FAFC",
        }
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
