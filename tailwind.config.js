/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    
  },
  plugins: [
    require('tailwindcss-no-scrollbar'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-sort-media-queries'),
   
  ],
}