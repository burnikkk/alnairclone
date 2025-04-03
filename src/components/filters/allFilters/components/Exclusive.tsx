import { useFilters } from '@/hooks/useFilters';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useTranslations } from 'next-intl';

export const ExclusiveSwitch = () => {
  const { filters, setAll } = useFilters();
  const t = useTranslations('Exclusive');

  const toggleExclusive = () => {
    setAll({ exclusive: !filters.exclusive });
  };

  return (
    <div className="flex items-center gap-2">
      <Switch
        checked={filters.exclusive}
        onCheckedChange={toggleExclusive}
        className="data-[state=checked]:bg-[#4f5fd9] data-[state=unchecked]:bg-[#f3f3f5]"
      />
      <Label
        onClick={toggleExclusive}
        className="flex items-center gap-2 cursor-pointer text-[#1f1f1f]"
      >
        {t('exclusive')}
      </Label>
    </div>
  );
};
