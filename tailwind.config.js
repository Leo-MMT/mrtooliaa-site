/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
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
          50:   '#e6f2ff',
          100:  '#cce5ff',
          500:  '#0066CC',
          600:  '#0055aa',
          700:  '#004488',
          deep:  '#003d7a',
          bright:'#0088ff',
        },
        wa: {
          400: '#00CC66',
          500: '#25d366',
          600: '#16a34a',
          dark: '#075E54',
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
        hardware: {
          DEFAULT: '#78350f',
          gray: '#1f2937',
          'gray-2': '#374151',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        heavy:  '0 8px 32px rgba(0,0,0,0.18)',
        card:   '0 4px 16px rgba(0,0,0,0.10)',
        hover:  '0 20px 40px rgba(0,0,0,0.12)',
        orange: '0 10px 30px rgba(249,115,22,0.30)',
        wa:     '0 6px 24px rgba(37,211,102,0.45)',
      },
      borderRadius: {
        pill: '9999px',
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
    'gradient-medical',
    'gradient-wa',
    'hero-texture',
    'stripe-hazard',
    'h1','h2','h3','h4','h-hero',
    'eyebrow','lead','micro',
    'accent','accent-green','accent-medical',
  ],
};
