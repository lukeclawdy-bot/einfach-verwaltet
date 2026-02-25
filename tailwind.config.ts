import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1B3A5C",
        teal: "#2A7F7F",
        "warm-white": "#FAFAF8",
        amber: "#D4840A",
        "light-gray": "#F0EFED",
        "text-main": "#2C2C2C",
        "text-light": "#6B6B6B",
        green: "#2D7D4A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
