import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcherSelect from '@/components/header/components/LocaleSwitcherSelect';
import { routing } from '@/i18n/routing';

export const LocaleSwitcher = () => {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const locales = routing.locales;

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {t('locale', { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
};
