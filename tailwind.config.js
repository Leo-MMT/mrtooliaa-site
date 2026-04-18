/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./mediturno/**/*.html",
    "./ferretquote/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#e8eef5',
          100: '#c5d5e8',
          500: '#1e3a5f',
          600: '#182f4e',
          700: '#12233c',
          800: '#0d1a2d',
        },
        brand: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea6a08',
        },
        medical: {
          50:  '#e6f2ff',
          100: '#cce5ff',
          500: '#0066CC',
          600: '#0055aa',
          700: '#004488',
        },
        primary: {
          DEFAULT: '#f97316',
          dark: '#ea6c0a',
          light: '#fdba74',
        },
        'primary-dark': '#ea6c0a',
        'primary-light': '#fdba74',
        secondary: {
          DEFAULT: '#374151',
          dark: '#1f2937',
        },
        'secondary-dark': '#1f2937',
        hardware: '#78350f',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        heavy: '0 8px 32px rgba(0,0,0,0.18)',
        card:  '0 4px 16px rgba(0,0,0,0.10)',
      },
    },
  },
  plugins: [],
  safelist: [
    'wa-pulse',
    'card-hover',
    'gradient-hero',
    'gradient-cta',
    'gradient-section',
  ],
};
