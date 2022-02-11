import classNames from "classnames";
import React from "react";

import styles from "./Typography.module.css";

interface TypographyProps {
  variant: string;
  children: React.ReactNode;
  className?: string;
  color?: string;
}

enum Variants {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  subheading1 = "h6",
  subheading2 = "h6",
  body1 = "p",
  body2 = "p",
}

const Typography = ({
  variant,
  children,
  className,
  color,
  ...props
}: TypographyProps) => {
  const Component = Variants[variant as keyof typeof Variants];
  const typographyClasses = classNames(
    className,
    styles[`typography--${variant}`]
  );

  return (
    <Component className={typographyClasses} style={{ color }} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
