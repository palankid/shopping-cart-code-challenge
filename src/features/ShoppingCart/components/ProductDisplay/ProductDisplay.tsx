import React from "react";

import Typography from "components/Typography";

import styles from "./ProductDisplay.module.css";
import ProductVariant from "../ProductVariant";
import Button from "components/Button";

interface ProductDisplayType {
  product: string;
  brand: string;
  image: string;
  color: string;
  size: number;
}

const ProductDisplay = ({
  product,
  brand,
  image,
  color,
  size,
}: ProductDisplayType) => {
  const handleChange = () => {};

  const handleDelete = () => {};

  return (
    <div className={styles["product-display"]}>
      <img
        className={styles["product-display__image"]}
        src={image}
        alt={product}
      />
      <div className={styles["product-display__attributes"]}>
        <Typography
          className={styles["product-display__brand"]}
          variant="caption"
          fontWeight="400"
        >
          {brand}
        </Typography>
        <Typography variant="body2" fontWeight="700">
          {product}
        </Typography>
        <ProductVariant color={color} size={size} />
        <div className={styles["product-display__buttons"]}>
          <Button
            variant="link"
            size="small"
            aria-label="Change product variant"
            onClick={handleChange}
          >
            Change
          </Button>
          <Button
            variant="link"
            size="small"
            aria-label="Delete product"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
