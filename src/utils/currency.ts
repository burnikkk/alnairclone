import { Currency } from '@/types/property';

export const formatCurrency = (
  amount: number,
  options: {
    currency?: Currency;
    locale?: string;
    thousandsSeparator?: string;
    round?: boolean;
    short?: boolean;
    long?: boolean;
  } = {}
) => {
  const {
    currency,
    locale = 'en-AE',
    thousandsSeparator = ' ',
    round,
    short,
    long,
  } = options;

  const getAmount = () => {
    if (amount && round) {
      return Math.ceil(amount / 1000) * 1000;
    }
    return amount;
  };

  const value = getAmount();

  let formatter: Intl.NumberFormat;

  try {
    if (short) {
      formatter = new Intl.NumberFormat(locale, {
        notation: 'compact',
        compactDisplay: 'short',
        maximumFractionDigits: 1,
        minimumFractionDigits: 0,
      });
    } else if (long) {
      formatter = new Intl.NumberFormat(locale, {
        notation: 'standard',
        compactDisplay: 'long',
        maximumFractionDigits: 1,
        minimumFractionDigits: 0,
      });
    } else {
      formatter = new Intl.NumberFormat(locale, {
        style: currency ? 'currency' : 'decimal',
        currency: currency || undefined,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    }

    let formattedValue = formatter.format(value);

    if (thousandsSeparator) {
      formattedValue = formattedValue.replace(/,/g, thousandsSeparator);
    }

    return formattedValue;
  } catch (e) {
    console.error('Currency formatting error:', e);
    return value.toFixed(0).replace(/,/g, thousandsSeparator);
  }
};
