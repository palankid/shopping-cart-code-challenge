import { configureStore } from "@reduxjs/toolkit";

import products from "features/ProductList/store/products.slice";
import cart from "features/ShoppingCart/store/cart.slice";

const store = configureStore({
  reducer: {
    products,
    cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
