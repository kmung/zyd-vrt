/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'blue-primary': '#0b164a',
      'blue-secondary': '#498bc2',
      'blue-tertiary': '#312f86',
      'yellow-primary': '#f2a842',
      'yellow-secondary': '#f2a842',
      'red': '#9c1b26',
      'pink-primary': '#dd7181',
      'pink-secondary': '#f7dee2',
      'white': '#ffffff',
    }
  },
  plugins: [],
}