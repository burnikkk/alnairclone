'use client';

import { useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import Flag from 'react-world-flags';

export default function LocaleSwitcherSelect({
  defaultValue,
  label,
}: {
  defaultValue: string;
  label: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const t = useTranslations('PopoverHeader');

  const flagCodes = t.raw('flagCode') as Record<string, string>;
  const locales = Object.keys(flagCodes);

  function changeLocale(nextLocale: string) {
    const pathWithoutLocale = pathname.replace(/^\/(ru|en|ae)/, '');
    startTransition(() => {
      router.replace(`/${nextLocale}${pathWithoutLocale}`);
    });
  }

  return (
    <div>
      <p className="sr-only">{label}</p>
      <div className="grid grid-cols-3 w-full border border-gray-300 rounded-md">
        {locales.map((code, index) => (
          <Button
            key={code}
            variant="ghost"
            className={cn(
              'rounded-none border flex items-center gap-2',
              index === 0 && 'rounded-l-md',
              index === locales.length - 1 && 'rounded-r-md',
              defaultValue === code
                ? 'bg-blue-100 text-blue-500 border-blue-500'
                : 'text-black'
            )}
            onClick={() => changeLocale(code)}
            disabled={isPending}
          >
            <Flag code={flagCodes[code]} className="w-5 h-5" />
            {t(code)}
          </Button>
        ))}
      </div>
    </div>
  );
}
