import * as React from 'react';
import { SortHead } from '@/components/filters/SortHead';
import { useTranslations } from 'next-intl';
import { useProperties } from '@/hooks/useProperties';

export const PropertyHead = () => {
  const t = useTranslations('ResultsCount');
  const { found, total } = useProperties();

  return (
    <div className="w-full py-2 flex items-center justify-between">
      <div>
        <p className="text-xl font-semibold">
          {t('results_count', { found: found ?? 0, total: total ?? 0 })}
        </p>
      </div>
      <SortHead />
    </div>
  );
};
