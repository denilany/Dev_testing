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

        // 'h1-fluid': 'clamp(2rem, 5vw + 1rem, 4rem)',
        'h2-fluid': 'clamp(20px, 4vw + 12px, 48px)',

      },
      lineHeight: {
        'h1': '1.3',
        'h2': '1.04',
        'mobile-headlines': '1.44',
        'body-l': '1.44',
        'body-m': '1.32',
      },
      screens: {
        // Base breakpoints
        'xxs': '320px',
        'xs': '475px',
        'sm': '320px',
        's': '525px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '2000px',
        
        // Responsive ranges
        'small-phones': { 'max': '424px' },  // 0-424px
        'large-phones': { 'min': '425px', 'max': '767px' },  // 425px-767px
        'small-tablets': { 'min': '768px', 'max': '1023px' }, // 768px-1023px
        'mid-tablets': { 'min': '1024px', 'max': '1279px' }, // 1024px-1279px
        'large-tablets': { 'min': '1280px', 'max': '1535px' }, // 1280px-1535px
        'desktop': { 'min': '1536px' },  // 1536px and up
        
        // Additional breakpoints
        'ultra-large': { 'min': '1710px' },  // 1710px and up
        'ultra-xl': { 'min': '1932px' },     // 1932px and up
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