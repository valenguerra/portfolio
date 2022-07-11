module.exports = {
  content: ["./src/**/*.html", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        "light-6/160": "#ffffff06",
        "light-9/160": "#ffffff09",
        "light-12/160": "#ffffff12",
        "light-48/160": "#ffffff48",
        "light-96/160": "#ffffff96",
      },
    },
    fontFamily: {
      main: ["Jost", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
