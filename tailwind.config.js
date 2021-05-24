module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Rubik: ['Rubik', 'sans-serif']
      },
      zIndex: {
        '-1': '-1'
      },
      padding: {
        paddingItem: '1rem 2rem 4rem'
      },
      gridTemplateColumns: {
        '4': 'repeat(4, minmax(5rem, 1fr))'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
