'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React from 'react';
import { EBedroom } from '@/types/property';
import { useFilters } from '@/hooks/useFilters';

export const Bedrooms = () => {
  const { filters, setAll } = useFilters();

  const handleChange = (value: string) => {
    if (value === 'all') {
      setAll({ bedrooms: '' });
    } else {
      setAll({ bedrooms: value });
    }
  };

  return (
    <Select value={filters.bedrooms} onValueChange={handleChange}>
      <SelectTrigger
        className={`rounded-full bg-[#f3f3f5] !text-[#1f1f1f] border-none`}
      >
        <SelectValue placeholder="Количество комнат" />
      </SelectTrigger>
      <SelectContent className="max-h-60 max-w-55">
        <SelectItem value="all">Количество комнат</SelectItem>
        <SelectItem value={EBedroom.ONE}>1 спальня</SelectItem>
        <SelectItem value={EBedroom.TWO}>2 спальни</SelectItem>
        <SelectItem value={EBedroom.THREE}>3 спальни</SelectItem>
        <SelectItem value={EBedroom.FOUR}>4 спальни</SelectItem>
        <SelectItem value={EBedroom.FIVE}>5 спален</SelectItem>
        <SelectItem value={EBedroom.SIX}>6 спален</SelectItem>
        <SelectItem value={EBedroom.SEVEN}>7 спален</SelectItem>
        <SelectItem value={EBedroom.EIGHT}>8 спален</SelectItem>
        <SelectItem value={EBedroom.NINE}>9 спален</SelectItem>
        <SelectItem value={EBedroom.TEN}>10 спален</SelectItem>
        <SelectItem value={EBedroom.FREE}>Свободная планировка</SelectItem>
      </SelectContent>
    </Select>
  );
};
