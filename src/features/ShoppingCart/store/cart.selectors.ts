import { getProduct } from "features/ProductList/store/products.selectors";
import { RootState } from "store/store";
import { calculateDiscountValue } from "utils/number.utils";
import { CartItemType } from "./cart.types";

export const getCartItems = (state: RootState) => {
  return state.cart.cart.map((item: CartItemType) => {
    const product = getProduct(state, item.id);

    return {
      id: item.id,
      ...product,
      maxQuantity: product?.quantity,
      quantity: item.quantity,
      price: (product?.price || 0) * item.quantity,
    };
  });
};

export const getCartItemCount = (state: RootState) => {
  return getCartItems(state).length;
};

export const getCartTotals = (state: RootState) => {
  const subTotal = state.cart.cart.reduce((acc, item: CartItemType) => {
    const product = getProduct(state, item.id);
    acc += (product?.price || 0) * item.quantity;
    return acc;
  }, 0);

  const discountValue = calculateDiscountValue(subTotal, state.cart.discount);

  return {
    subTotal,
    discount: state.cart.discount,
    discountValue,
    total: subTotal - discountValue,
  };
};
