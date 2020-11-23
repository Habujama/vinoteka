const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.ts', './src/**/*.tsx', './src/**/*.js'],
  theme: {
    extend: {
      borderRadius: {
        sm: '0.1875rem',
        lg: '0.375rem',
        xl: '0.75rem',
      },
      inset: {
        '1/4': '25%',
        '1/2': '50%',
        '4/5': '80%',
      },
    },
    colors: {
      black: '#333333',
      white: colors.white,
      transparent: colors.transparent,
      grey: {
        '0': '#fcf9f9',
        '1': '#f1f1f1',
        '2': '#d6d6d6',
        '3': '#9c9c9c',
        '4': '#666666',
        '5': '#242424',
      },
      red: {
        dark: '#660000',
      },
    },
    boxShadow: {
      md: '0 2px 24px 0 rgba(0, 0, 0, 0.1)',
      lg: '0px 6px 24px rgba(0, 0, 0, 0.2)',
      xl: '0 4px 32px 0 rgba(0, 0, 0, 0.08)',
      none: 'none',
    },
    fontFamily: {
      sans: ['Roboto'],
      lovers: ['Allura'],
    },
    scale: {
      '110': '1.1',
      '125': '1.25',
    },
    maxWidth: {
      '50': '50%',
      '60': '60%',
      '70': '70%',
      '80': '80%',
      '90': '90%',
    },
    minWidth: {
      '50': '50%',
      '60': '60%',
      '70': '70%',
      '80': '80%',
      '90': '90%',
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus'],
    borderStyle: ['responsive', 'hover', 'focus'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [require('tailwindcss-filters')],
}
