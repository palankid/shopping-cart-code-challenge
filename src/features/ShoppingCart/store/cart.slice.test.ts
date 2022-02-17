import { ProductsSlice } from "features/ProductList/store/products.types";
import reducer, { updateItemQuantity, deleteItem } from "./cart.slice";
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

describe("Cart Slice Actions and Reducer", () => {
  describe("updateItemQuantity", () => {
    test("should handle an update to the second item's quantity", () => {
      const action = updateItemQuantity({ id: "105", value: 2 });
      const result = reducer(cartSlice, action);
      const expected = {
        cart: [
          {
            id: "100",
            quantity: 1,
          },
          {
            id: "105",
            quantity: 2,
          },
        ],
        discount: 10,
      };

      expect(result).toEqual(expected);
    });
  });

  describe("updateItemQuantity", () => {
    test("should delete the second item", () => {
      const action = deleteItem("105");
      const result = reducer(cartSlice, action);
      const expected = {
        cart: [
          {
            id: "100",
            quantity: 1,
          },
        ],
        discount: 10,
      };

      expect(result).toEqual(expected);
    });
  });
});
