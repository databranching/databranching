/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          text: '#d9dbdf',
          primary: '#f056c7',
          secondary: '#a4a0fb',
          tertiary: '#58e6d9',
          muted: '#605c9d',
          salmon: '#ff6090',
          green: '#57c14c',
          red: '#f43d53',
          yellow: '#ffc107',
          border: '#2d2a58',
          surface: '#16142c',
          background: '#131127',
        },
      },
      fontFamily: {
        heading: ['Orbitron', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '*:not(code)': {
              color: theme('colors.brand.text'),
              fontWeight: 400,
              a: {
                color: theme('colors.brand.salmon'),
              },
              'h1, h2, h3, h4, h5, h6': {
                fontWeight: 600,
              },
            },
            code: {
              color: theme('colors.brand.tertiary'),
              fontWeight: 100,
              wordBreak: 'break-word',
              '&::before': {
                content: '"" !important',
              },
              '&::after': {
                content: '"" !important',
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
