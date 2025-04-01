'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React from 'react';
import { salesStatuses } from '@/utils/salesStatuses';
import { useFilters } from '@/hooks/useFilters';
import { useTranslations } from 'next-intl';

export const SalesStatus = () => {
  const t = useTranslations('SalesStatus');
  const { filters, setAll } = useFilters();

  const handleChange = (value: string) => {
    if (value === 'all') {
      setAll({ saleStatus: '' });
    } else {
      setAll({ saleStatus: value });
    }
  };

  return (
    <Select value={filters.saleStatus} onValueChange={handleChange}>
      <SelectTrigger
        className={`rounded-full bg-[#f3f3f5] !text-[#1F1F1F] border-none`}
      >
        <SelectValue placeholder={t('all')} />
      </SelectTrigger>
      <SelectContent className="max-h-60 w-full">
        <SelectItem value="all">{t('all')}</SelectItem>
        {Object.entries(salesStatuses).map(([key]) => (
          <SelectItem key={key} value={key}>
            {t(key)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
