export const quantityMessage = (quantity) => {
  if (quantity === 0) return "unavailable";
  else if (quantity <= 10) return "selling fast";
  return "available";
};
