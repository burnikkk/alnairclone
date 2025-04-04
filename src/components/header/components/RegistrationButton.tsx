'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const RegistrationButton = () => {
  const t = useTranslations('RegistrationButton');
  return (
    <Link href="https://alnair.ae/app/login/email">
      <Button className="h-10 rounded-lg bg-violet text-white hover:bg-violet-light">
        {t('registration')}
      </Button>
    </Link>
  );
};
