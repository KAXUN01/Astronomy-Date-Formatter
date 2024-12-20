import { formatWithTheme } from "./src/index.js";

const date = new Date(2024, 11, 20); // November 20, 2024
console.log(formatWithTheme(date, "zodiac")); // Output: 20 Sol of Sagittarius 2024
console.log(formatWithTheme(date, "lunar"));  // Output: Lunar Phase: Waning Gibbous
