/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

module.exports = {
  mode: 'jit',
  content: {
    files: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./backend/templates/**/*.{html,js,jsx,ts,tsx}",
    ],
    extract,
  },
  theme: {
    screens: {
      'xs': '320px',    // Min mobile width
      'sm': '576px',    // Small tablets
      'md': '768px',    // Tablets
      'lg': '992px',    // Small laptops
      'xl': '1200px',   // Desktops
      '2xl': '1400px',  // Large desktops
      'max-xs': {'max': '319px'},
      'max-sm': {'max': '575px'},
      'max-md': {'max': '767px'},
      'max-lg': {'max': '991px'},
      'max-xl': {'max': '1199px'},
      'max-2xl': {'max': '1399px'},
    },
    fontSize: {
      'h0': ['var(--text-h0)', { lineHeight: 'var(--leading-h1)' }],
      'h1': ['var(--text-h1)', { lineHeight: 'var(--leading-h1)' }],
      'h2': ['var(--text-h2)', { lineHeight: 'var(--leading-h2)' }],
      'mobile-h1': ['var(--text-mobile-h1)', { lineHeight: 'var(--leading-mobile-headlines)' }],
      'mobile-h2': ['var(--text-mobile-h2)', { lineHeight: 'var(--leading-mobile-headlines)' }],
      'body-xxl': ['var(--text-body-xxl)', { lineHeight: 'var(--leading-body-l)' }],
      'body-xl': ['var(--text-body-xl)', { lineHeight: 'var(--leading-body-l)' }],
      'body-l': ['var(--text-body-l)', { lineHeight: 'var(--leading-body-l)' }],
      'body-m': ['var(--text-body-m)', { lineHeight: 'var(--leading-body-m)' }],
      'body-s': ['var(--text-body-s)', { lineHeight: 'var(--leading-normal)' }],
      'body-xs': ['var(--text-body-xs)', { lineHeight: 'var(--leading-normal)' }],
    },
    extend: {
      colors: {
        'custom-black': '#1E1E1E',
        'custom-gray': '#333333',
        primary: {
          0: 'var(--color-primary-0)',
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      lineHeight: {
        'h1': 'var(--leading-h1)',
        'h2': 'var(--leading-h2)',
        'mobile-headlines': 'var(--leading-mobile-headlines)',
        'body-l': 'var(--leading-body-l)',
        'body-m': 'var(--leading-body-m)',
      }
    }
  },
  plugins: [fluid],
}