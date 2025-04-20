import { useEffect, useState } from 'react';
import { Currency } from '@/types/property';

type Rates = Record<Currency, number>;

export const useCurrencyRates = (base: Currency = 'AED') => {
  const [rates, setRates] = useState<Rates>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `http://api.exchangerate.host/live?access_key=99325b1d6faea95ae270bc8089c3e5ba`
        );
        const data = await res.json();

        if (!data.success) {
          throw new Error(data.error?.info || 'Currency API error');
        }

        const quotes = data.quotes;
        const usdBase = 'USD' as Currency;
        const rates: Rates = {} as Rates;

        for (const key in quotes) {
          const currency = key.replace('USD', '') as Currency;
          if (currency !== usdBase) {
            rates[currency] =
              base === usdBase
                ? quotes[key]
                : quotes[`USD${currency}`] / quotes[`USD${base}`];
          }
        }

        rates[usdBase] = base === usdBase ? 1 : 1 / quotes[`USD${base}`];
        setRates(rates);
      } catch (e: any) {
        setError(e.message || 'Failed to fetch currency rates');
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [base]);

  return { rates, loading, error };
};
