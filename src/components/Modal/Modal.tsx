import React, { SyntheticEvent, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

import { MaxWidths } from "components/Container/Container";
import Container from "../Container";

import styles from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  visible: boolean;
  disableClickOutside?: boolean;
  maxWidth: keyof typeof MaxWidths;
  onClose: () => void;
}

const Modal = ({
  children,
  visible = false,
  disableClickOutside = true,
  maxWidth = MaxWidths.xxl,
  onClose,
}: ModalProps) => {
  const [modalVisible, setModalVisible] = useState(visible);

  useEffect(() => {
    visible
      ? setModalVisible(true)
      : setTimeout(() => setModalVisible(false), 300);
  }, [visible]);

  if (!modalVisible) return null;

  const handleClose = () => {
    !disableClickOutside && onClose();
  };

  const handleContentClick = (event: SyntheticEvent) => {
    event.stopPropagation();
  };

  const modalClasses = classNames({
    [styles.modal]: true,
    [styles["modal--open"]]: visible,
    [styles["modal--close"]]: !visible,
  });

  const contentClasses = classNames({
    [styles["modal__content"]]: true,
    [styles["modal__content--open"]]: visible,
    [styles["modal__content--close"]]: !visible,
  });

  return ReactDOM.createPortal(
    <div className={modalClasses} onClick={handleClose}>
      <Container
        className={styles["modal__content-container"]}
        maxWidth={maxWidth}
      >
        <div className={contentClasses} onClick={handleContentClick}>
          {children}
        </div>
      </Container>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
