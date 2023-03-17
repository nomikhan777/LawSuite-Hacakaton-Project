/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2bd425',
        'secondary': '#202020',
        'tertiary': '#d9a854',
        'white': '#fffefe',
        'lightGray': '#454545',
      }
    },
  },
  plugins: [],
}