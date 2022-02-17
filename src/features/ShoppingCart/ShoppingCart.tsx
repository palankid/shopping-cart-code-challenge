import React from "react";

import Modal from "components/Modal";
import CartContents from "./components/CartContents";

interface ShoppingCartType {
  visible?: boolean;
  onClose: () => void;
}

const ShoppingCart = ({ visible = false, onClose }: ShoppingCartType) => {
  return (
    <Modal visible={visible} maxWidth="md" onClose={onClose}>
      <CartContents onClose={onClose} />
    </Modal>
  );
};

export default ShoppingCart;
