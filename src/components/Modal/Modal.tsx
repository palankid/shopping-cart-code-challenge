import classNames from "classnames";
import React, { SyntheticEvent, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import Container from "../Container";

import styles from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
}

const Modal = ({ children, visible = false, onClose }: ModalProps) => {
  const [modalVisible, setModalVisible] = useState(visible);

  useEffect(() => {
    visible
      ? setModalVisible(true)
      : setTimeout(() => setModalVisible(false), 300);
  }, [visible]);

  if (!modalVisible) return null;

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
    <div className={modalClasses} onClick={onClose}>
      <Container>
        <div className={contentClasses} onClick={handleContentClick}>
          {children}
        </div>
      </Container>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
