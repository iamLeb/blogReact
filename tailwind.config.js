/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6d7de7',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        },
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}