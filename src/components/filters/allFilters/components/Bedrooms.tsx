'use client';

import React from 'react';
import { useFilters } from '@/hooks/useFilters';
import { Button } from '@/components/ui/button';
import { EBedroom } from '@/types/property';

export const Bedrooms = () => {
  const { filters, setAll } = useFilters();

  const handleClick = (value: string) => {
    setAll({ bedrooms: value });
  };

  const getBedroomLabel = (value: string) => {
    const num = parseInt(value.replace('K', ''), 10);
    if (isNaN(num)) return '';
    if (num === 1) return 'спальня';
    if (num >= 2 && num <= 4) return 'спальни';
    return 'спален';
  };

  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(EBedroom).map(([key, value]) => (
        <Button
          key={key}
          size="sm"
          variant={filters.bedrooms === key ? 'default' : 'outline'}
          className="rounded-full bg-[#f3f3f5] !text-[#1F1F1F] border-none"
          onClick={() => handleClick(key)}
        >
          {value === 'free_planing'
            ? 'Свободная планировка'
            : `${value.replace('K', '')} ${getBedroomLabel(value)}`}
        </Button>
      ))}
    </div>
  );
};
