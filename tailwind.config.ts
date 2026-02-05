import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{json}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#101115",
        mist: "#f5f5f7",
        steel: "#7b8192",
        accent: "#111827"
      },
      boxShadow: {
        soft: "0 20px 60px -30px rgba(15, 23, 42, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
