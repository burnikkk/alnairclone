'use client';

import React from 'react';
import { salesStatuses } from '@/utils/salesStatuses';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { useFormContext } from 'react-hook-form';
import { IFilters } from '@/types/filters';

export const SalesStatus = () => {
  const t = useTranslations('SalesStatus');

  const form = useFormContext<IFilters>();

  const selectedSalesStatuses = form.watch('saleStatus').split(',');

  const handleSelect = (value: string) => {
    const newValues = selectedSalesStatuses.includes(value)
      ? selectedSalesStatuses.filter((i) => i !== value)
      : [...selectedSalesStatuses, value];

    form.setValue('saleStatus', newValues.join(','));
  };

  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(salesStatuses).map(([key]) => (
        <Button
          key={key}
          size="sm"
          type="button"
          variant="outline"
          className={cn(
            'rounded-full border-none',
            selectedSalesStatuses.includes(key)
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
