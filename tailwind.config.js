module.exports = {
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: "0rem",
        },
        extend: {
            colors: {
                white: "#F5F2F2",
                black: "#0D0C0C",
                gray: "#969696",
            },
            fontFamily: {
                lora: ["Lora", "sans-serif"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
    purge: ["./src/**/*.js", "./src/**/*.njk", "./src/**/*.svg"],
}
