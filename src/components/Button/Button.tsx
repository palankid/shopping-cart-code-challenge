import React from "react";
import classNames from "classnames";

import styles from "./Button.module.css";

enum Variants {
  outlined = "outlined",
  contained = "contained",
}

interface ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: keyof typeof Variants;
  disabled?: boolean;
  onClick: () => void;
}

export default function Button({
  children,
  icon,
  variant = Variants.contained,
  disabled = false,
  onClick,
  ...props
}: ButtonProps) {
  const buttonClasses = classNames({
    [styles.button]: true,
    [styles[`button--${variant}`]]: !disabled,
    [styles[`button--${variant}-disabled`]]: disabled,
  });

  return (
    <button
      className={buttonClasses}
      type="button"
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      <div className={styles["button__content"]}>
        {icon}
        {children}
      </div>
    </button>
  );
}
