import { createContextHook } from '@/src/hooks/createContextHook';
import { useState } from 'react';

const currencyRates = {
  AED: 1,
  $: 0.27,
  '€': 0.25,
  '฿': 0.000007,
  '₽': 0.0001,
  OMR: 0.01,
  '¥': 0.12,
  IDR: 1.12,
  '£': 0.22,
};

export const useFilters = createContextHook(() => {
  const [selectedCurrency, setSelectedCurrency] =
    useState<keyof typeof currencyRates>('AED');

  return {
    selectedCurrency,
    setSelectedCurrency,
  };
});
