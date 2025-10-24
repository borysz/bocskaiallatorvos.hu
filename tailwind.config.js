/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#f7f4f2',
        brandSection: 'rgb(217 237 138)',
        brandButton: '#9ec210',
        brandButtonHover: '#7e9b0bff',
        brandHero: 'rgb(158 193 32 / 35%)'
      }
    },
  },
  plugins: [],
};
