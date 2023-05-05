/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,ts,css,scss}"],
  theme: {
    extend: {
      colors: {
        'navbarDark': 'rgba(45, 45, 45, 1)'
      }
    },
  },
  plugins: [],
}


