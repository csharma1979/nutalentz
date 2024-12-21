/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#bc6c1c',
          light: '#d17d2d',
          dark: '#a65d18',
        },
      },
    },
  },
  plugins: [],
}