import "./main.pcss"

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    document.documentElement.classList.add("dark")
    console.log("hello world dark")
} else {
    document.documentElement.classList.remove("dark")
    console.log("hello world light")
}
