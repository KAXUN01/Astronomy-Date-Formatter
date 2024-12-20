import themes from "./themes.js";

// Function to format a date with a specified theme
const formatWithTheme = (date, theme = "zodiac") => {
    if (!themes[theme]) {
        throw new Error(`Invalid theme: ${theme}. Available themes are: ${Object.keys(themes).join(", ")}`);
    }
    return themes[theme](date);
};

// Export the API
export { formatWithTheme };
