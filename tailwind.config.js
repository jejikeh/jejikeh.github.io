module.exports = {
  darkMode: "class",
  theme: {
    container: {
      center: false,
      padding: "0rem",
    },
    extend: {
      colors: {
        white: "#F5F2F2",
        black: "#000000",
        gray: "#969696",
      },
      fontFamily: {
        lora: ["Inter", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
  purge: ["./src/**/*.js", "./src/**/*.njk", "./src/**/*.svg"],
}
