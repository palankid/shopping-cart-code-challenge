import { RootState } from "store/store";
import { getProductList, getProduct } from "./products.selectors";
import { ProductsSlice } from "./products.types";

const item1 = {
  id: "100",
  product: "Cardigan",
  brand: "Enbobo",
  image: "enbobo-cardigan-black.jpg",
  color: "black",
  size: 36,
  quantity: 10,
  price: 420,
};

const item2 = {
  id: "104",
  product: "Blazer",
  brand: "Enhorse",
  image: "enhorse-blazer-brown.jpg",
  color: "brown",
  size: 38,
  quantity: 10,
  price: 500,
};

const productsSlice: ProductsSlice = {
  products: [item1, item2],
};

const state: RootState = {
  products: productsSlice,
  cart: {
    cart: [],
    discount: 10,
  },
};

describe("Products Slice Selectors", () => {
  describe("getCartItems", () => {
    test("query should return all items", () => {
      const result = getProductList(state);

      expect(result.length).toBe(2);
    });
  });

  describe("getProduct", () => {
    test("query should return the last item", () => {
      const result = getProduct(state, "104");

      expect(result).toEqual(item2);
    });

    test("query should return the first item", () => {
      const result = getProduct(state, "100");

      expect(result).toEqual(item1);
    });

    test("query should return null for an invalid id", () => {
      const result = getProduct(state, "invalid id");

      expect(result).toEqual(null);
    });
  });
});
