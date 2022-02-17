import { ProductsSlice } from "features/ProductList/store/products.types";
import { RootState } from "store/store";
import {
  getCartItems,
  getCartItemCount,
  getCartTotals,
} from "./cart.selectors";
import { CartSlice } from "./cart.types";

const product1 = {
  id: "100",
  product: "Cardigan",
  brand: "Enbobo",
  image: "enbobo-cardigan-black.jpg",
  color: "black",
  size: 36,
  quantity: 5,
  price: 420,
};

const product2 = {
  id: "104",
  product: "Blazer",
  brand: "Enhorse",
  image: "enhorse-blazer-brown.jpg",
  color: "brown",
  size: 38,
  quantity: 10,
  price: 500,
};

const product3 = {
  id: "105",
  product: "Blazer",
  brand: "Enhorse",
  image: "enhorse-blazer-green.jpg",
  color: "green",
  size: 38,
  quantity: 8,
  price: 300,
};

const productsSlice: ProductsSlice = {
  products: [product1, product2, product3],
};

const cartItem1 = {
  id: "100",
  quantity: 1,
};

const cartItem2 = {
  id: "105",
  quantity: 5,
};

const cartSlice: CartSlice = {
  cart: [cartItem1, cartItem2],
  discount: 10,
};

const state: RootState = {
  products: productsSlice,
  cart: cartSlice,
};

const emptyState: RootState = {
  cart: { cart: [], discount: 10 },
  products: { products: [] },
};

describe("Cart Slice Selectors", () => {
  describe("getCartItems", () => {
    test("query should return all cart items", () => {
      const result = getCartItems(emptyState);

      expect(result.length).toBe(0);
    });

    test("query should return all cart items", () => {
      const result = getCartItems(state);

      expect(result.length).toBe(2);
    });

    test("query should verify that a cart item's props are calculated correctly", () => {
      const result = getCartItems(state);
      const secondItem = result[1];
      const expected = {
        id: "105",
        product: "Blazer",
        brand: "Enhorse",
        image: "enhorse-blazer-green.jpg",
        color: "green",
        size: 38,
        maxQuantity: 8,
        quantity: 5,
        price: 1500,
      };

      expect(secondItem).toEqual(expected);
    });
  });

  describe("getCartItemCount", () => {
    test("query should indicate that cart is empty", () => {
      const result = getCartItemCount(emptyState);

      expect(result).toBe(0);
    });

    test("query should return the number of items in cart", () => {
      const result = getCartItemCount(state);

      expect(result).toBe(2);
    });
  });

  describe("getCartTotals", () => {
    test("query should return cart totals when cart is empty", () => {
      const result = getCartTotals(emptyState);
      const expected = {
        discount: 10,
        discountValue: 0,
        subTotal: 0,
        total: 0,
      };

      expect(result).toEqual(expected);
    });

    test("query should return cart totals when cart is populated", () => {
      const result = getCartTotals(state);
      const expected = {
        discount: 10,
        discountValue: 192,
        subTotal: 1920,
        total: 1728,
      };

      expect(result).toEqual(expected);
    });
  });
});
