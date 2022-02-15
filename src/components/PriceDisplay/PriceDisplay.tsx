import React from "react";
import { formatPrice } from "../../utils/currency.utils";
import Typography from "../Typography";
import { Variants } from "../Typography/Typography";

interface PriceDisplayType {
  price: number;
  currency?: string;
  variant: keyof typeof Variants;
  color?: string;
  fontWeight?: string;
}

const PriceDisplay = ({
  price,
  currency = "SEK",
  variant,
  color,
  fontWeight,
  ...props
}: PriceDisplayType) => {
  return (
    <Typography
      variant={variant}
      color={color}
      fontWeight={fontWeight}
      {...props}
    >
      {formatPrice({ price, currency })}
    </Typography>
  );
};

export default PriceDisplay;
