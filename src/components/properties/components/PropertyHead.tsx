import * as React from 'react';
import { SortHead } from '@/components/filters/SortHead';
import { useTranslations } from 'next-intl';
import { useProperties } from '@/hooks/useProperties';

export const PropertyHead = () => {
  const t = useTranslations('ResultsCount');
  const { found, total } = useProperties();

  return (
    <div className="w-full py-2 flex flex-row items-center justify-between">
      <div>
        <p className="text-xl font-semibold">
          {t('results_count', { found: found ?? 0, total: total ?? 0 })}
        </p>
      </div>
      <div className="flex flex-row items-center justify-end">
        <p className="text-sm font-semibold whitespace-nowrap">{t('sort')}</p>
        <SortHead />
      </div>
    </div>
  );
};
