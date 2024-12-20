import { phase } from "lune";
import { lunarTheme } from "../src/themes.js";

const mockDate = new Date(2024, 11, 20); // December 20, 2024

describe("Lunar Phase Calculator", () => {
    test("Fetch lunar phase data", () => {
        const lunarData = phase(mockDate);
        expect(lunarData).toHaveProperty("phase");
        expect(lunarData).toHaveProperty("illuminated");
        expect(lunarData).toHaveProperty("age");
        expect(lunarData.phase).toBeGreaterThanOrEqual(0);
        expect(lunarData.phase).toBeLessThanOrEqual(1);
    });

    test("Correct lunar phase name", () => {
        const result = lunarTheme(mockDate);
        expect(result).toMatch(/Lunar Phase: (New Moon|Waxing Crescent|First Quarter|Waxing Gibbous|Full Moon|Waning Gibbous|Last Quarter|Waning Crescent)/);
    });
});
