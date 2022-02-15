import React from "react";

import Section from "components/Modal/Section";
import Typography from "components/Typography";

import styles from "./CartContents.module.css";
import Button from "components/Button";
import { BackIcon, ShoppingBagIcon } from "components/Icon";
import DiscountDisplay from "components/DiscountDisplay";

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
        <DiscountDisplay
          discount={10}
          price={1500}
          message="As a first time shopper you get discount on your first order."
        />
      </Section>
      <Section className={styles["cart-contents__footer"]}>
        <Button icon={<BackIcon />} onClick={handleBackClick}>
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
