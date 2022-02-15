import React from "react";
import classNames from "classnames";

import styles from "./Button.module.css";

export enum Variants {
  outlined = "outlined",
  contained = "contained",
  text = "text",
}

export enum Sizes {
  large = "large",
  normal = "normal",
  small = "small",
  tiny = "tiny",
}

interface ButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  variant?: keyof typeof Variants;
  size?: keyof typeof Sizes;
  disabled?: boolean;
  tabIndex?: number;
  onClick: () => void;
}

const Button = ({
  children,
  icon,
  variant = Variants.contained,
  size = Sizes.normal,
  disabled = false,
  tabIndex = -1,
  onClick,
  ...props
}: ButtonProps) => {
  const buttonClasses = classNames({
    [styles.button]: true,
    [styles[`button--${variant}`]]: !disabled,
    [styles[`button--${variant}-disabled`]]: disabled,
    [styles[`button--size-${size}`]]: true,
  });

  return (
    <button
      className={buttonClasses}
      type="button"
      disabled={disabled}
      tabIndex={tabIndex}
      onClick={onClick}
      {...props}
    >
      <div className={styles["button__content"]}>
        {icon}
        {children && <span>{children}</span>}
      </div>
    </button>
  );
};

export default Button;
