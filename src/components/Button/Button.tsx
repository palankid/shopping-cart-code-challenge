import React from "react";
import "./Button.css";

interface ButtonProps {
  children?: React.ReactNode;
  disabled: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  disabled,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      className="button"
      type="button"
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
