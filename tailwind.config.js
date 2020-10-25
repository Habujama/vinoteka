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
      backgroundImage: () => ({
        'app-layout-gradient':
          'linear-gradient(135deg, rgba(38, 125, 226, 0.08) 0.14%, rgba(208, 129, 136, 0.08) 100%)',
      }),
    },
    colors: {
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
      grey: {
        '1': '#f1f1f1',
        '2': '#d6d6d6',
        '3': '#9c9c9c',
        '4': '#666666',
        '5': '#242424',
      },
      yellow: {
        light: '#feedd1',
        base: '#faa61a',
        dark: '#af7512',
      },
      teal: {
        light: '#d7f0f2',
        base: '#37b4be',
        dark: '#277e85',
      },
      green: '#4fbf5b',
      red: '#ed1c24',
    },
    boxShadow: {
      md: '0 2px 24px 0 rgba(0, 0, 0, 0.1)',
      lg: '0px 6px 24px rgba(0, 0, 0, 0.2)',
      xl: '0 4px 32px 0 rgba(0, 0, 0, 0.08)',
      none: 'none',
    },
    fontFamily: {
      sans: ['Roboto'],
      lovers: ['Lovers Quarrel'],
    },
    filter: {
      blur: 'blur(4px)',
    },
    scale: {
      '110': '1.1',
      '125': '1.25',
    },
    maxWidth: {
      '0': '0',
      '10': '10%',
      '20': '20%',
      '30': '30%',
      '40': '40%',
    },
    minWidth: {
      '0': '0',
      '10': '10%',
      '20': '20%',
      '30': '30%',
      '40': '40%',
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus'],
    borderStyle: ['responsive', 'hover', 'focus'],
    filter: ['responsive'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [require('tailwindcss-filters')],
}
