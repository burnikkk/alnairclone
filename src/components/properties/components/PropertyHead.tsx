import * as React from 'react';
import { SortHead } from '@/components/filters/SortHead';

export const PropertyHead = () => {
  return (
    <div className="w-full pt-2 flex items-center justify-between">
      <div>
        <p className="text-xl font-semibold">100 из 100 результатов</p>
      </div>
      <SortHead />
    </div>
  );
};
