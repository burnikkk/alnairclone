import { Currency, EMeasure } from '@/types/property';

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

const measureRates: { [key in EMeasure]: number } = {
  [EMeasure.SQM]: 1,
  [EMeasure.SQFT]: 0.10764,
};

export const convertPrice = (
  priceInAED: number,
  selectedCurrency: Currency,
  measure?: EMeasure
): string => {
  const currencyRate = currencyRates[selectedCurrency] || 1;
  const measureRate = measure ? measureRates[measure] || 1 : 1;
  return ((priceInAED * currencyRate) / measureRate).toFixed(1);
};
