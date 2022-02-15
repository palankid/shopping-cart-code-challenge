export const formatPrice = ({
  price,
  digits = 0,
  currency = "SEK",
  placement = "after",
  thousandSeparator = " ",
}: {
  price: number;
  digits?: number;
  currency?: string;
  placement?: "before" | "after";
  thousandSeparator?: "" | " " | ",";
}): string => {
  const formattedValue = price
    .toFixed(digits)
    .replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);

  return placement === "after"
    ? `${formattedValue} ${currency}`
    : `${currency}${formattedValue}`;
};
