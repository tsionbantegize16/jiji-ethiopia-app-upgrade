// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./nuxt.config.{js,ts}",
    "./utils/**/*.{js,ts}", // Include utilities if they contain classes
  ],
  theme: {
    extend: {
      // You can define custom colors, fonts, spacing etc. here
      colors: {
        primary: '#10B981', // A green color, like Tailwind's emerald-500
        secondary: '#34D399', // A lighter green
        accent: '#FCD34D', // A yellow for highlights
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Use Inter as the default font
      },
    },
  },
  plugins: [],
}