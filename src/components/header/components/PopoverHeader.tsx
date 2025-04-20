'use client';

import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import Flag from 'react-world-flags';
import { useSettings } from '@/hooks/useSettings';
import { getMeasureLabel } from '@/utils/label';
import { useLocale, useTranslations } from 'next-intl';
import { LocaleSwitcher } from '@/components/header/components/PopoverContent/LocaleSwitcher';
import { CurrencySwitcher } from '@/components/header/components/PopoverContent/CurrencySwitcher';
import { MeasureSwitcher } from '@/components/header/components/PopoverContent/MeasureSwither';
import { cn } from '@/lib/utils';

export const PopoverHeader: React.FC = () => {
  const t = useTranslations('PopoverHeader');
  const locale = useLocale();
  const { selectedCurrency, selectedMeasure } = useSettings();
  const flagCodes = t.raw('flagCode') as Record<string, string>;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'flex items-center gap-2 px-2 py-2 h-10',
            'bg-gray-200 rounded-xl transition-colors duration-300 shadow-none',
            'hover:bg-gray-300 hover:text-black'
          )}
        >
          <Flag code={flagCodes[locale]} className="w-5 h-5" />
          <p className="font-light text-gray-400">/</p>
          <span>{selectedCurrency}</span>
          <p className="font-light text-gray-400">/</p>
          <span>{getMeasureLabel(selectedMeasure)}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-screen sm:w-[400px] p-4 rounded-xl bg-white">
        <div>
          <h4 className="text-sm font-medium pb-2">{t('language')}</h4>
          <LocaleSwitcher />
        </div>
        <div className="pt-4">
          <h4 className="text-sm font-medium pb-2">{t('currency')}</h4>
          <CurrencySwitcher />
        </div>
        <div className="pt-4">
          <h4 className="text-sm font-medium pb-2">{t('measure')}</h4>
          <MeasureSwitcher />
        </div>
      </PopoverContent>
    </Popover>
  );
};
