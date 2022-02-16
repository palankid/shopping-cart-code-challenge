import React from "react";
import { formatPrice } from "../../utils/currency.utils";
import Typography from "../Typography";
import { Variants } from "../Typography/Typography.types";

interface PriceDisplayType {
  price: number;
  currency?: string;
  variant: keyof typeof Variants;
  className?: string;
  color?: string;
  fontWeight?: string;
}

const PriceDisplay = ({
  price,
  currency = "SEK",
  variant,
  className,
  color,
  fontWeight,
  ...props
}: PriceDisplayType) => {
  return (
    <Typography
      variant={variant}
      className={className}
      color={color}
      fontWeight={fontWeight}
      {...props}
    >
      {formatPrice({ price, currency })}
    </Typography>
  );
};

export default PriceDisplay;
