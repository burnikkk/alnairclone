'use client';
import { Button } from '@/components/ui/button';
import { Location } from '@/components/filters/Location';
import { PropertyType } from '@/components/filters/PropertyType';
import { Price } from '@/components/filters/Price';
import { Search, SlidersHorizontal } from 'lucide-react';
import { SalesStatus } from '@/components/filters/SalesStatus';
import { Bedrooms } from '@/components/filters/Bedrooms';
import { AllFilters } from '@/components/filters/allFilters';
import { ResetFilters } from '@/components/filters/ResetFilters';
import { useTranslations } from 'next-intl';
import { ExclusiveFilterButton } from '@/components/filters/Exclusive';

export const Menubar = () => {
  const t = useTranslations('Menubar');
  return (
    <menu className="p-4 flex gap-2 overflow-x-auto z-10 relative">
      <Location />
      <AllFilters>
        <Button className="rounded-full">
          <Search size={20} />
          {t('search')}
        </Button>
      </AllFilters>
      <Bedrooms />
      <Price />
      <PropertyType />
      <SalesStatus />
      <ExclusiveFilterButton />
      <AllFilters>
        <Button className="rounded-full">
          <SlidersHorizontal size={20} />
          {t('moreFilters')}
        </Button>
      </AllFilters>
      <ResetFilters />
    </menu>
  );
};
