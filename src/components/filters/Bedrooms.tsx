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
import { EBedroom } from '@/src/types/property';

type SelectProps = {
  className?: string;
  onChange?: (value: string) => void;
};

export const Bedrooms: React.FC<SelectProps> = ({ className, onChange }) => {
  const { bedrooms, setBedrooms } = useFilters();

  const handleChange = (value: string) => {
    setBedrooms(value);
    if (onChange) {
      onChange(value);
    }
  };

  const resetFilter = () => {
    setBedrooms('all');
    if (onChange) {
      onChange('all');
    }
  };

  return (
    <Select value={bedrooms} onValueChange={handleChange}>
      <SelectTrigger
        className={`rounded-full bg-[#f3f3f5] !text-[#1f1f1f] ${className}`}
      >
        <SelectValue placeholder="Количество комнат" />
      </SelectTrigger>
      <SelectContent className="max-h-60 max-w-55">
        <SelectItem onClick={resetFilter} value="all">
          Количество комнат
        </SelectItem>
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
