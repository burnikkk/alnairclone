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
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};

export const SalesStatus: React.FC<SelectProps> = ({ className, onChange }) => {
  const { statusType, setStatusType } = useFilters();

  const handleChange = (value: string) => {
    setStatusType(value);
    if (onChange) {
      onChange(value);
    }
  };

  const resetFilter = () => {
    setStatusType('all');
    if (onChange) {
      onChange('all');
    }
  };
  return (
    <Select value={statusType} onValueChange={handleChange}>
      <SelectTrigger
        className={`rounded-full bg-[#f3f3f5] !text-[#1F1F1F] ${className}`}
      >
        <SelectValue placeholder="Статус продаж" />
      </SelectTrigger>
      <SelectContent className="max-h-60 w-55">
        <SelectItem onClick={resetFilter} value="all">
          Все
        </SelectItem>
        <SelectItem value="anons">Анонс продаж</SelectItem>
        <SelectItem value="reg">Регистрация интереса (EOI)</SelectItem>
        <SelectItem value="startsales">Старт продаж</SelectItem>
        <SelectItem value="insales">В продаже</SelectItem>
        <SelectItem value="stopped">Приостановлен</SelectItem>
      </SelectContent>
    </Select>
  );
};
