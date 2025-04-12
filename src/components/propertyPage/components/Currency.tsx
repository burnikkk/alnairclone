import { formatCurrency } from '@/utils/currency';
import { convertPrice } from '@/utils/convertPrice';
import React from 'react';
import { useSettings } from '@/hooks/useSettings';
import { useCurrencyRates } from '@/hooks/useCurrencyRates';
import { useTranslations } from 'next-intl';
import { IProperty } from '@/types/property';

interface FullProps {
  property: IProperty;
}

export const Currency = ({ property }: FullProps) => {
  const { selectedCurrency } = useSettings();
  const { rates: exchangeRates } = useCurrencyRates(selectedCurrency);
  const t = useTranslations('details');

  return (
    <div className="text-sm">
      <span>
        {t('from')}&nbsp;
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
        &nbsp;до&nbsp;
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
