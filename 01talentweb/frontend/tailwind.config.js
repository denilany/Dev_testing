/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./backend/templates/**/*.{html,js,jsx,ts,tsx}",
  ],
    theme: {
    extend: {
      screens: {
        'small-tablets': '768px',
        // 'small-phones': '320px',
        'large-phones': {'min': '439px','max': '766px'},

        'small-phones': {'max': '425px'},
        // 'ultra-large': {'min': '1710px', 'max': '639px'}, 
        'ultra-large': {'min': '1710px'}, 
        'ultra-xl': {'min': '1932px'}, 


      },
      // ... other theme customizations
    },
  },
  plugins: [],
}