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
        'color02' : '#8F2FAC',
        'color03' : '#F366D7',
        'color04' : '#25D366',
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