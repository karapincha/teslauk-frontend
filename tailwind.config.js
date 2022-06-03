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
      lg: '1200px',
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
      DEFAULT: '0px_25px_50px_-12px_rgba(95,111,140,0.1)',
      none: 'none',
    },
    dropShadow: {
      'DEFAULT': '0px_3px_12px_rgba(1,56,106,0.08)',
      '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      'icon-bg-shadow': ['0px -1px 1px #D8E1EC', '0px 1px 1px #C2D0DE'],
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
      backgroundImage: {
        'page-lock-bg':
          'linear-gradient(180deg, rgba(248, 251, 253, 0) 0%, red 40.39%, #F8FBFD 100%)',
        'icon-bg': 'linear-gradient(180deg, #ECF2F7 0%, #D8E1EC 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
    require('tailwindcss-children'),
  ],
  variants: {
    scrollbar: ['rounded'],
    flex: ['children', 'default'],
    inlineFlex: ['children', 'default'],
  },
}
