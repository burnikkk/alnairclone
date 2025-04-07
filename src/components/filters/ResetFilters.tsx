import { useFilters } from '@/hooks/useFilters';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const ResetFilters = () => {
  const { filters, resetAll } = useFilters();
  const t = useTranslations('ResetFilters');

  const activeFiltersCount = Object.values(filters).filter(
    (value) => value !== null && value !== '' && value !== undefined
  ).length;

  if (activeFiltersCount <= 4) return null;

  return (
    <Button size="sm" className="rounded-full" onClick={resetAll}>
      {t('reset')}
      <X className="w-4 h-4" />
    </Button>
  );
};
