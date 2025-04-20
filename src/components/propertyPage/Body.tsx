'use client';

import { FullInfo } from '@/components/propertyPage/components/FullInfo';
import { cn } from '@/lib/utils';
import React from 'react';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { SimpleInfo } from '@/components/propertyPage/components/SimpleInfo';

export const Body = () => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 lg:grid-cols-[2fr_1fr] p-3 gap-6 sm:p-10 sm:pt-4 relative overflow-y-scroll h-[calc(100vh-60px)]'
      )}
    >
      <div className="block lg:hidden col-span-full">
        <Link href="/">
          <Button className="w-full h-10 bg-violet text-white hover:bg-violet/90 relative">
            Назад
          </Button>
        </Link>
      </div>
      <div className="flex justify-center items-start">
        <FullInfo />
      </div>
      <SimpleInfo />
    </div>
  );
};
