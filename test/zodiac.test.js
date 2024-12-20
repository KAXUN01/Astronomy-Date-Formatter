import { getZodiacSign } from "../src/zodiac.js";

describe("Zodiac Sign Calculator", () => {
    test("Correct zodiac for Sagittarius (Dec 20)", () => {
        expect(getZodiacSign(12, 20)).toBe("Sagittarius");
    });

    test("Correct zodiac for Capricorn (Jan 15)", () => {
        expect(getZodiacSign(1, 15)).toBe("Capricorn");
    });

    test("Correct zodiac for Pisces (Mar 10)", () => {
        expect(getZodiacSign(3, 10)).toBe("Pisces");
    });

    test("Correct zodiac for boundary date (Jan 19 - Capricorn)", () => {
        expect(getZodiacSign(1, 19)).toBe("Capricorn");
    });

    test("Return 'Unknown' for invalid date", () => {
        expect(getZodiacSign(13, 32)).toBe("Unknown");
    });
});
