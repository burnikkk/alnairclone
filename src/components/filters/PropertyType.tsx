'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React from 'react';
import { useFilters } from '@/hooks/useFilters';
import { propertyTypes } from '@/utils/propertyTypes';

export const PropertyType = () => {
  const { filters, setAll } = useFilters();

  const handleChange = (value: string) => {
    if (value === 'all') {
      setAll({ propertyType: '' });
    } else {
      setAll({ propertyType: value });
    }
  };

  return (
    <Select value={filters.propertyType} onValueChange={handleChange}>
      <SelectTrigger
        className={`rounded-full bg-[#f3f3f5] !text-[#1F1F1F] border-none`}
      >
        <SelectValue placeholder="Тип жилья" />
      </SelectTrigger>
      <SelectContent className="max-h-60 w-55">
        <SelectItem value="all">Тип жилья</SelectItem>
        {Object.entries(propertyTypes).map(([key, label]) => (
          <SelectItem key={key} value={key}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
