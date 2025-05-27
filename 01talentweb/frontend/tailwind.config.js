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
      fontSize: {
        'h0': 'var(--text-h0)',
        'h1': 'var(--text-h1)',
        'h2': 'var(--text-h2)',
        'mobile-h1': 'var(--text-mobile-h1)',
        'mobile-h2': 'var(--text-mobile-h2)',
        'body-xl': 'var(--text-body-xl)',
        'body-l': 'var(--text-body-l)',
        'body-m': 'var(--text-body-m)',
        'body-s': 'var(--text-body-s)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
    },
  },
  plugins: [
  //    function ({ addUtilities }) {
  //   addUtilities({
  //     '.scrollbar-none': {
  //       '-ms-overflow-style': 'none',
  //       'scrollbar-width': 'none',
  //     },
  //     '.scrollbar-none::-webkit-scrollbar': {
  //       display: 'none',
  //     },
  //   });
  // },
  ],
}