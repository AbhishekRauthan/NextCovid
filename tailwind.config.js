module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens : {
        'xs': {'max': '639px'}
      },
      fontFamily: {
        'source':['Source Sans Pro', 'sans-serif'],
        'roboto':['Roboto', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
    },
  },
  plugins: [],
}
