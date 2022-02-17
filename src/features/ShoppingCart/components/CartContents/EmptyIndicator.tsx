import React from "react";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

import { Icon } from "components/Icon";
import Typography from "components/Typography";

import styles from "./EmptyIndicator.module.css";

const EmptyIndicator = () => {
  return (
    <div className={styles["empty-indicator"]}>
      <Icon
        className={styles["empty-indicator__icon"]}
        icon={faBasketShopping}
        size="6x"
      />
      <Typography variant="subheading1">Your cart is empty</Typography>
      <Typography variant="caption">Add something to make me happy!</Typography>
    </div>
  );
};

export default EmptyIndicator;
