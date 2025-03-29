'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import React, { FC, PropsWithChildren } from 'react';
import { IPrice } from '@/types/property';
import { PriceForm } from '@/components/filters/filterParts/PriceForm';
import { SqForm } from '@/components/filters/filterParts/SqForm';
import { SalesStatusButtons } from '@/components/filters/filterParts/SalesStatusButtons';
import { PropertyTypesButtons } from '@/components/filters/filterParts/PropertyTypesButtons';
import { BedroomButtons } from '@/components/filters/filterParts/BedroomButtons';
import { Button } from '@/components/ui/button';
import { SalesTypesButtons } from '@/components/filters/filterParts/SalesTypesButtons';
import { Form } from '@/components/ui/form/form';
import { useFilters } from '@/hooks/useFilters';
import { useForm } from 'react-hook-form';
import { handleSubmit } from '@/utils/handleSumbit';
import { useLocation } from '@/hooks/useLocation';
import { Histogram } from '@/components/filters/filterParts/Histogram';
import { SearchBar } from '@/components/filters/filterParts/SearchBar';

export const AllFilters: FC<PropsWithChildren> = ({ children }) => {
  const { resetAll } = useFilters();
  const { selectedCity } = useLocation();
  console.log(selectedCity);

  const form = useForm<IPrice>({
    defaultValues: {
      pricePer: 'object',
      minPrice: '',
      maxPrice: '',
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-svw md:max-w-[900px] max-h-[650px] border-none">
        <DialogHeader className="bg-gray-200 rounded-t-lg p-15">
          <DialogTitle className="font-semibold text-2xl pb-4">
            <p>
              Поиск среди 1982 проектов в{' '}
              <span className="text-[#4f5fd9]">{selectedCity}</span>
            </p>
          </DialogTitle>
          <SearchBar />
        </DialogHeader>
        <div className="px-15">
          <div className="py-6">
            <Histogram />
          </div>

          <div>
            <Form context={form} onSubmit={handleSubmit}>
              <PriceForm form={form} />
            </Form>
          </div>

          <div className="py-6">
            <SqForm />
          </div>

          <div>
            <h2 className="font-semibold py-4 text-xl">Тип</h2>
            <SalesTypesButtons />
          </div>
          <div>
            <h2 className="font-semibold py-4 text-xl">Тип объекта</h2>
            <PropertyTypesButtons />
          </div>

          <div>
            <h2 className="font-semibold py-4 text-xl">Статус продаж</h2>
            <SalesStatusButtons />
          </div>

          <div>
            <h2 className="font-semibold py-4 text-xl">Спальни</h2>
            <BedroomButtons />
          </div>
        </div>

        <DialogFooter className="w-full sticky bottom-0 bg-white grid grid-cols-2 gap-4 bg-gray-200 rounded-b-lg p-10">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              className="p-7 text-center cursor-pointer hover:bg-primary/5"
            >
              Закрыть
            </Button>
          </DialogClose>
          <Button
            type="button"
            variant="secondary"
            className="p-7 text-center bg-[#4f5fd9] text-white hover:bg-[#7b87e3] cursor-pointer"
            onClick={resetAll}
          >
            Очистить фильтры
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
