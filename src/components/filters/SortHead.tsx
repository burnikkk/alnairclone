'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select';
import { useFilters } from '@/src/hooks/useFilters';
import React from "react";
import { sortStatuses } from "@/src/utils/sortStatus";

type SortProps = {
  value?: string;
  onChange?: (value: string) => void;
};

export const SortHead: React.FC<SortProps> = ({ onChange }) => {
  const { sortOption, setSortOption } = useFilters();

  const handleChange = (value: string) => {
    setSortOption(value);
    if (onChange) {
      onChange(value);
    }
  };

  const resetFilter = () => {
    setSortOption('all');
    if (onChange) {
      onChange('all');
    }
  };

  return (
    <Select value={sortOption} onValueChange={handleChange}>
      <SelectTrigger className="w-[180px] border-none">
        <SelectValue placeholder="По умолчанию" />
      </SelectTrigger>
      <SelectContent className="align-middle">
        <SelectItem onClick={resetFilter} value="all">По умолчанию</SelectItem>

        {Object.entries(sortStatuses).map(([key, label]) => (
          <SelectItem key={key} value={key}>
            {label}
          </SelectItem>
        ))}

      </SelectContent>
    </Select>
  );
};
