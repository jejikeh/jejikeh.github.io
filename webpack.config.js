const path = require("path")
const MiniCssExtraPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: "./src/_bundle/main.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.pcss$/i,
                use: [
                    MiniCssExtraPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                ],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist", "assets"),
        filename: "main.bundle.js",
    },
    plugins: [
        new MiniCssExtraPlugin({
            filename: "main.bundle.css",
        }),
    ],
}
