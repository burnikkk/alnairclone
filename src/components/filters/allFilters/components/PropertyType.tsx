'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { propertyTypes } from '@/utils/propertyTypes';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { useFormContext } from 'react-hook-form';
import { IFilters } from '@/types/filters';

export const PropertyType = () => {
  const t = useTranslations('propertyTypes');

  const form = useFormContext<IFilters>();
  const selectedPropertyTypes = form.watch('propertyType').split(',');

  const handleSelect = (value: string) => {
    const newValues = selectedPropertyTypes.includes(value)
      ? selectedPropertyTypes.filter((i) => i !== value)
      : [...selectedPropertyTypes, value];

    form.setValue('propertyType', newValues.join(','));
  };

  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(propertyTypes).map(([key]) => (
        <Button
          key={key}
          size="sm"
          type="button"
          variant="outline"
          className={cn(
            'rounded-full border-none',
            selectedPropertyTypes.includes(key)
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
