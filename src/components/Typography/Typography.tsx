import React from "react";
import classNames from "classnames";

import { Variants } from "./Typography.types";

import styles from "./Typography.module.css";

interface TypographyProps {
  variant: keyof typeof Variants;
  children: React.ReactNode;
  className?: string;
  color?: string;
  fontWeight?: string;
}

const Typography = ({
  variant,
  children,
  className,
  color,
  fontWeight,
  ...props
}: TypographyProps) => {
  const Component = Variants[variant as keyof typeof Variants];
  const typographyClasses = classNames(
    styles[`typography--${variant}`],
    className
  );

  return (
    <Component
      className={typographyClasses}
      style={{ color, fontWeight }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
