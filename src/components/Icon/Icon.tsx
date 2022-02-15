import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faShoppingBag,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import styles from "./Icon.module.css";

interface IconProps {
  icon: IconProp;
  [x: string]: any;
}

interface ConcreteIconProps {
  [x: string]: any;
}

export const Icon = ({ icon, ...rest }: IconProps) => (
  <FontAwesomeIcon className={styles.icon} icon={icon} {...rest} />
);

export const ShoppingBagIcon = (props: ConcreteIconProps) => (
  <Icon icon={faShoppingBag} {...props} />
);

export const ShoppingCartIcon = (props: ConcreteIconProps) => (
  <Icon icon={faShoppingCart} {...props} />
);

export const BackIcon = (props: ConcreteIconProps) => (
  <Icon icon={faArrowLeft} {...props} />
);

const Icons = {
  Icon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  BackIcon,
};

export default Icons;
