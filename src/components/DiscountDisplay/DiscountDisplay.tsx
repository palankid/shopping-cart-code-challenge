import React from "react";
import classNames from "classnames";

import Typography from "components/Typography";
import PriceDisplay from "components/PriceDisplay";

import styles from "./DiscountDisplay.module.css";

interface DiscountDisplayType {
  discount: number;
  value: number;
  currency?: string;
  message: string;
  className?: string;
}

const DiscountDisplay = ({
  discount,
  value,
  currency = "SEK",
  message,
  className,
}: DiscountDisplayType) => {
  const discountDisplayClasses = classNames(
    styles["discount-display"],
    className
  );

  return (
    <div className={discountDisplayClasses}>
      <div className={styles["discount-display__first-row"]}>
        <Typography
          className={styles["discount-display__first-row-content"]}
          variant="body2"
        >
          {discount}% discount on your order
        </Typography>
        <PriceDisplay
          className={styles["discount-display__first-row-content"]}
          price={value}
          currency={currency}
          variant="body2"
        />
      </div>
      <Typography variant="body2">{message}</Typography>
    </div>
  );
};

export default DiscountDisplay;
