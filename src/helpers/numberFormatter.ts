export const numberFormatter = (
  number: number | undefined,
  options: Parameters<typeof Intl.NumberFormat>[1] = {},
) => {
  if (number === undefined) {
    return null;
  }

  return Intl.NumberFormat('en-US', {
    notation: 'standard',
    maximumFractionDigits: 3,
    ...options,
  }).format(number);
};
