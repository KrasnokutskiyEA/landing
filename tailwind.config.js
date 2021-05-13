// const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // green: colors.emerald,
      // red: colors.red,
      'custom-red': '#480909',
      'custom-yellow': '#ab965d',
      'custom-sand': '#faffd0',
      'custom-sun': '#ffb939'
    },
    fontFamily: {
      playfair: ['Playfair Display SC']
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
