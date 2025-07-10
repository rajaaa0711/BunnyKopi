// tailwind.config.js
import lineClamp from '@tailwindcss/line-clamp';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fef9f4',
          100: '#f5ede6',
          200: '#ede0d1',
          300: '#dbc1ac',
          400: '#a47149',
          500: '#7b4b1a',
          600: '#603813',
          700: '#4b2e0e',
          800: '#3b240a',
          900: '#2d1806',
        },
        cream: '#fdf6f0',
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        pulseSlow: 'pulse 4s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        card: '0 10px 25px rgba(0, 0, 0, 0.1)',
        hover: '0 12px 35px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'coffee-hero': "url('https://i.pinimg.com/736x/23/77/69/23776963c73fa3c081e9906acb0b5b1c.jpg')",
      },
    },
  },
  plugins: [lineClamp, forms],
};
