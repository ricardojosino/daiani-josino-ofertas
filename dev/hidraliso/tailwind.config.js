/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/*.{html,js}",
    "./src/index.html"
  ],

  theme: {

    extend: {

      colors : {
        'color01' : '#1A1A1A',
        'color02' : '#034D5A',
        'color03' : '#CBA340',
        'color04' : '#EDE6A4',
        'color05' : '#D8DBEE',
        'color06' : '#EEEEEE',
        'color07' : '#FFFFFF',
        'color08' : '#666666'
      },
  
      container : {
        center : true
      },
  
      fontFamily : {
        'roboto' : 'roboto'
      },

      screens : {
        'xl' : '1140px'
      },

    },
  },

  plugins: [],
}