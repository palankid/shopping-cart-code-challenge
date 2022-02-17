import { test, expect, Page } from "@playwright/test";

test.describe("Shopping Cart", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.click("text=View Cart", { delay: 500 });
  });

  test.describe("Cart visibility", () => {
    test("should open the modal", async ({ page }) => {
      await expect(page.locator('[role="dialog"]')).toBeVisible();
    });

    test("should close the modal", async ({ page }) => {
      await page.click("text=Continue Shopping");
      await expect(page.locator('[role="dialog"]')).not.toBeVisible();
    });
  });

  test.describe("Adjust quantities", () => {
    test("initial cart summary", async ({ page }) => {
      const subTotal = await page.textContent(
        "text='Subtotal' >> [class*='cart-summary__value']"
      );
      const discount = await page.textContent(
        "text='Discount' >> [class*='cart-summary__value']"
      );
      const total = await page.textContent(
        "text='Total' >> [class*='cart-summary__value']"
      );

      expect(subTotal).toBe("1 340 SEK");
      expect(discount).toBe("-201 SEK");
      expect(total).toBe("1 139 SEK");
    });

    test("increase second item's quantity by 2", async ({ page }) => {
      const button = await page.waitForSelector(
        "tr:last-child [aria-label='Increase Value']"
      );

      await button.click({ clickCount: 2 });

      const subTotal = await page.textContent(
        "text='Subtotal' >> [class*='cart-summary__value']"
      );
      const discount = await page.textContent(
        "text='Discount' >> [class*='cart-summary__value']"
      );
      const total = await page.textContent(
        "text='Total' >> [class*='cart-summary__value']"
      );

      expect(await page.inputValue("tr:last-child input")).toBe("3");
      expect(subTotal).toBe("2 340 SEK");
      expect(discount).toBe("-351 SEK");
      expect(total).toBe("1 989 SEK");
    });
  });

  test.describe("Delete products", () => {
    test("delete the first product", async ({ page }) => {
      const button = await page.waitForSelector(
        "tr:first-child >> text=Delete"
      );

      await button.click();

      await expect(page.locator("text=Cardigan")).not.toBeVisible();

      const checkoutEnabled = await page.isEnabled("text=Checkout");
      expect(checkoutEnabled).toBeTruthy();
    });

    test("delete all products", async ({ page }) => {
      const firstDeleteButton = await page.waitForSelector(
        "tr:first-child >> text=Delete"
      );
      const lastDeleteButton = await page.waitForSelector(
        "tr:last-child >> text=Delete"
      );

      await firstDeleteButton.click();
      await lastDeleteButton.click();

      await expect(page.locator("text=Cardigan")).not.toBeVisible();
      await expect(page.locator("text=Blazer")).not.toBeVisible();
      await expect(
        page.locator("text=Add something to make me happy!")
      ).toBeVisible();

      const checkoutEnabled = await page.isEnabled("text=Checkout");
      expect(checkoutEnabled).toBeFalsy();
    });
  });
});
