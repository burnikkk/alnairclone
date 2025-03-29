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

export const SortHead = () => {
  const { filters, setAll } = useFilters();

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
        <SelectValue placeholder="По умолчанию" />
      </SelectTrigger>
      <SelectContent className="align-middle">
        <SelectItem value="all">По умолчанию</SelectItem>

        {Object.entries(sortStatuses).map(([key, label]) => (
          <SelectItem key={key} value={key}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
