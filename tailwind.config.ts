import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        "background-secondary": "#13131f",
        "accent-primary": "#8b5cf6",
        "accent-secondary": "#06b6d4",
        "accent-tertiary": "#ec4899",
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-space-grotesk)'],
      },
      backdropBlur: {
        glass: '10px',
      },
    },
  },
  plugins: [],
};

export default config;
