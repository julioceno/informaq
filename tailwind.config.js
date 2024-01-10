/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-blue": "#86B6F6",
      },
      borderRadius: {
        "6xl": "3rem",
      },
      fontSize: {
        "5xl": ["3rem", "5rem"],
      },
    },
    fontFamily: {
      poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      inter: ["Inter", ...defaultTheme.fontFamily.sans], // TODO: verify alternative
    },
  },
  plugins: [],
};
