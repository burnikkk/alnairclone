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

export const SalesStatus = () => {
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
        <SelectValue placeholder="Статус продаж" />
      </SelectTrigger>
      <SelectContent className="max-h-60 w-55">
        <SelectItem value="all">Статус продаж</SelectItem>
        {Object.entries(salesStatuses).map(([key, label]) => (
          <SelectItem key={key} value={key}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
