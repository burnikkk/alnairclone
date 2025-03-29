'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const RegistrationButton = () => {
  return (
    <Link href="https://alnair.ae/app/login/email">
      <Button className=" h-10 rounded-lg bg-[#4f5fd9] text-white hover:bg-[#6e7df0]">
        Вход и регистрация
      </Button>
    </Link>
  );
};
