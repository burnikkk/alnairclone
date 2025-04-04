'use client';

import React from 'react';
import { salesStatuses } from '@/utils/salesStatuses';
import { useFilters } from '@/hooks/useFilters';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

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
          variant="outline"
          className={cn(
            'rounded-full border-none',
            filters.saleStatus === key
              ? 'bg-violet text-white'
              : 'bg-[#f3f3f5] text-[#1F1F1F] hover:bg-violet hover:text-white'
          )}
          onClick={() => handleClick(key)}
        >
          {t(key)}
        </Button>
      ))}
    </div>
  );
};
