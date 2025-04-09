'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { EBedroom } from '@/types/property';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { useFormContext } from 'react-hook-form';
import { IFilters } from '@/types/filters';

export const Bedrooms = () => {
  const t = useTranslations('Bedrooms');

  const form = useFormContext<IFilters>();
  const selectedBedrooms = form.watch('bedrooms').split(',');

  const handleSelect = (value: string) => {
    const newValues = selectedBedrooms.includes(value)
      ? selectedBedrooms.filter((i) => i !== value)
      : [...selectedBedrooms, value];

    form.setValue('bedrooms', newValues.join(','));
  };

  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(EBedroom).map(([key, value]) => (
        <Button
          key={key}
          size="sm"
          type="button"
          variant="outline"
          className={cn(
            'rounded-full border-none',
            selectedBedrooms.includes(value)
              ? 'bg-violet text-white'
              : 'bg-[#f3f3f5] text-[#1F1F1F] hover:bg-violet hover:text-white'
          )}
          onClick={() => handleSelect(value)}
        >
          {t(
            value === 'free_planing'
              ? 'free_planing'
              : `bedroom_${value.replace('K', '')}`
          )}
        </Button>
      ))}
    </div>
  );
};
