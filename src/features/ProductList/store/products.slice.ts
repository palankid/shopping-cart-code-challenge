import { createSlice } from "@reduxjs/toolkit";

import { ProductsSlice } from "./products.types";

const initialState: ProductsSlice = {
  products: [
    {
      id: "100",
      product: "Cardigan",
      brand: "Enbobo",
      image: require("../../../assets/images/enbobo-ls-cardigan-black.jpg"),
      color: "black",
      size: 36,
      quantity: 10,
      price: 420,
    },
    {
      id: "101",
      product: "Cardigan",
      brand: "Enbobo",
      image: require("../../../assets/images/enbobo-ls-cardigan-green.jpg"),
      color: "green",
      size: 36,
      quantity: 2,
      price: 420,
    },
    {
      id: "102",
      product: "Cardigan",
      brand: "Enbobo",
      image: require("../../../assets/images/enbobo-ls-cardigan-navyblue.jpg"),
      color: "navyblue",
      size: 36,
      quantity: 5,
      price: 420,
    },
    {
      id: "103",
      product: "Top",
      brand: "Encork",
      image: require("../../../assets/images/encork-ls-top.jpg"),
      color: "white",
      size: 34,
      quantity: 15,
      price: 350,
    },
    {
      id: "104",
      product: "Blazer",
      brand: "Enhorse",
      image: require("../../../assets/images/enhorse-blazer-brown.jpg"),
      color: "brown",
      size: 38,
      quantity: 10,
      price: 500,
    },
    {
      id: "105",
      product: "Blazer",
      brand: "Enhorse",
      image: require("../../../assets/images/enhorse-blazer-green.jpg"),
      color: "green",
      size: 38,
      quantity: 8,
      price: 500,
    },
  ],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
