/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      yellow: "#f5bf23",
      black: "#111",
      white: "#fff",
      "light-color": "#666",
      "light-bg": "#eee",
    },
    fontFamily: {
      "font-global": ["Poppins, sans-serif"],
    },
    extend: {
      borderColor: {
        border: "1rem solid rgba(0, 0, 0, .3)",
      },
      boxShadow: {
        shadowG: "0 .5rem 1 rem rgba(0, 0, 0, .1)",
        "box-pricing": "0 .5rem 1rem rgba(0,0,0,.1)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
