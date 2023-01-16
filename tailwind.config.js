/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        "slate": "rgb(15 23 42);",
        "light-white": "rgba(255,255,255,0.17)",
      }
    },
  },
  plugins: [],
}
