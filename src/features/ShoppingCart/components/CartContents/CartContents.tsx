import React from "react";

import Section from "components/Modal/Section";
import Typography from "components/Typography";

import styles from "./CartContents.module.css";
import Button from "components/Button";
import { BackIcon, ShoppingBagIcon } from "components/Icon";
import DiscountDisplay from "components/DiscountDisplay";
import ProductGrid from "../ProductGrid";
import CartSummary from "../CartSummary";

interface CartContentsType {
  onClose: () => void;
}

const CartContents = ({ onClose }: CartContentsType) => {
  const handleBackClick = () => {
    onClose();
  };

  const handleCheckoutClick = () => {
    onClose();
  };

  return (
    <>
      <Section>
        <Typography className={styles["cart-contents__heading"]} variant="h3">
          Your shopping cart
        </Typography>
      </Section>
      <Section>
        <ProductGrid />
        <DiscountDisplay
          className={styles["cart_contents__discount"]}
          discount={10}
          price={1500}
          message="As a first time shopper you get discount on your first order."
        />
      </Section>
      <Section padding="0">
        <CartSummary discount={10} price={1500} />
      </Section>
      <Section className={styles["cart-contents__footer"]}>
        <Button
          icon={<BackIcon />}
          variant="outlined"
          onClick={handleBackClick}
        >
          Continue shopping
        </Button>
        <Button icon={<ShoppingBagIcon />} onClick={handleCheckoutClick}>
          Checkout
        </Button>
      </Section>
    </>
  );
};

export default CartContents;
