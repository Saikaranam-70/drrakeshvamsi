import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: "#17364B",
            950: "#0D202D",
            900: "#112736",
            850: "#17364B",
            800: "#1E425B",
            700: "#275371",
            600: "#32678B",
            500: "#417DA5",
            400: "#5E95BA",
            300: "#8BB5D2",
            200: "#B8D4E5",
            100: "#E3EEF5",
            50: "#F2F7FA",
          },
          gold: {
            DEFAULT: "#B99A62",
            900: "#5C4620",
            800: "#7A6031",
            700: "#987942",
            600: "#A8884F",
            500: "#B99A62",
            400: "#C8AD7D",
            300: "#D8C39D",
            200: "#E7D8BD",
            100: "#F3ECDE",
            50: "#FAF7F2",
          },
          ivory: {
            DEFAULT: "#F6F3EC",
            dark: "#EDE7DC",
            light: "#FAF8F5",
            pure: "#FFFFFF",
          },
          teal: {
            DEFAULT: "#E5EFF0",
            950: "#0D282D",
            900: "#133E44",
            800: "#1A525A",
            700: "#226670",
            600: "#2C7D8A",
            500: "#3897A6",
            400: "#5FB2BF",
            300: "#8ECBD4",
            200: "#BFE3E8",
            100: "#DCEFF2",
            50: "#E5EFF0",
          },
          cyan: "#B99A62",
          border: "#E2DBD0",
          surface: "#F6F3EC",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["'Outfit'", "var(--font-inter)", "-apple-system", "sans-serif"],
        heading: ["'Outfit'", "var(--font-jakarta)", "sans-serif"],
        serif: ["'Playfair Display'", "Georgia", "serif"],
        signature: ["'Great Vibes'", "'Dancing Script'", "cursive"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(23, 54, 75, 0.06)",
        card: "0 10px 30px -4px rgba(23, 54, 75, 0.08)",
        glow: "0 0 25px rgba(185, 154, 98, 0.25)",
        "glow-teal": "0 0 35px rgba(229, 239, 240, 0.6)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #F6F3EC 0%, #FAF8F5 50%, #E5EFF0 100%)",
        "teal-gradient": "linear-gradient(135deg, #E5EFF0 0%, #D4E5E7 100%)",
        "btn-gradient": "linear-gradient(135deg, #B99A62 0%, #A4854C 100%)",
        "card-gradient": "linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
