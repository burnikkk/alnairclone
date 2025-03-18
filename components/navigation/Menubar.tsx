'use client';
import { Button } from '@/components/ui/button';
import { Location } from '@/components/filters/Location';
import { SelectHouse } from '@/components/filters/SelectHouse';
import { Price } from '@/components/filters/Price';
import { Search, SlidersHorizontal, Sparkle } from 'lucide-react';
import { SelectRoom } from '@/components/filters/SelectRoom';
import { SalesStatus } from '@/components/filters/SalesStatus';

export const Menubar = () => {
  return (
    <menu className="p-4 flex gap-2">
      <Location />
      <Button className="rounded-full">
        <Search size={20} />
        Поиск
      </Button>
      <SelectRoom className="border-none" />
      <Price />
      <SelectHouse className="border-none" />
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
