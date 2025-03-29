'use client';

import React from 'react';
import { useFilters } from '@/hooks/useFilters';
import { Button } from '@/components/ui/button';
import { propertyTypes } from '@/utils/propertyTypes';

export const PropertyTypesButtons = () => {
  const { filters, setAll } = useFilters();

  const handleClick = (value: string) => {
    setAll({ propertyType: value });
  };

  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(propertyTypes).map(([key, label]) => (
        <Button
          key={key}
          size="sm"
          variant={filters.propertyType === key ? 'default' : 'outline'}
          className="rounded-full bg-[#f3f3f5] !text-[#1F1F1F] border-none"
          onClick={() => handleClick(key)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
