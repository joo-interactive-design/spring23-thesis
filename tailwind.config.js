/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppings: ["Poppins", "sans-serif"],
      },
      colors: {
        main: "#1E2024",
        white: "#F9F7EE",
        black: '#100F0E',
        region: "#FFFBE1",
      },
    },
  },
  plugins: [],
};

