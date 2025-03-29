import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Ref, RefCallback, RefObject } from 'react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const mergeRefs = <T>(
  ...refs: (Ref<T> | undefined)[]
): RefCallback<T> => {
  return (value: T | null) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === 'function') {
        ref(value);
      } else if ('current' in ref) {
        (ref as RefObject<T | null>).current = value;
      }
    });
  };
};

type FormatCurrencyOptions = {
  currency?: string;
  locale?: string;
  thousandsSeparator?: string;
  short?: boolean;
};

export const formatCurrency = (
  amount: number | string,
  options: Partial<FormatCurrencyOptions> = {}
) => {
  const {
    currency = 'AED',
    locale = 'en-AE',
    thousandsSeparator,
    short,
  } = options;
  const amountNumber = Number(amount);
  if (isNaN(amountNumber)) return '';

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

  const formattedValue = formatter.format(amountNumber);

  return thousandsSeparator
    ? formattedValue.replace(/,/g, thousandsSeparator)
    : formattedValue;
};
