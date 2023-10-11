/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
    theme : {
      extend : {
        spacing : {
        },
        fontFamily : {
          poppins : ['Poppins'],
          silkscreen : ['Silkscreen'],
        },
        colors : {
        },
        animation: {
          'spin-slow' : 'spin 3s linear infinite '
        },
      },
    },
  plugins: [],
}

