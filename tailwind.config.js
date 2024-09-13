/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        coolvetica: ['Coolvetica', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        ubuntu: ['Ubuntu', 'san-serif'],
        nocturne: ['Nocturne', 'san-serif']
      },
      screens: {
        'xs': { 'raw': '(min-width: 430px) and (max-height: 932px)'},
        'ml': { 'raw': '(min-width: 1200px) and (max-height: 768px)' },
        'ma': { 'raw': '(width: 1280px) and (height: 800px)' },
      },
      keyframes: {
        fill: {
          '0%, 100%': { fill: 'none' },
          '50%': { fill: '#5f604b' },
        },
      },
      animation: {
        fill: 'fill 3s infinite',
      },
      textShadow: {
        'outline': '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
      },
    },
  },
  plugins: [
    require('daisyui'),
    function({ addUtilities }) {
      addUtilities({
        '.text-outline': {
          textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
        },
      })
    },
  ],
}
