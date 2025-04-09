'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { salesTypes } from '@/utils/salesTypes';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { IFilters } from '@/types/filters';
import { useFormContext } from 'react-hook-form';

export const SalesType = () => {
  const t = useTranslations('salesTypes');

  const form = useFormContext<IFilters>();
  const selectedSalesType = form.watch('salesType').split(',');

  const handleSelect = (value: string) => {
    const newValues = selectedSalesType.includes(value)
      ? selectedSalesType.filter((i) => i !== value)
      : [...selectedSalesType, value];

    form.setValue('salesType', newValues.join(','));
  };

  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(salesTypes).map(([key]) => (
        <Button
          key={key}
          size="sm"
          type="button"
          variant="outline"
          className={cn(
            'rounded-full border-none',
            selectedSalesType.includes(key)
              ? 'bg-violet text-white'
              : 'bg-[#f3f3f5] text-[#1F1F1F] hover:bg-violet hover:text-white'
          )}
          onClick={() => handleSelect(key)}
        >
          {t(key)}
        </Button>
      ))}
    </div>
  );
};
