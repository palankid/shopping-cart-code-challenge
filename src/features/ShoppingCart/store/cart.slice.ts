import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartItemType, CartSlice } from "./cart.types";

const initialState: CartSlice = {
  cart: [
    {
      id: "100",
      quantity: 2,
    },
    {
      id: "105",
      quantity: 1,
    },
  ],
  discount: 15,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateItemQuantity: (
      state,
      action: PayloadAction<{ id: string; value: number }>
    ) => {
      state.cart = state.cart.map((cartItem: CartItemType) => {
        if (action.payload.id !== cartItem.id) return cartItem;

        return {
          ...cartItem,
          quantity: action.payload.value,
        };
      });
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((cartItem: CartItemType) => {
        return cartItem.id !== action.payload;
      });
    },
  },
});

export const { updateItemQuantity, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
