'use client';

import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Flag from 'react-world-flags';
import { useSettings } from '@/hooks/useSettings';
import { EMeasure } from '@/types/property';
import { getMeasureLabel } from '@/utils/label';
import { useLocale, useTranslations } from 'next-intl';
import { LocaleSwitcher } from '@/components/header/components/LocaleSwitcher';

export const PopoverHeader: React.FC = () => {
  const t = useTranslations('PopoverHeader');
  const locale = useLocale();
  const {
    selectedCurrency,
    setSelectedCurrency,
    selectedMeasure,
    setSelectedMeasure,
  } = useSettings();
  const flagCodes = t.raw('flagCode') as Record<string, string>;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 px-2 py-2 h-10 bg-gray-200 rounded-lg transition-colors duration-300 mr-4"
        >
          <Flag code={flagCodes[locale]} className="w-5 h-5" />
          <p className="font-light text-gray-400">/</p>
          <span>{selectedCurrency}</span>
          <p className="font-light text-gray-400">/</p>
          <span>{getMeasureLabel(selectedMeasure)}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-4 rounded-xl shadow-md bg-white">
        <div>
          <h4 className="text-sm font-medium pb-2">{t('language')}</h4>
          <LocaleSwitcher />
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-medium pb-2">{t('currency')}</h4>
          <div className="grid grid-cols-9 w-full border divide-x rounded-md">
            {['AED', '$', '₽', '฿', 'OMR', '¥', 'IDR', '£', '€'].map(
              (currency) => (
                <Button
                  key={currency}
                  variant="ghost"
                  size="sm"
                  className={cn(
                    'rounded-none border-gray-200',
                    selectedCurrency === currency && 'bg-blue-100 text-blue-500'
                  )}
                  onClick={() => setSelectedCurrency(currency as any)}
                >
                  {currency}
                </Button>
              )
            )}
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-medium pb-2">{t('measure')}</h4>
          <div className="grid grid-cols-2 w-full border divide-x rounded-md">
            {[EMeasure.SQM, EMeasure.SQFT].map((measure) => (
              <Button
                key={measure}
                variant="ghost"
                size="sm"
                className={cn(
                  'rounded-none',
                  selectedMeasure === measure && 'bg-blue-100 text-blue-500'
                )}
                onClick={() => setSelectedMeasure(measure)}
              >
                {getMeasureLabel(measure)}
              </Button>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
