'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React from 'react';
import { useFilters } from '@/app/hooks/useFilters';

type SelectProps = {
  className?: string;
  onChange?: (value: string) => void;
};

export const BtnSelectHouse: React.FC<SelectProps> = ({
  className,
  onChange,
}) => {
  const { houseType, setHouseType } = useFilters();

  const handleChange = (value: string) => {
    setHouseType(value);
    if (onChange) {
      onChange(value);
    }
  };

  const resetFilter = () => {
    setHouseType('all');
    if (onChange) {
      onChange('all');
    }
  };

  return (
    <Select value={houseType} onValueChange={handleChange}>
      <SelectTrigger
        className={`rounded-full bg-[#f3f3f5] !text-[#1F1F1F] ${className}`}
      >
        <SelectValue placeholder="Тип жилья" />
      </SelectTrigger>
      <SelectContent className="max-h-60 w-55">
        <SelectItem onClick={resetFilter} value="all">
          Тип жилья
        </SelectItem>
        <SelectItem value="Вилла">Вилла</SelectItem>
        <SelectItem value="Пентхаус">Пентхаус</SelectItem>
        <SelectItem value="Таунхаус">Таунхаус</SelectItem>
        <SelectItem value="Апартаменты">Апартаменты</SelectItem>
        <SelectItem value="Студия">Студия</SelectItem>
        <SelectItem value="Дом">Дом</SelectItem>
      </SelectContent>
    </Select>
  );
};
