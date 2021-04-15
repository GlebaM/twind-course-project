module.exports = {
  purge: {
    enabled: true,
    content:["./dist/index.html",
  "./dist/js/script.js",],
  },
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
