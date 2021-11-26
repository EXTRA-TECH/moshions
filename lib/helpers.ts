export function capitalize(string: any) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function lowercase(string: any) {
  return string.toLowerCase();
}

// Format price
export function formatPrice(value: any) {
  const amount = parseFloat(value);
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

export const priceToString = (
  price: { amount: number; currency: string },
  locale?: string
): string => {
  const { amount } = price;
  if (locale) {
    return amount.toLocaleString(locale, {
      currency: price.currency,
      style: "currency",
    });
  }
  return `${price.currency} ${amount.toFixed(2)}`;
};