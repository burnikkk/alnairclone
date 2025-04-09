import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

export const RegistrationButton = () => {
  const t = useTranslations('RegistrationButton');

  return (
    <Link href={`/login`}>
      <Button className="h-10 rounded-xl bg-violet text-white hover:bg-violet-light">
        {t('registration')}
      </Button>
    </Link>
  );
};
