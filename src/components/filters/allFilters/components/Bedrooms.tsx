'use client';

import React from 'react';
import { useFilters } from '@/hooks/useFilters';
import { Button } from '@/components/ui/button';
import { EBedroom } from '@/types/property';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

export const Bedrooms = () => {
  const { filters, setAll } = useFilters();
  const t = useTranslations('Bedrooms');

  const handleClick = (value: string) => {
    setAll({ bedrooms: value });
  };

  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(EBedroom).map(([key, value]) => (
        <Button
          key={key}
          size="sm"
          variant="outline"
          className={cn(
            'rounded-full border-none',
            filters.bedrooms === value
              ? 'bg-violet text-white'
              : 'bg-[#f3f3f5] text-[#1F1F1F] hover:bg-violet hover:text-white'
          )}
          onClick={() => handleClick(value)}
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
