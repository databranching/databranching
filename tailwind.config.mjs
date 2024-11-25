/** @type {import('tailwindcss').Config} */
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
          background: '#131127',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '*:not(code)': {
              color: theme('colors.brand.text'),
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
