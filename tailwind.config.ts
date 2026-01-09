import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.json"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui"]
      },
      colors: {
        primary: "#0F172A",
        brand: {
          DEFAULT: "#0A66C2",
          light: "#E6F0FA",
          dark: "#084182"
        }
      },
      boxShadow: {
        soft: "0 15px 45px -20px rgba(15, 23, 42, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
