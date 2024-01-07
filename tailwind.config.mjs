/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["PP Acma", ...defaultTheme.fontFamily.serif],
      },
    },
    fontMetrics: {
      serif: {
        capHeight: 780,
        ascent: 1032,
        descent: -480,
        lineGap: 0,
        unitsPerEm: 1000,
      },
    },
  },
  plugins: [require("tailwindcss-capsize")],
};
