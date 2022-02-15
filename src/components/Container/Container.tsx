import classNames from "classnames";
import React from "react";

import styles from "./Container.module.css";

export enum MaxWidths {
  xxl = "xxl",
  xl = "xl",
  lg = "lg",
  md = "md",
  sm = "sm",
}

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: keyof typeof MaxWidths;
  [x: string]: any;
}

const Container = ({ children, maxWidth = "xxl", ...rest }: ContainerProps) => {
  const containerClasses = classNames(
    styles.container,
    styles[`container-${maxWidth}`]
  );

  return (
    <div className={containerClasses} {...rest}>
      {children}
    </div>
  );
};

export default Container;
