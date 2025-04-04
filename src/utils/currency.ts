type FormatCurrencyOptions = {
  currency?: string;
  locale?: string;
  thousandsSeparator?: string;
  round?: boolean;
  short?: boolean;
};

export const formatCurrency = (
  amount: number,
  options: Partial<FormatCurrencyOptions> = {}
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
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const formatter = short ? shortFormatter : fullFormatter;

  const formattedValue = formatter.format(getAmount());

  return thousandsSeparator
    ? formattedValue.replace(/,/g, thousandsSeparator)
    : formattedValue;
};
