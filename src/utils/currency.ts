import { Currency } from '@/types/property';

export const formatCurrency = (
  amount: number,
  options: {
    currency?: Currency;
    locale?: string;
    thousandsSeparator?: string;
    round?: boolean;
    short?: boolean;
  } = {}
) => {
  const {
    currency = 'AED',
    locale = 'en-AE',
    thousandsSeparator,
    round,
    short,
  } = options;

  const getAmount = () => {
    if (amount && round) {
      return Math.ceil(amount / 1000) * 1000;
    }
    return amount;
  };

  const shortFormatter = new Intl.NumberFormat(locale, {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 1,
    minimumFractionDigits: 0,
  });

  const fullFormatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  let formattedValue = '';
  try {
    formattedValue = (short ? shortFormatter : fullFormatter).format(
      getAmount()
    );
  } catch (e) {
    console.error('Currency formatting error:', e);
    formattedValue = getAmount().toFixed(0);
  }

  return thousandsSeparator
    ? formattedValue.replace(/,/g, thousandsSeparator)
    : formattedValue;
};
