/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./backend/templates/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'h0': 'var(--text-h0)',
        'h1': 'var(--text-h1)',
        'h2': 'var(--text-h2)',
        'mobile-h1': 'var(--text-mobile-h1)',
        'mobile-h2': 'var(--text-mobile-h2)',
        'body-xxl': 'var(--text-body-xxl)',
        'body-xl': 'var(--text-body-xl)',
        'body-l': 'var(--text-body-l)',
        'body-m': 'var(--text-body-m)',
        'body-xs': 'var(--text-body-xs)',
        'body-s': 'var(--text-body-s)',
      },
      lineHeight: {
        'h1': '1.3',
        'h2': '1.04',
        'mobile-headlines': '1.44',
        'body-l': '1.44',
        'body-m': '1.32',
      },
      screens: {
        // Standard breakpoints
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        
        // Additional custom breakpoints
        'xxs': '320px',
        'xs': '475px',
        's': '525px',
        
        // Responsive ranges (if needed)
        'small-phones': { 'max': '424px' },
        'large-phones': { 'min': '425px', 'max': '767px' },
        'tablet': { 'min': '768px', 'max': '1023px' },
        'desktop': { 'min': '1024px' }
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      transitionDuration: {
        '600': '600ms',
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