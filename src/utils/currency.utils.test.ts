import { formatPrice } from "./currency.utils";

describe("Currency Utils", () => {
  describe("formatPrice", () => {
    test("default formatting settings", () => {
      const result = formatPrice({ price: 1000 });

      expect(result).toBe("1 000 SEK");
    });

    test("customize currency", () => {
      const result = formatPrice({ price: 1000, currency: "EUR" });

      expect(result).toBe("1 000 EUR");
    });

    test("customize currency and currency placement", () => {
      const result = formatPrice({
        price: 1000,
        currency: "$",
        placement: "before",
      });

      expect(result).toBe("$1 000");
    });

    test("customize thousand separator", () => {
      const result = formatPrice({ price: 1000, thousandSeparator: "," });

      expect(result).toBe("1,000 SEK");
    });

    test("include decimal places", () => {
      const result = formatPrice({
        price: 1000.12,
        digits: 2,
      });

      expect(result).toBe("1 000.12 SEK");
    });
  });
});
