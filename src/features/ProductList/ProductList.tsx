import React, { useState } from "react";

import Button from "components/Button";
import { ShoppingCartIcon } from "components/Icon";
import ShoppingCart from "features/ShoppingCart";

import styles from "./ProductList.module.css";

const ProductList = () => {
  const [visible, setVisible] = useState(false);

  const handleOpen = () => setVisible(true);
  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div className={styles["product-list"]}>
      <Button
        aria-label="View Cart"
        icon={<ShoppingCartIcon />}
        onClick={handleOpen}
      >
        View Cart
      </Button>

      <ShoppingCart visible={visible} onClose={handleClose} />
    </div>
  );
};

export default ProductList;
