import React, { SyntheticEvent } from "react";
import ReactDOM from "react-dom";

import Container from "../Container";

import styles from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
}

const Modal = ({ children, visible = false, onClose }: ModalProps) => {
  if (!visible) return null;

  const handleContentClick = (event: SyntheticEvent) => {
    event.stopPropagation();
  };

  return ReactDOM.createPortal(
    <div className={styles.modal} onClick={onClose}>
      <Container>
        <div className={styles.modalContent} onClick={handleContentClick}>
          {children}
        </div>
      </Container>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
