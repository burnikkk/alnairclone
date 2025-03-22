'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React from 'react';
import { salesStatuses } from '@/utils/salesStatus';
import { useFilters } from '@/hooks/useFilters';

type SelectProps = {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};

export const SalesStatus: React.FC<SelectProps> = ({ className, onChange }) => {
  const { filters, setAll } = useFilters();

  const handleChange = (value: string) => {
    if (value === 'all') {
      setAll({ saleStatus: '' });
    } else {
      setAll({ saleStatus: value });
    }

    if (onChange) {
      onChange(value);
    }
  };

  const resetFilter = () => {
    setAll({ saleStatus: '' });
    if (onChange) {
      onChange('all');
    }
  };

  return (
    <Select value={filters.saleStatus} onValueChange={handleChange}>
      <SelectTrigger
        className={`rounded-full bg-[#f3f3f5] !text-[#1F1F1F] ${className}`}
      >
        <SelectValue placeholder="Статус продаж" />
      </SelectTrigger>
      <SelectContent className="max-h-60 w-55">
        <SelectItem onClick={resetFilter} value="all">
          Статус продаж
        </SelectItem>
        {Object.entries(salesStatuses).map(([key, label]) => (
          <SelectItem key={key} value={key}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
