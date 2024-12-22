import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist Sans", ...defaultTheme.fontFamily.sans],
        mono: ["Geist Mono", ...defaultTheme.fontFamily.mono],
        heading: ["Texturina", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'brick-red': '#570801',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
