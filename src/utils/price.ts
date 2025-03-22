import { Currency } from '@/src/types/property';

interface CurrencyRates {
  [key: string]: number;
}

const currencyRates: CurrencyRates = {
  AED: 1,
  $: 0.27,
  '€': 0.25,
  '฿': 0.000007,
  '₽': 16.0,
  OMR: 0.01,
  '¥': 0.12,
  IDR: 1.12,
  '£': 0.22,
};

export const convertPrice = (
  priceInAED: number,
  selectedCurrency: Currency
): string => {
  const rate = currencyRates[selectedCurrency];
  return (priceInAED * rate).toFixed(1);
};
