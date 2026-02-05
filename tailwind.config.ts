import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./content/**/*.json"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f8ff",
          100: "#e1ecff",
          200: "#c3d8ff",
          300: "#95b8ff",
          400: "#6b93ff",
          500: "#4b73ff",
          600: "#3556f5",
          700: "#2a43d3",
          800: "#243cad",
          900: "#22368a"
        }
      }
    }
  },
  plugins: []
};

export default config;
