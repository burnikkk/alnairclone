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

export const SelectRoom: React.FC<SelectProps> = ({ className, onChange }) => {
  const { roomType, setRoomType } = useFilters();

  const handleChange = (value: string) => {
    setRoomType(value);
    if (onChange) {
      onChange(value);
    }
  };

  const resetFilter = () => {
    setRoomType('all');
    if (onChange) {
      onChange('all');
    }
  };

  return (
    <Select value={roomType} onValueChange={handleChange}>
      <SelectTrigger
        className={`rounded-full bg-[#f3f3f5] !text-[#1f1f1f] ${className}`}
      >
        <SelectValue placeholder="Количество комнат" />
      </SelectTrigger>
      <SelectContent className="max-h-60 max-w-55">
        <SelectItem onClick={resetFilter} value="all">
          Количество комнат
        </SelectItem>
        <SelectItem value="1K">1 спальня</SelectItem>
        <SelectItem value="2K">2 спальни</SelectItem>
        <SelectItem value="3K">3 спальни</SelectItem>
        <SelectItem value="4K">4 спальни</SelectItem>
        <SelectItem value="5K">5 спален</SelectItem>
        <SelectItem value="6K">6 спален</SelectItem>
        <SelectItem value="7K">7 спален</SelectItem>
        <SelectItem value="8K">8 спален</SelectItem>
        <SelectItem value="9K">9 спален</SelectItem>
        <SelectItem value="10K">10 спален</SelectItem>
        <SelectItem value="free_planing">Свободная планировка</SelectItem>
      </SelectContent>
    </Select>
  );
};
