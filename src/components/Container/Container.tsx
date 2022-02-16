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
  className?: string;
  [x: string]: any;
}

const Container = ({
  children,
  maxWidth = "xxl",
  className,
  ...rest
}: ContainerProps) => {
  const containerClasses = classNames(
    styles.container,
    styles[`container-${maxWidth}`],
    className
  );

  return (
    <div className={containerClasses} {...rest}>
      {children}
    </div>
  );
};

export default Container;
