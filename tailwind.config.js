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
        'auto-fit': 'repeat(4, minmax(8rem, 20rem))',
        'auto-fit-medium': 'repeat(2, minmax(10rem, 15rem))'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
