'use client';
import { Button } from '@/src/components/ui/button';
import { Location } from '@/src/components/filters/Location';
import { PropertyType } from '@/src/components/filters/PropertyType';
import { Price } from '@/src/components/filters/Price';
import { Search, SlidersHorizontal, Sparkle } from 'lucide-react';
import { SalesStatus } from '@/src/components/filters/SalesStatus';
import { Bedrooms } from '@/src/components/filters/Bedrooms';

export const Menubar = () => {
  return (
    <menu className="p-4 flex gap-2">
      <Location />
      <Button className="rounded-full">
        <Search size={20} />
        Поиск
      </Button>
      <Bedrooms className="border-none" />
      <Price />
      <PropertyType className="border-none" />
      <SalesStatus className="border-none" />
      <Button className="rounded-full">
        <Sparkle size={20} />
        Эксклюзивно на Alnair
      </Button>
      <Button className="rounded-full">
        <SlidersHorizontal size={20} />
        Еще фильтры
      </Button>
    </menu>
  );
};
