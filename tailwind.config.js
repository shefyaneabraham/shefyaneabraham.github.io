/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    textShadow: {
      sm: '1px 1px 2px #704642',
      DEFAULT: '2px 2px 4px #704642',
      lg: '2px 2px 4px #704642',
      xl: '4px 4px 16px #704642',
      smS: '1px 1px 2px #d9b99b',
      lgS: '2px 2px 4px #d9b99b'
    },
    colors: {
      prime: '#FFEBDC',
      second: '#704642'
    },
    textColor: {
      tertiary: '#FFFFF0',
      secondary: '#d9b99b',
      work: '#562B00',
      ivory: 'FFFFF0'
    },
    ringColor:{
      secondary: '#704642',
    },
    backgroundImage:{
      'pack-train': "url('./src/assets/bgImage.jpg')",
    }
  },
  plugins: [plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    )
  }),
],

}


