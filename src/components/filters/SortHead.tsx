'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React from 'react';
import { sortStatuses } from '@/utils/sortStatuses';
import { useFilters } from '@/hooks/useFilters';
import { useTranslations } from 'next-intl';

export const SortHead = () => {
  const { filters, setAll } = useFilters();
  const t = useTranslations('SortStatuses');

  const handleChange = (value: string) => {
    if (value === 'all') {
      setAll({ sortOption: '' });
    } else {
      setAll({ sortOption: value });
    }
  };

  return (
    <Select value={filters.sortOption} onValueChange={handleChange}>
      <SelectTrigger className="w-[180px] border-none">
        <SelectValue placeholder={t('all')} />
      </SelectTrigger>
      <SelectContent className="align-middle">
        <SelectItem value="all">{t('all')}</SelectItem>

        {Object.entries(sortStatuses).map(([key]) => (
          <SelectItem key={key} value={key}>
            {t(key)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
