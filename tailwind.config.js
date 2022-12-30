/** @type {import('tailwindcss').Config} */
module.exports = {
  purge :[
    "*.html",
    '*js'
  ], 
  content: ["*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
