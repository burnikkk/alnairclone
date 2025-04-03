'use client';

import React from 'react';
import { useFilters } from '@/hooks/useFilters';
import { Button } from '@/components/ui/button';
import { salesTypes } from '@/utils/salesTypes';
import { useTranslations } from 'next-intl';

export const SalesType = () => {
  const { filters, setAll } = useFilters();
  const t = useTranslations('salesTypes');

  const handleClick = (value: string) => {
    setAll({ salesType: value });
  };

  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(salesTypes).map(([key]) => (
        <Button
          key={key}
          size="sm"
          variant={filters.salesType === key ? 'default' : 'outline'}
          className="rounded-full bg-[#f3f3f5] !text-[#1F1F1F] border-none"
          onClick={() => handleClick(key)}
        >
          {t(key)}
        </Button>
      ))}
    </div>
  );
};
