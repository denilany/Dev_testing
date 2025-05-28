/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./backend/templates/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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
        'body-s': 'var(--text-body-s)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      transitionDuration: {
        '600': '600ms',
      },
    },
  },
  plugins: [],
}