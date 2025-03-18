import { createContext, ReactNode, useContext, useState } from 'react';

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

type CurrencyContextType = {
  selectedCurrency: keyof typeof currencyRates;
  setSelectedCurrency: (currency: keyof typeof currencyRates) => void;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCurrency, setSelectedCurrency] =
    useState<keyof typeof currencyRates>('AED');

  return (
    <CurrencyContext.Provider value={{ selectedCurrency, setSelectedCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
