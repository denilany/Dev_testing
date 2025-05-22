/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./backend/templates/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'h1': 'var(--text-h1)',
        'h2': 'var(--text-h2)',
        'mobile-h1': 'var(--text-mobile-h1)',
        'mobile-h2': 'var(--text-mobile-h2)',
        'body-l': 'var(--text-body-l)',
        'body-m': 'var(--text-body-m)',
        'body-s': 'var(--text-body-s)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
    },
  },
  plugins: [],
}