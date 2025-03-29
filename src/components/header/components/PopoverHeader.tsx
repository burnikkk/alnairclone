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

export const PopoverHeader: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState('ru');
  const {
    selectedCurrency,
    setSelectedCurrency,
    selectedMeasure,
    setSelectedMeasure,
  } = useSettings();

  const languages: Record<string, { label: string; flagCode: string }> = {
    ar: { label: 'Arabic', flagCode: 'AE' },
    en: { label: 'English', flagCode: 'GB' },
    ru: { label: 'Russian', flagCode: 'RU' },
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
      <PopoverContent className="w-fit p-4 rounded-xl shadow-md bg-white">
        <div>
          <h4 className="text-sm font-medium mb-2">Язык</h4>
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(languages).map(([code, { label, flagCode }]) => (
              <Button
                key={code}
                variant="outline"
                className={cn(
                  'flex items-center gap-1 justify-center border rounded-lg',
                  selectedLang === code && 'border-blue-500 bg-blue-100'
                )}
                onClick={() => setSelectedLang(code)}
              >
                <Flag code={flagCode} className="w-5 h-5" /> {label}
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Валюта</h4>
          <div className="flex flex-nowrap w-full divide-x border rounded-md">
            {['AED', '$', '₽', '฿', 'OMR', '¥', 'IDR', '£', '€'].map(
              (currency) => (
                <Button
                  key={currency}
                  variant="ghost"
                  size="sm"
                  className={`rounded-none ${
                    selectedCurrency === currency ? 'bg-blue-100' : ''
                  }`}
                  onClick={() => setSelectedCurrency(currency as any)}
                >
                  {currency}
                </Button>
              )
            )}
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Единицы измерения</h4>
          <div className="grid grid-cols-2 gap-2">
            {[EMeasure.SQM, EMeasure.SQFT].map((measure) => (
              <Button
                key={measure}
                variant="ghost"
                size="sm"
                className={cn(
                  'p-2 border rounded-lg w-full',
                  selectedMeasure === measure && 'border-blue-500 bg-blue-100'
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
