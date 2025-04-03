import * as React from 'react';
import { SortHead } from '@/components/filters/SortHead';
import { useTranslations } from 'next-intl';

export const PropertyHead = () => {
  const t = useTranslations('results_count');
  return (
    <div className="w-full pt-2 flex items-center justify-between">
      <div>
        <p className="text-xl font-semibold">
          {} из {} результатов
        </p>
      </div>
      <SortHead />
    </div>
  );
};
