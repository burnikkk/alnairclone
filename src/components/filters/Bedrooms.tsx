'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React from 'react';
import { EBedroom } from '@/types/property';
import { useFilters } from '@/hooks/useFilters';

export const Bedrooms = () => {
  const { filters, setAll } = useFilters();

  const handleChange = (value: string) => {
    if (value === 'all') {
      setAll({ bedrooms: '' });
    } else {
      setAll({ bedrooms: value });
    }
  };

  const getBedroomLabel = (value: string) => {
    const num = parseInt(value.replace('K', ''), 10);
    if (isNaN(num)) return '';
    if (num === 1) return 'спальня';
    if (num >= 2 && num <= 4) return 'спальни';
    return 'спален';
  };

  return (
    <Select value={filters.bedrooms} onValueChange={handleChange}>
      <SelectTrigger
        className={`rounded-full bg-[#f3f3f5] !text-[#1f1f1f] border-none`}
      >
        <SelectValue placeholder="Количество комнат" />
      </SelectTrigger>
      <SelectContent className="max-h-60 max-w-55">
        <SelectItem value="all">Количество комнат</SelectItem>
        {Object.entries(EBedroom).map(([key, value]) => (
          <SelectItem key={key} value={value}>
            {value === 'free_planing'
              ? 'Свободная планировка'
              : `${value.replace('K', '')} ${getBedroomLabel(value)}`}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
