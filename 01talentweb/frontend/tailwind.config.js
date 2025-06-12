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
      '2xl': '1500px',  // Large desktops
      'max-xs': {'max': '319px'},
      'max-sm': {'max': '575px'},
      'max-md': {'max': '767px'},
      'max-lg': {'max': '991px'},
      'max-xl': {'max': '1199px'},
      'max-2xl': {'max': '1499px'},
    },
    fontSize,
    /** @type {import('fluid-tailwind').FluidThemeConfig} */
    fluid: ({
      // Set explicit viewport range for fluid scaling
      defaultScreens: {
        'min': '320px',
        'max': '1500px'
      },
      // Disable accessibility checks if they're causing issues
      checkSC144: false,
      // Explicitly set the unit to px for more consistent behavior
      unit: 'px',
      // Force the plugin to use these exact breakpoints
      forceRange: true
    }),
    fontSize: {
      'h0': ['var(--text-h0)', { lineHeight: 'var(--leading-h1)' }],
      'h1': ['var(--text-h1)', { lineHeight: 'var(--leading-h1)' }],
      'h2': ['var(--text-h2)', { lineHeight: 'var(--leading-h2)' }],
      'h3': ['var(--text-h3)', {lineHeight: 'var(--leading-h3)'}],
      'body-xxl': ['var(--text-body-xxl)', { lineHeight: 'var(--leading-body-l)' }],
      'body-xl': ['var(--text-body-xl)', { lineHeight: 'var(--leading-body-l)' }],
      'body-l': ['var(--text-body-l)', { lineHeight: 'var(--leading-body-l)' }],
      'body-m': ['var(--text-body-m)', { lineHeight: 'var(--leading-body-m)' }],
      'body-s': ['var(--text-body-s)', { lineHeight: 'var(--leading-normal)' }],
      'body-xs': ['var(--text-body-xs)', { lineHeight: 'var(--leading-normal)' }],
      'button-s': ['var(--text-button-s)', { lineHeight: 'var(--leading-normal)' }],
      'button-l': ['var(--text-button-l)', { lineHeight: 'var(--leading-normal)' }],
      'button-cards': ['var(--text-button-cards)', { lineHeight: 'var(--leading-normal)' }],
      'button-cardm': ['var(--text-button-cardm)', { lineHeight: 'var(--leading-normal)' }],
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
        },
         screens: {
        'small-tablets': '768px',
        'mid-tablets': {'min': '768px','max': '900px'},
        
        'large-phones': {'min': '439px','max': '766px'},

        'small-phones': {'min': '320px','max': '425px'},
        'ultra-large': {'min': '1710px', 'max': '639px'}, 
        'ultra-xl': {'min': '1932px'}, 


      },


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