import { useFilters } from '@/hooks/useFilters';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export const ResetFilters = () => {
  const { resetAll } = useFilters();

  return (
    <Button size="sm" className="rounded-full" onClick={resetAll}>
      Очистить фильтры
      <X className="w-4 h-4" />
    </Button>
  );
};
