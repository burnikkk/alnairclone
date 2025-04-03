import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcherSelect from '@/components/header/components/LocaleSwitcherSelect';

export const LocaleSwitcher = () => {
  const t = useTranslations('PopoverHeader');
  const locale = useLocale();

  return <LocaleSwitcherSelect defaultValue={locale} label={t('ae')} />;
};
