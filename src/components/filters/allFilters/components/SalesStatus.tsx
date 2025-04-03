'use client';

import React from 'react';
import { salesStatuses } from '@/utils/salesStatuses';
import { useFilters } from '@/hooks/useFilters';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export const SalesStatus = () => {
  const { filters, setAll } = useFilters();
  const t = useTranslations('SalesStatus');

  const handleClick = (value: string) => {
    setAll({ saleStatus: value });
  };

  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(salesStatuses).map(([key]) => (
        <Button
          key={key}
          size="sm"
          variant={filters.saleStatus === key ? 'default' : 'outline'}
          className="rounded-full bg-[#f3f3f5] !text-[#1F1F1F] border-none"
          onClick={() => handleClick(key)}
        >
          {t(key)}
        </Button>
      ))}
    </div>
  );
};
