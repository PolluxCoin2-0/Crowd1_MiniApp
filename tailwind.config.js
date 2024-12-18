/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#FCE079",
        orange: "#FFA500",
        green: "#539D43",
        blue: "#0066b2",
      },
      backgroundImage: {
        "yellow-gradient":"linear-gradient(to right, #FFE27A, #FFBA57, #98DB7C, #8BCAFF)",
        "orange-gradient":"linear-gradient(to right, #FCE079, #FFA500, #539D43, #8CCCF4)",
       },
      },
  },
  plugins: [],
}