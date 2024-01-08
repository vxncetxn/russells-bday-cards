/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["PP Neue Montreal", ...defaultTheme.fontFamily.sans],
        serif: ["PP Acma", ...defaultTheme.fontFamily.serif],
        handwriting: ["Caveat"],
      },
    },
    fontMetrics: {
      sans: {
        capHeight: 715,
        ascent: 958,
        descent: -242,
        lineGap: 0,
        unitsPerEm: 1000,
      },
      serif: {
        capHeight: 780,
        ascent: 1032,
        descent: -480,
        lineGap: 0,
        unitsPerEm: 1000,
      },
    },
    spacing: {
      0: "0",
      2: "0.125rem",
      4: "0.25rem",
      8: "0.5rem",
      12: "0.75rem",
      16: "1rem",
      20: "1.25rem",
      24: "1.5rem",
      32: "2rem",
      40: "2.5rem",
      48: "3rem",
      64: "4rem",
      80: "5rem",
      96: "6rem",
      120: "7.5rem",
      160: "10rem",
      200: "12.5rem",
      240: "15rem",
      280: "17.5rem",
      320: "20rem",
      360: "22.5rem",
    },
    backgroundImage: {
      stamp1: "url('/stamps/stamp-1.png')",
      stamp2: "url('/stamps/stamp-2.png')",
      stamp3: "url('/stamps/stamp-3.png')",
      stamp4: "url('/stamps/stamp-4.png')",
      stamp5: "url('/stamps/stamp-5.png')",
    },
    screens: {
      xxs: "420px",
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [require("tailwindcss-capsize")],
};
