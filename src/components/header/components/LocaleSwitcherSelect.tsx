'use client';

import { ChangeEvent, ReactNode, useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = e.target.value;

    const pathWithoutLocale = pathname.replace(/^\/(ru|en|ae)/, '');

    startTransition(() => {
      router.replace(`/${nextLocale}${pathWithoutLocale}`);
    });
  }

  return (
    <label
      className={cn(
        'relative text-gray-800',
        isPending && 'transition-opacity [&:disabled]:opacity-50'
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        className="inline-flex appearance-none pl-2 pr-6"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  );
}
