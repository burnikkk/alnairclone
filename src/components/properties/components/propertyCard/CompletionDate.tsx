import { useLocale } from 'next-intl';
import { useMemo } from 'react';

interface CompletionDateProps {
  date: string;
}

const CompletionDate: React.FC<CompletionDateProps> = ({ date }) => {
  const locale = useLocale() as 'ru' | 'en' | 'ae';

  const locales: Record<'ru' | 'en' | 'ae', string> = {
    ru: 'ru-RU',
    en: 'en-US',
    ae: 'ar-AE',
  };

  const formattedDate = useMemo(() => {
    const parsedDate = new Date(date);
    const localeFormat = locales[locale] || 'en-US';

    return new Intl.DateTimeFormat(localeFormat, {
      year: 'numeric',
      month: 'short',
    }).format(parsedDate);
  }, [date, locale]);

  return <span>{formattedDate}</span>;
};

export default CompletionDate;
