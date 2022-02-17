export interface CartItemType {
  id: string;
  quantity: number;
}

export interface CartSlice {
  cart: CartItemType[];
  discount: number;
}
