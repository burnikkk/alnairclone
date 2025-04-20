'use client';

import React from 'react';
import { useFilters } from '@/hooks/useFilters';
import { propertyTypes } from '@/utils/propertyTypes';
import { useTranslations } from 'next-intl';
import { MultiSelect } from '@/components/ui/multi-select';

export const PropertyType = () => {
  const t = useTranslations('propertyTypes');
  const { filters, setAll } = useFilters();
  const options = Object.entries(propertyTypes).map(([key]) => ({
    value: key,
    label: t(key),
  }));

  const handleChange = (values: string[]) => {
    setAll({ propertyType: values.join(',') });
  };

  return (
    <MultiSelect
      options={options}
      onValueChange={handleChange}
      value={filters.propertyType ? filters.propertyType.split(',') : []}
      placeholder={t('all')}
      variant="default"
      animation={1.5}
      maxCount={1}
      className="rounded-full border-none"
    />
  );
};
