import * as React from 'react';
import { SortHead } from "@/src/components/filters/SortHead";

type PropertyHeadProps = {
  onSortChange: (value: string) => void;
};

export const PropertyHead: React.FC<PropertyHeadProps> = ({ onSortChange }) => {
  return (
    <div className="w-full pt-2 flex items-center justify-between">
      <div>
        <p className="text-xl font-semibold">100 из 100 результатов</p>
      </div>
      <SortHead onChange={onSortChange} />
    </div>
  );
};
