/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': [
          'Poppins',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ],
      }
    },
    colors: {
      'blue-primary': '#0b164a',
      'blue-secondary': '#498bc2',
      'blue-tertiary': '#312f86',
      'yellow-primary': '#f2a842',
      'yellow-secondary': '#fad187',
      'red': '#9c1b26',
      'pink-primary': '#dd7181',
      'pink-secondary': '#f7dee2',
      'white': '#ffffff',
    }
  },
  plugins: [],
}