import { Button } from '@/components/ui/button';
import { Sparkle } from 'lucide-react';
import { useFilters } from '@/hooks/useFilters';
import { useTranslations } from 'next-intl';

export const ExclusiveFilterButton = () => {
  const { filters, setAll } = useFilters();
  const t = useTranslations('Exclusive');

  const toggleExclusive = () => {
    setAll({ exclusive: !filters.exclusive });
  };

  return (
    <Button
      onClick={toggleExclusive}
      className={`rounded-full transition-colors ${
        filters.exclusive
          ? 'bg-[#4f5fd9] text-white hover:bg-[#4f5fd9]/90 hover:text-white'
          : 'bg-[#f3f3f5] text-[#1f1f1f]'
      }`}
    >
      <Sparkle size={20} />
      {t('exclusive')}
    </Button>
  );
};
