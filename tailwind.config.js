const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.html", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: "#042d47",
        accent: "#3dd1b8",
      },
    },
    fontFamily: {
      main: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
