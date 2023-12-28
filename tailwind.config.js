/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#495E57',
        'primary-yellow': "#F4CE14",
        'secondary-melon': "#EE9972",
        'secondary-beig': "#FCDABB",
        'secondary-gray': "#EDEFEE",
        'secondary-black': "#333333",
      }
    },
  },
  plugins: [],
}