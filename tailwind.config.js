/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EEAA9C',
        lightPink: '#FFB6C1',
        mystyRose: '#FFE4E1',
        line: '#FAF0E6',
        error: '#E12C43',
        success: '#9ACD32',
        info: '#D8BFD8',
        dark: '#1E1E1E',
        mute: '#989898',
      }
    },
    textShadow: { // defaults to {}
      'default': '0 2px 5px rgba(0, 0, 0, 0.5)',
      'lg': '0 2px 10px rgba(0, 0, 0, 0.5)',
    },
    safelist: [
      {
        pattern: /(max|min)-(w)-(sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)/,
        variants: ["sm", "md", "lg", "xl"],
      },
      {
        pattern: /(grid-cols)-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      },
      {
        pattern: /(col-span)-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      },
      {
        pattern: /(bg|border)-(primary|dark|lightPink|mystyRose|line|error|success|info|mute)/,
      },
    ],
    fontFamily: {
      sans: ["Roboto Slab", ...defaultTheme.fontFamily.sans],
      cursive: ["Ruthie"],
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '960px',
        '2xl': '1140px',
      },
    },
  },
  plugins: [
    require('tailwindcss-typography')({
      // all these options default to the values specified here
      ellipsis: true,         // whether to generate ellipsis utilities
      hyphens: true,          // whether to generate hyphenation utilities
      kerning: true,          // whether to generate kerning utilities
      textUnset: true,        // whether to generate utilities to unset text properties
      componentPrefix: 'c-',  // the prefix to use for text style classes
    }),
  ],
}
