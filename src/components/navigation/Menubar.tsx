'use client';
import { Button } from '@/components/ui/button';
import { Location } from '@/components/filters/Location';
import { PropertyType } from '@/components/filters/PropertyType';
import { Price } from '@/components/filters/Price';
import { Search, SlidersHorizontal, Sparkle } from 'lucide-react';
import { SalesStatus } from '@/components/filters/SalesStatus';
import { Bedrooms } from '@/components/filters/Bedrooms';

export const Menubar = () => {
  return (
    <menu className="p-4 flex gap-2 overflow-x-auto">
      <Location />
      <Button className="rounded-full">
        <Search size={20} />
        Поиск
      </Button>
      <Bedrooms />
      <Price />
      <PropertyType />
      <SalesStatus />
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
