'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select';
import React from 'react';
import { useFilters } from '@/src/hooks/useFilters';
import { salesStatuses } from '@/src/utils/salesStatus';

type SelectProps = {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};

export const SalesStatus: React.FC<SelectProps> = ({ className, onChange }) => {
  const { saleStatus, setSaleStatus } = useFilters();

  const handleChange = (value: string) => {
    if (value === 'all') {
      setSaleStatus('');
    } else {
      setSaleStatus(value);
    }

    if (onChange) {
      onChange(value);
    }
  };

  const resetFilter = () => {
    setSaleStatus('all');
    if (onChange) {
      onChange('all');
    }
  };
  return (
    <Select value={saleStatus} onValueChange={handleChange}>
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
