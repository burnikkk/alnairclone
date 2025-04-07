'use client';

import React from 'react';
import { MultiSelect } from '@/components/ui/multi-select';
import { salesStatuses } from '@/utils/salesStatuses';
import { useFilters } from '@/hooks/useFilters';
import { useTranslations } from 'next-intl';

export const SalesStatus = () => {
  const t = useTranslations('SalesStatus');
  const { filters, setAll } = useFilters();
  const options = Object.entries(salesStatuses).map(([key]) => ({
    value: key,
    label: t(key),
  }));

  const handleChange = (values: string[]) => {
    setAll({ saleStatus: values.join(',') });
  };

  return (
    <MultiSelect
      options={options}
      onValueChange={handleChange}
      value={filters.saleStatus ? filters.saleStatus.split(',') : []}
      placeholder={t('all')}
      variant="default"
      animation={1.5}
      maxCount={1}
      className="bg-[#f3f3f5] rounded-full !text-[#1F1F1F] border-none"
    />
  );
};
