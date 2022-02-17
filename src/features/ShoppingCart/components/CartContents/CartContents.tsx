import React from "react";
import { useSelector } from "react-redux";

import Section from "components/Modal/Section";

import styles from "./CartContents.module.css";
import Button from "components/Button";
import { BackIcon, ShoppingBagIcon } from "components/Icon";
import DiscountDisplay from "components/DiscountDisplay";
import ProductGrid from "../ProductGrid";
import CartSummary from "../CartSummary";
import ModalHeading from "components/Modal/ModalHeading";
import {
  getCartItemCount,
  getCartTotals,
} from "features/ShoppingCart/store/cart.selectors";
import EmptyIndicator from "./EmptyIndicator";

interface CartContentsType {
  onClose: () => void;
}

const CartContents = ({ onClose }: CartContentsType) => {
  const cartTotals = useSelector(getCartTotals);
  const cartItemCount = useSelector(getCartItemCount);
  const isCartPopulated = Boolean(cartItemCount);

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
        {isCartPopulated ? (
          <>
            <ProductGrid />
            <DiscountDisplay
              className={styles["cart_contents__discount"]}
              discount={cartTotals.discount}
              value={-cartTotals.discountValue}
              message="As a first time shopper you get discount on your first order."
            />
          </>
        ) : (
          <EmptyIndicator />
        )}
      </Section>
      <Section padding="0">{isCartPopulated && <CartSummary />}</Section>
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
          disabled={!isCartPopulated}
          onClick={handleCheckoutClick}
        >
          Checkout
        </Button>
      </Section>
    </>
  );
};

export default CartContents;
