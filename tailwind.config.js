module.exports = {
  purge: [
    // './dist/index.html',
    // './src/tailwind.css',
    // './dist/css/style.css',
    // './dist/js/script.js',
    // './dist/font-awesome/css'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'title':['Sansita', 'sans-serif'],
        'body':['Lato', 'sans-serif']
      },
      colors:{
      "pri":"#081F4D",
      "sec":"#0083FF",
      "our-bg":"#D9E6FF",
      "gen":"#3B4D71"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
