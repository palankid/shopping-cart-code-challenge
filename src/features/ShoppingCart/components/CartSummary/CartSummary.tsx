import Typography from "components/Typography";
import React from "react";
import { formatPrice } from "utils/currency.utils";
import { calculateDiscountValue } from "utils/number.utils";

import styles from "./CartSummary.module.css";

interface CartSummaryType {
  discount: number;
  price: number;
}

const CartSummary = ({ discount, price }: CartSummaryType) => {
  const discountValue = calculateDiscountValue(price, discount);
  const total = price - discountValue;

  return (
    <div className={styles["cart-summary"]}>
      <Typography variant="body2">
        Subtotal
        <span className={styles["cart-summary__value"]}>
          {formatPrice({ price })}
        </span>
      </Typography>
      <Typography className={styles["cart-summary__discount"]} variant="body2">
        Discount
        <span className={styles["cart-summary__value"]}>
          -{formatPrice({ price: discountValue })}
        </span>
      </Typography>
      <Typography variant="h5" fontWeight="700">
        Total
        <span className={styles["cart-summary__value"]}>
          {formatPrice({ price: total })}
        </span>
      </Typography>
    </div>
  );
};

export default CartSummary;
