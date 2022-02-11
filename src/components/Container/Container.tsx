import React from "react";
import classNames from "classnames";

import styles from "./Container.module.css";

enum Directions {
  row = "row",
  column = "column",
}

interface ContainerProps {
  children: React.ReactNode;
  direction: keyof typeof Directions;
  [x: string]: any;
}

const Container = ({
  children,
  direction = Directions.row,
  ...rest
}: ContainerProps) => {
  const containerClasses = classNames({
    [styles.container]: true,
    [styles[`container--${direction}`]]: true,
  });

  return (
    <div className={containerClasses} {...rest}>
      {children}
    </div>
  );
};

export default Container;
