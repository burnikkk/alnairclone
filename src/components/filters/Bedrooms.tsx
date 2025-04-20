'use client';

import React from 'react';
import { MultiSelect } from '@/components/ui/multi-select';
import { useFilters } from '@/hooks/useFilters';
import { useTranslations } from 'next-intl';
import { EBedroom } from '@/types/property';

export const Bedrooms = () => {
  const { filters, setAll } = useFilters();
  const t = useTranslations('Bedrooms');

  const options = Object.entries(EBedroom).map(([key, value]) => ({
    value,
    label: t(
      value === 'free_planing'
        ? 'free_planing'
        : `bedroom_${value.replace('K', '')}`
    ),
  }));

  const handleChange = (values: string[]) => {
    setAll({ bedrooms: values.join(',') });
  };

  return (
    <MultiSelect
      options={options}
      onValueChange={handleChange}
      value={filters.bedrooms ? filters.bedrooms.split(',') : []}
      placeholder={t('all')}
      variant="default"
      animation={1.5}
      maxCount={1}
      className="bg-[#f3f3f5] rounded-full border-none"
    />
  );
};
