/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '16': 'repeat(auto-fill, minmax(200px, 1fr))',
        '18': 'repeat(auto-fill, minmax(300px, 1fr))',
      }
    },
  },
  plugins: [],
}