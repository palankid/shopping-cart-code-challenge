import React from "react";

import Typography from "../Typography";
import PriceDisplay from "../PriceDisplay";

import styles from "./DiscountDisplay.module.css";
import classNames from "classnames";

interface DiscountDisplayType {
  discount: number;
  value: number;
  message: string;
  className?: string;
}

const DiscountDisplay = ({
  discount,
  value,
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
          variant="body2"
        />
      </div>
      <Typography variant="body2">{message}</Typography>
    </div>
  );
};

export default DiscountDisplay;
