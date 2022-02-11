import React from "react";

import styles from "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
  [x: string]: any;
}

const Container = ({ children, ...rest }: ContainerProps) => {
  return (
    <div className={styles.container} {...rest}>
      {children}
    </div>
  );
};

export default Container;
