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
            950: "#001026",
            900: "#001B3D",
            800: "#002852",
            700: "#003366",
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
            50: "#EAF7FC",
          },
          cyan: "#00C5DC",
          border: "#D8EDF7",
          surface: "#F5FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-jakarta)", "sans-serif"],
        signature: ["'Brush Script MT'", "cursive"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 27, 61, 0.06)",
        card: "0 10px 30px -4px rgba(0, 27, 61, 0.08)",
        glow: "0 0 25px rgba(0, 197, 220, 0.35)",
        "glow-teal": "0 0 35px rgba(0, 157, 187, 0.4)",
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse at 80% 20%, rgba(0, 197, 220, 0.18) 0%, transparent 60%), linear-gradient(135deg, #001229 0%, #001B3D 45%, #003366 100%)",
        "teal-gradient": "linear-gradient(135deg, #009DBB 0%, #007A94 100%)",
        "btn-gradient": "linear-gradient(135deg, #009DBB 0%, #005F78 100%)",
        "card-gradient": "linear-gradient(180deg, #FFFFFF 0%, #F5FAFC 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
