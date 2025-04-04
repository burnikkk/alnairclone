import React, { FC } from 'react';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils';

type PriceListProps = {
  value: string;
  options: number[];
  suffix: string;
  onSelect: (value: string) => void;
};

export const PriceList: FC<PriceListProps> = ({
  value,
  options,
  suffix,
  onSelect,
}) => {
  return (
    <div>
      {options.slice(0, -1).map((price, index) => (
        <Button
          key={index}
          type="button"
          variant="ghost"
          className={`w-full text-left hover:text-violet ${
            value === String(price) ? 'text-violet' : ''
          }`}
          onClick={() => onSelect(String(price))}
        >
          {formatCurrency(price)} {suffix}
        </Button>
      ))}
    </div>
  );
};
