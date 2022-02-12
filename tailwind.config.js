const defaultTheme = require('tailwindcss/defaultTheme')
const appTypography = require('./src/config/typography')
const { palette, contrast, text } = require('./src/config/colors')

const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = px => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  mode: 'jit',
  important: false,
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './pages/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1264px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '16px',
        md: '32px',
        lg: '0',
      },
    },
    fontFamily: {
      ...appTypography.fontFamily,
    },
    fontSize: {
      ...appTypography.headings.fontSize,
      ...appTypography.body.fontSize,
    },
    fontWeight: {
      ...defaultTheme.fontWeight,
      ...appTypography.headings.fontWeight,
      ...appTypography.body.fontWeight,
    },
    boxShadow: {
      'DEFAULT':
        '0px 1.99269px 5.47989px -1.49452px rgba(1,56,106,0.05), 0px 3.4872px 15.9415px -0.996344px rgba(1,56,106,0.12)',
      'sm': '0px 2px 36px -12px rgb(1 56 106 / 9%), 0px 3px 16px -1px rgb(1 56 106 / 3%)',
      'box':
        '0px 0.498172px 0.996344px -0.498172px rgb(7 77 219 / 12%), 0px 0.996344px 0.996344px -0.498172px rgb(7 61 169 / 8%)',
      'menu-item':
        '0px 0.498172px 0.996344px -0.498172px rgba(4, 13, 31, 0.12), 0px 0.996344px 0.996344px -0.498172px rgba(4, 13, 31, 0.08)',
      'menu': '0px 12px 24px -14px rgb(1 56 106 / 12%)',
      'none': 'none',
    },
    dropShadow: {
      DEFAULT: '0px 3px 12px rgba(1, 56, 106, 0.08)',
    },
    extend: {
      colors: {
        ...palette,
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            'color': theme('colors.N.700'),

            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.N.800'),
            },

            'h1': {
              fontSize: theme('fontSize.h1'),
              marginTop: em(14, 14),
              marginBottom: em(14, 14),
            },

            'h2': {
              fontSize: theme('fontSize.h2'),
              marginTop: em(10, 14),
              marginBottom: em(10, 14),
            },

            'h3': {
              fontSize: theme('fontSize.h3'),
              marginTop: em(10, 14),
              marginBottom: em(10, 14),
            },

            'h4': {
              fontSize: theme('fontSize.h4'),
              marginTop: em(14, 14),
              marginBottom: em(14, 14),
            },

            'li': {
              marginTop: em(1, 14),
              marginBottom: em(1, 14),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded'],
  },
}
