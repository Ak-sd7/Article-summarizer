/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // './src/components/**/*.{js, jsx}',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        satoshi : ["Satoshi", "sans-serif"],
        inter : ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}