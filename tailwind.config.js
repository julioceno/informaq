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
        "4xl": ["2.25rem", "3.5rem"],
        "5xl": ["3rem", "5rem"],
      },
      screens: {
        xxs: "365px",
      },
      boxShadow: {
        "green-shadow": "0px 0px 64px 0px rgba(34, 197, 94, 0.30)",
      },
    },
    fontFamily: {
      poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      inter: ["Inter", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
