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
        <SelectItem value="villa">Вилла</SelectItem>
        <SelectItem value="penthouse">Пентхаус</SelectItem>
        <SelectItem value="townhouse">Таунхаус</SelectItem>
        <SelectItem value="apparts">Апартаменты</SelectItem>
        <SelectItem value="studio">Студия</SelectItem>
        <SelectItem value="house">Дом</SelectItem>
      </SelectContent>
    </Select>
  );
};
