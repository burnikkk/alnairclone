import { formatCurrency } from '@/utils/currency';
import { convertPrice } from '@/utils/convertPrice';
import React from 'react';
import { useSettings } from '@/hooks/useSettings';
import { useCurrencyRates } from '@/hooks/useCurrencyRates';
import { useTranslations } from 'next-intl';
import { useProperty } from '@/hooks/useProperty';

export const Currency = () => {
  const { property } = useProperty();
  const { selectedCurrency } = useSettings();
  const { rates: exchangeRates } = useCurrencyRates(selectedCurrency);
  const t = useTranslations('details');

  return (
    <div className="text-sm">
      <span className="flex flex-wrap gap-x-1 gap-y-1 items-center">
        {t('from')}
        <span className="font-semibold">
          {formatCurrency(
            convertPrice(
              property.units[0]?.price || 0,
              selectedCurrency,
              exchangeRates
            ),
            {
              currency: selectedCurrency,
              long: true,
            }
          )}
        </span>
        до
        <span className="font-semibold">
          {formatCurrency(
            convertPrice(
              property.units[property.units.length - 1]?.price || 0,
              selectedCurrency,
              exchangeRates
            ),
            {
              currency: selectedCurrency,
              long: true,
            }
          )}
        </span>{' '}
        {selectedCurrency}
      </span>
    </div>
  );
};
