import { clamp, calculateDiscountValue } from "./number.utils";

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

  describe("calculateDiscountValue", () => {
    test("get the 10% discount value of the given number", () => {
      const result = calculateDiscountValue(1500, 10);
      expect(result).toBe(150);
    });

    test("Anything below 0% should be treated as 0%", () => {
      const result = calculateDiscountValue(1500, -10);
      expect(result).toBe(0);
    });

    test("anything above 100% should be treated as 100%", () => {
      const result = calculateDiscountValue(1500, 130);
      expect(result).toBe(1500);
    });
  });
});
