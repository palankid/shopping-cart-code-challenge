import { clamp } from "./number.utils";

describe("Number Utils", () => {
  describe("clamp", () => {
    const min = -5;
    const max = 5;

    test("number within range should not be affected", () => {
      const result = clamp(1, min, max);
      expect(result).toBe(1);
    });

    test("number below range should be adjusted", () => {
      const result = clamp(-6, min, max);
      expect(result).toBe(-5);
    });

    test("number above range should be adjusted", () => {
      const result = clamp(10, min, max);
      expect(result).toBe(5);
    });
  });
});
