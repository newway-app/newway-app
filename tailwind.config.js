module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          nw: '#219A7E'
        },
        gray: {
          nw: '#707070'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
