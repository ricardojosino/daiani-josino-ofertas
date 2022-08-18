/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{html,js}",
  ],

  theme: {

    container : {
      center : true
    },

    fontFamily : {
      'montserrat' : 'Montserrat'
    },

    extend: {

      screens : {
        'xl' : '1140px'
      },

      colors : {
        'color01' : '#343434',
        'color02' : '#1A1E31',
        'color03' : '#E14582',
        'color04' : '#F4F4F4',
        'color05' : '#F3F3F3',
        'color06' : '#FFFFFF',
      },

    },
  },

  plugins: [],
}