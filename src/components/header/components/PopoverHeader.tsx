'use client';

import React, { useState } from 'react';
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
import { useTranslations } from 'next-intl';

export const PopoverHeader: React.FC = () => {
  const t = useTranslations('PopoverHeader');

  const [selectedLang, setSelectedLang] = useState('ru');
  const {
    selectedCurrency,
    setSelectedCurrency,
    selectedMeasure,
    setSelectedMeasure,
  } = useSettings();

  const languages: Record<string, { label: string; flagCode: string }> = {
    ar: { label: t('ar'), flagCode: 'AE' },
    en: { label: t('en'), flagCode: 'GB' },
    ru: { label: t('ru'), flagCode: 'RU' },
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 px-2 py-2 h-10 bg-gray-200 rounded-lg transition-colors duration-300 mr-4"
        >
          <Flag code={languages[selectedLang].flagCode} className="w-5 h-5" />
          <p className="font-light text-gray-400">/</p>
          <span>{selectedCurrency}</span>
          <p className="font-light text-gray-400">/</p>
          <span>{getMeasureLabel(selectedMeasure)}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-4 rounded-xl shadow-md bg-white">
        <div>
          <h4 className="text-sm font-medium pb-2">{t('language')}</h4>
          <div className="grid grid-cols-3 w-full border divide-x rounded-md">
            {Object.entries(languages).map(([code, { label, flagCode }]) => (
              <Button
                key={code}
                variant="ghost"
                className={cn(
                  'rounded-none',
                  selectedLang === code && 'bg-blue-100 text-blue-500'
                )}
                onClick={() => setSelectedLang(code)}
              >
                <Flag code={flagCode} className="w-5 h-5" /> {label}
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-medium pb-2">{t('currency')}</h4>
          <div className="grid grid-cols-9 w-full border divide-x rounded-md">
            {['AED', '$', '₽', '฿', 'OMR', '¥', 'IDR', '£', '€'].map(
              (currency, index, array) => (
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
