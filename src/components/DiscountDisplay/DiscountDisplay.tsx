import React from "react";

import Typography from "../Typography";
import PriceDisplay from "../PriceDisplay";

import styles from "./DiscountDisplay.module.css";
import { calculateDiscountValue } from "utils/number.utils";

interface DiscountDisplayType {
  discount: number;
  price: number;
  message: string;
}

const DiscountDisplay = ({ discount, price, message }: DiscountDisplayType) => {
  return (
    <div className={styles["discount-display"]}>
      <div className={styles["discount-display__first-row"]}>
        <Typography
          className={styles["discount-display__first-row-content"]}
          variant="body2"
        >
          {discount}% discount on your order
        </Typography>
        <PriceDisplay
          className={styles["discount-display__first-row-content"]}
          price={-calculateDiscountValue(price, discount)}
          variant="body2"
        />
      </div>
      <Typography variant="body2">{message}</Typography>
    </div>
  );
};

export default DiscountDisplay;
