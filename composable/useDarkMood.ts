const darkMood = () => {
    const isDark = useState("darkMode", () => false)

    const toggleDarkMode = () => {
        isDark.value = !isDark.value
    }

    return {
        isDark,
        toggleDarkMode
    }
}

export default darkMood;