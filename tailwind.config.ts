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
            950: "#000B1A",
            900: "#001229",
            850: "#001736",
            800: "#001F47",
            700: "#002D66",
            600: "#004785",
            500: "#005BA3",
          },
          teal: {
            700: "#007A94",
            600: "#008DA8",
            500: "#009DBB",
            400: "#13B6D6",
            300: "#00C5DC",
            200: "#60E0F0",
            100: "#BAF3FA",
            50: "#002447",
          },
          cyan: "#00C5DC",
          border: "#002A54",
          surface: "#001026",
          card: "#001533",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-jakarta)", "sans-serif"],
        signature: ["'Brush Script MT'", "cursive"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 11, 26, 0.4)",
        card: "0 10px 30px -4px rgba(0, 11, 26, 0.6)",
        glow: "0 0 25px rgba(0, 197, 220, 0.35)",
        "glow-teal": "0 0 35px rgba(0, 157, 187, 0.4)",
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse at 80% 20%, rgba(0, 197, 220, 0.18) 0%, transparent 60%), linear-gradient(135deg, #000B1A 0%, #001229 45%, #001F47 100%)",
        "teal-gradient": "linear-gradient(135deg, #009DBB 0%, #007A94 100%)",
        "btn-gradient": "linear-gradient(135deg, #009DBB 0%, #005F78 100%)",
        "card-gradient": "linear-gradient(180deg, #001533 0%, #000B1A 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
