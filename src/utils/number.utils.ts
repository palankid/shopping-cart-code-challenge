export const clamp = (num: number, min: number, max: number): number => {
  return Math.min(max, Math.max(min, num));
};

export const calculateDiscountValue = (
  price: number,
  discount: number
): number => {
  const discountPercentage = clamp(discount, 0, 100);
  return (price * discountPercentage) / 100;
};
