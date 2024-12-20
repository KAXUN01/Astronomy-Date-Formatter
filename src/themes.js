import { getZodiacSign } from "./zodiac.js";
import { phase } from "lune"; // Import the lune library

// Theme: Zodiac-based date formatting
const zodiacTheme = (date) => {
    const month = date.getMonth() + 1; // Months are zero-based
    const day = date.getDate();
    const year = date.getFullYear();
    const zodiac = getZodiacSign(month, day);
    return `${day} Sol of ${zodiac} ${year}`;
};

// Theme: Lunar phase with real calculations
const getLunarPhaseName = (phaseValue) => {
    if (phaseValue === 0) return "New Moon";
    if (phaseValue > 0 && phaseValue < 0.25) return "Waxing Crescent";
    if (phaseValue === 0.25) return "First Quarter";
    if (phaseValue > 0.25 && phaseValue < 0.5) return "Waxing Gibbous";
    if (phaseValue === 0.5) return "Full Moon";
    if (phaseValue > 0.5 && phaseValue < 0.75) return "Waning Gibbous";
    if (phaseValue === 0.75) return "Last Quarter";
    if (phaseValue > 0.75 && phaseValue < 1) return "Waning Crescent";
    return "Unknown"; // Fallback for unexpected values
};

export const lunarTheme = (date) => {
    const lunarData = phase(date); // Fetch lunar phase data
    const phaseName = getLunarPhaseName(lunarData.phase);
    return `Lunar Phase: ${phaseName}`;
};

// Additional themes can be added here
const themes = {
    zodiac: zodiacTheme,
    lunar: lunarTheme,
};

export default themes;
