import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "420px",
      // => @media (min-width: 375px) { ... }

      s: "540px",
      // => @media (min-width: 540px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      maxWidth: {
        "8xl": "96rem",
        "9xl": "108rem",
      },
      fontFamily: {
        "host-grotesk": ["var(--font-host-grotesk)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
        ubuntu: ["var(--font-ubuntu)", "sans-serif"],
        "gochi-hand": ["var(--font-gochi-hand)", "cursive"],
      },
      letterSpacing: {
        // Vos espacements personnalisés
        "tight-custom": "-1.20px",
      },
      height: {
        // Vos hauteurs personnalisées
        0.5: "0.03125rem",
      },
      zIndex: {
        // Vos z-index personnalisés
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
      },
      colors: {
        blue: {
          50: "var(--blue-ribbon-50)",
          100: "var(--blue-ribbon-100)",
          200: "var(--blue-ribbon-200)",
          300: "var(--blue-ribbon-300)",
          400: "var(--blue-ribbon-400)",
          500: "var(--blue-ribbon-500)",
          600: "var(--blue-ribbon-600)",
          700: "var(--blue-ribbon-700)",
          800: "var(--blue-ribbon-800)",
          900: "var(--blue-ribbon-900)",
          950: "var(--blue-ribbon-950)",
          border: "var(--blue-ribbon-200)",
          bg: "var(--blue-ribbon-900)",
        },
        pink: { border: "#FBCFE8", bg: "#831843" },
        purple: { border: "#DDD6FE", bg: "#4C1D95" },
        orange: { border: "#FED7AA", bg: "#78350F" },
        green: { border: "#C2F0D2", bg: "#14532D" },
        grey: "#87A6DD",
      },
    },
  },
  plugins: [],
} satisfies Config;
