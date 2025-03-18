'use client';
import { Button } from '@/components/ui/button';
import { BtnLocation } from '@/app/components/navigation/buttons/BtnLocation';
import { BtnSelectHouse } from '@/app/components/navigation/buttons/BtnSelectHouse';
import { BtnPriceTab } from '@/app/components/navigation/buttons/BtnPriceTab';
import { Search, SlidersHorizontal, Sparkle } from 'lucide-react';
import { BtnSelectRoom } from "@/app/components/navigation/buttons/BtnSelectRoom";
import { BtnSlctSalesStatus } from "@/app/components/navigation/buttons/BtnSlctSalesStatus";

export const Menubar = () => {

  return (
    <menu className="p-4 flex gap-2">
      <BtnLocation />
      <Button className="rounded-full">
        <Search size={20} />
        Поиск
      </Button>
      <BtnSelectRoom className="border-none" />
      <BtnPriceTab />
      <BtnSelectHouse className="border-none" />
      <BtnSlctSalesStatus className="border-none" />
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
