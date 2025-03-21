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

type SelectProps = {
  className?: string;
  onChange?: (value: string) => void;
};

export const PropertyType: React.FC<SelectProps> = ({
  className,
  onChange,
}) => {
  const { propertyType, setPropertyType } = useFilters();

  const handleChange = (value: string) => {
    setPropertyType(value);
    if (onChange) {
      onChange(value);
    }
  };

  const resetFilter = () => {
    setPropertyType('all');
    if (onChange) {
      onChange('all');
    }
  };

  return (
    <Select value={propertyType} onValueChange={handleChange}>
      <SelectTrigger
        className={`rounded-full bg-[#f3f3f5] !text-[#1F1F1F] ${className}`}
      >
        <SelectValue placeholder="Тип жилья" />
      </SelectTrigger>
      <SelectContent className="max-h-60 w-55">
        <SelectItem onClick={resetFilter} value="all">
          Тип жилья
        </SelectItem>
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
