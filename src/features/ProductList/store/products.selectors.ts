import { RootState } from "store/store";

export const getProductList = (state: RootState) => {
  return state.products.products;
};

export const getProduct = (state: RootState, id: string) => {
  return state.products.products.find((item) => item.id === id) || null;
};
