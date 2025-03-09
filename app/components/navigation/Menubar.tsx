'use client';
import { Button } from '@/components/ui/button';
import { ButtonLocation } from '@/app/components/navigation/buttons/ButtonLocation';
import { ButtonSelect } from '@/app/components/navigation/buttons/ButtonSelect';
import { ButtonPriceTab } from '@/app/components/navigation/buttons/ButtonPriceTab';
import { Search, SlidersHorizontal, Sparkle } from 'lucide-react';

export const Menubar = () => {
  return (
    <menu className="p-4 flex gap-2">
      <ButtonLocation />
      <Button className="rounded-full">
        <Search size={20} />
        Поиск
      </Button>
      <ButtonSelect.HouseType className="border-none" />
      <ButtonPriceTab />
      <ButtonSelect.Room className="border-none" />
      <ButtonSelect.SalesStatus className="border-none" />
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
