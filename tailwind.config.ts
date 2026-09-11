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
        "canvas-dark": "#090807",
        "surface-card": "#141210",
        "surface-elevated": "#1d1916",
        "surface-subtle": "#25211c",
        "accent-amber": "#D48D3B",
        "accent-gold": "#E8A959",
        "text-primary": "#F8F5EE",
        "text-muted": "#9E988E",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: ".25em",
        extrawide: ".35em",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
