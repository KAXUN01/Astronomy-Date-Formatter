import { formatWithTheme } from "../src/index.js";
import themes from "../src/themes.js";

// Mock Date
const mockDate = new Date(2024, 11, 20); // December 20, 2024

describe("Astronomy Date Formatter", () => {
    test("Format date with zodiac theme", () => {
        const result = formatWithTheme(mockDate, "zodiac");
        expect(result).toBe("20 Sol of Sagittarius 2024");
    });

    test("Format date with lunar theme", () => {
        const result = formatWithTheme(mockDate, "lunar");
        expect(result).toMatch(/Lunar Phase: (New Moon|Waxing Crescent|First Quarter|Waxing Gibbous|Full Moon|Waning Gibbous|Last Quarter|Waning Crescent)/);
    });

    test("Invalid theme should throw error", () => {
        expect(() => formatWithTheme(mockDate, "invalidTheme")).toThrow(
            /Invalid theme: invalidTheme/
        );
    });
});
