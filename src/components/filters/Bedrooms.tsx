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
import { useTranslations } from 'next-intl';

export const Bedrooms = () => {
  const { filters, setAll } = useFilters();
  const t = useTranslations('Bedrooms');

  const handleChange = (value: string) => {
    if (value === 'all') {
      setAll({ bedrooms: '' });
    } else {
      setAll({ bedrooms: value });
    }
  };

  return (
    <Select value={filters.bedrooms} onValueChange={handleChange}>
      <SelectTrigger
        className={`rounded-full bg-[#f3f3f5] !text-[#1f1f1f] border-none`}
      >
        <SelectValue placeholder={t('all')} />
      </SelectTrigger>
      <SelectContent className="max-h-60 max-w-55">
        <SelectItem value="all">{t('all')}</SelectItem>
        {Object.entries(EBedroom).map(([key, value]) => (
          <SelectItem key={key} value={value}>
            {t(
              value === 'free_planing'
                ? 'free_planing'
                : `bedroom_${value.replace('K', '')}`
            )}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
