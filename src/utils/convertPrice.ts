import { Currency } from '@/types/property';

export const convertPrice = (
  priceInAED: number,
  selectedCurrency: Currency,
  // onlineRates: Record<Currency, number>,
  exchangeRates: Record<Currency, number> | undefined
  //  measure?: EMeasure
): number => {
  if (!exchangeRates || !exchangeRates[selectedCurrency]) return priceInAED;
  return priceInAED * exchangeRates[selectedCurrency];
};
