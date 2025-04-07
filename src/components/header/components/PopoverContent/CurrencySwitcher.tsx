import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';
import { useSettings } from '@/hooks/useSettings';
import { Currency, currencySymbols } from '@/types/property';

export const CurrencySwitcher = () => {
  const { selectedCurrency, setSelectedCurrency } = useSettings();
  const currencies: Currency[] = [
    'AED',
    'USD',
    'EUR',
    'THB',
    'RUB',
    'OMR',
    'JPY',
    'IDR',
    'GBP',
  ];

  return (
    <div className="grid grid-cols-9 w-full border border-gray-300 rounded-md">
      {currencies.map((currency, index) => (
        <Button
          key={currency}
          variant="ghost"
          size="sm"
          className={cn(
            'rounded-none border',
            index === 0 && 'rounded-l-md',
            index === currencies.length - 1 && 'rounded-r-md',
            selectedCurrency === currency
              ? 'bg-blue-100 text-blue-500 border-blue-500'
              : 'text-black'
          )}
          onClick={() => setSelectedCurrency(currency as any)}
        >
          {currencySymbols[currency]}
        </Button>
      ))}
    </div>
  );
};
