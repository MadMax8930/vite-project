/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
         primary: "#050816",
         secondary: "#f3f3f3",
         tertiary: "#5aa3d0",
       },
    },
  },
  plugins: [],
  
}

