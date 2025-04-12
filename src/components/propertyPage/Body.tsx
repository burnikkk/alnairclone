'use client';

import { IProperty } from '@/types/property';
import { SimpleInfo } from '@/components/propertyPage/components/SimpleInfo';
import { FullInfo } from '@/components/propertyPage/components/FullInfo';
import { cn } from '@/lib/utils';

interface BodyProps {
  property: IProperty;
}

export const Body = ({ property }: BodyProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 p-3 sm:p-10 relative overflow-y-scroll h-[calc(100vh-60px)]'
      )}
    >
      <FullInfo property={property} />
      <SimpleInfo property={property} />
    </div>
  );
};
