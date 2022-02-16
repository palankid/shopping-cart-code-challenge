import React from "react";

import Section from "components/Modal/Section";
import Typography from "components/Typography";

import styles from "./CartContents.module.css";
import Button from "components/Button";
import { BackIcon, ShoppingBagIcon } from "components/Icon";
import DiscountDisplay from "components/DiscountDisplay";
import ProductGrid from "../ProductGrid";
import CartSummary from "../CartSummary";
import ModalHeading from "components/Modal/ModalHeading";

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
      <ModalHeading title="Your shopping cart" />
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
          aria-label="Continue shopping"
          onClick={handleBackClick}
        >
          Continue shopping
        </Button>
        <Button
          aria-label="Go to checkout page"
          icon={<ShoppingBagIcon />}
          onClick={handleCheckoutClick}
        >
          Checkout
        </Button>
      </Section>
    </>
  );
};

export default CartContents;
