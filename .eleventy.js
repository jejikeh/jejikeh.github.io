const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight)
    eleventyConfig.addPassthroughCopy({"src/assets": "assets"})
    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        excerpt_separator: "<!-- excerpt -->",
    })
    eleventyConfig.setTemplateFormats(["md", "njk"])
    eleventyConfig.setBrowserSyncConfig({
        files: ["dist/**/*"],
        open: true,
    })
    eleventyConfig.setDataDeepMerge(true)
    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "includes",
            layouts: "layouts",
        },
    }
}
