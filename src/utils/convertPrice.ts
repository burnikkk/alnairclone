import { Currency, EMeasure } from '@/types/property';

const measureRates: { [key in EMeasure]: number } = {
  [EMeasure.SQM]: 1,
  [EMeasure.SQFT]: 0.10764,
};

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
