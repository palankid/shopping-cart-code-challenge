import React from "react";
import classNames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faShoppingBag,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import styles from "./Icon.module.css";

interface IconProps {
  icon: IconProp;
  className?: string;
  [x: string]: any;
}

interface ConcreteIconProps {
  className?: string;
  [x: string]: any;
}

export const Icon = ({ icon, className, ...rest }: IconProps) => (
  <FontAwesomeIcon
    className={classNames(styles.icon, className)}
    icon={icon}
    {...rest}
  />
);

export const ShoppingBagIcon = (props: ConcreteIconProps) => (
  <Icon icon={faShoppingBag} {...props} />
);

export const ShoppingCartIcon = (props: ConcreteIconProps) => (
  <Icon icon={faShoppingCart} {...props} />
);

export const BackIcon = (props: ConcreteIconProps) => (
  <Icon icon={faAngleLeft} {...props} />
);

const Icons = {
  Icon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  BackIcon,
};

export default Icons;
