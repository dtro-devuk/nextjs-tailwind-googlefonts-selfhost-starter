const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    // enabled:process.env.NODE_ENV === 'production'  /* automatically purge all files that reference styles by name in production */
    content: [
      './components/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './layouts/**/*.{js,ts,jsx,tsx}',
      './styles/**/*.{css}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Oswald Variable, Arial', fontFamily.sans],
      serif: ['Merriweather Sans, Georgia', fontFamily.serif],
    },
    extend: {
      fontFamily: {
        'Grandstander-VariableFont': ['Grandstander Variable'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
