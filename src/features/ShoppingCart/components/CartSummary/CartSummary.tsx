import React from "react";
import { useSelector } from "react-redux";

import Typography from "components/Typography";
import { formatPrice } from "utils/currency.utils";
import { getCartTotals } from "features/ShoppingCart/store/cart.selectors";

import styles from "./CartSummary.module.css";

const CartSummary = () => {
  const cartTotals = useSelector(getCartTotals);

  return (
    <div className={styles["cart-summary"]}>
      <Typography variant="body2">
        Subtotal
        <span className={styles["cart-summary__value"]}>
          {formatPrice({ price: cartTotals.subTotal })}
        </span>
      </Typography>
      <Typography className={styles["cart-summary__discount"]} variant="body2">
        Discount
        <span className={styles["cart-summary__value"]}>
          -{formatPrice({ price: cartTotals.discountValue })}
        </span>
      </Typography>
      <Typography variant="body1" fontWeight="700">
        Total
        <span className={styles["cart-summary__value"]}>
          {formatPrice({ price: cartTotals.total })}
        </span>
      </Typography>
    </div>
  );
};

export default CartSummary;
