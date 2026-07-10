import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#faf9f7",
            foreground: "#16181d",
            primary: {
              50: "#effcf9",
              100: "#c9f4ea",
              200: "#95e8d7",
              300: "#5bd4bf",
              400: "#2bb9a4",
              500: "#0f9e8b",
              600: "#0b7d70",
              700: "#0d645b",
              800: "#0f4f49",
              900: "#11423e",
              DEFAULT: "#0b7d70",
              foreground: "#ffffff",
            },
            focus: "#0f9e8b",
          },
        },
        dark: {
          colors: {
            background: "#0a0c0f",
            foreground: "#e7ebee",
            primary: {
              50: "#11423e",
              100: "#0f4f49",
              200: "#0d645b",
              300: "#0b7d70",
              400: "#0f9e8b",
              500: "#2bb9a4",
              600: "#5bd4bf",
              700: "#95e8d7",
              800: "#c9f4ea",
              900: "#effcf9",
              DEFAULT: "#2bb9a4",
              foreground: "#04120f",
            },
            focus: "#2bb9a4",
          },
        },
      },
    }),
  ],
};
