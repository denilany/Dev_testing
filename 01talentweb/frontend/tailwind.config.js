/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./backend/templates/**/*.{html,js,jsx,ts,tsx}",
  ],
    theme: {
    extend: {
      screens: {
        '2xl': '1536px', // Default 2xl
        'small-tablets': '768px', 
      },
      // ... other theme customizations
    },
  },
  plugins: [],
}