import React from "react";

import Typography from "components/Typography";

import styles from "./ProductVariant.module.css";

interface ProductVariantType {
  size: number;
  color: string;
}

const ProductVariant = ({ color, size }: ProductVariantType) => {
  return (
    <div className={styles["product-variant"]}>
      <div
        className={styles["product-variant__color-indicator"]}
        style={{ backgroundColor: color }}
      ></div>
      <Typography className={styles["product-variant__label"]} variant="body2">
        {color}, size: {size}
      </Typography>
    </div>
  );
};

export default ProductVariant;
