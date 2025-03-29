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
import React, { FC, PropsWithChildren, useEffect } from 'react';
import { Area } from '@/components/filters/allFilters/components/Area';
import { SalesStatus } from '@/components/filters/allFilters/components/SalesStatus';
import { PropertyType } from '@/components/filters/allFilters/components/PropertyType';
import { Bedrooms } from '@/components/filters/allFilters/components/Bedrooms';
import { Button } from '@/components/ui/button';
import { SalesType } from '@/components/filters/allFilters/components/SalesType';
import { Form } from '@/components/ui/form/form';
import { useFilters } from '@/hooks/useFilters';
import { useForm } from 'react-hook-form';
import { useLocation } from '@/hooks/useLocation';
import { Price } from '@/components/filters/allFilters/components/Price';
import { SearchBar } from '@/components/filters/allFilters/components/SearchBar';
import { IPriceFilter } from '@/types/filters';
import { Block } from '@/components/filters/allFilters/components/Block';
import { debounce } from 'lodash';

export const AllFilters: FC<PropsWithChildren> = ({ children }) => {
  const { filters, setAll, resetAll } = useFilters();
  const { selectedCity } = useLocation();

  const form = useForm<IPriceFilter>({
    values: {
      minPrice: filters.minPrice,
      maxPrice: filters.maxPrice,
      pricePer: filters.pricePer,
    },
  });

  useEffect(() => {
    form.watch(debounce(() => setAll(form.getValues()), 500));
  }, [form, setAll]);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-svw md:max-w-[900px] max-h-[650px] border-none">
        <Form context={form} onSubmit={setAll}>
          <DialogHeader className="bg-gray-200 rounded-t-lg p-15">
            <DialogTitle className="font-semibold text-2xl pb-4">
              <p>
                Поиск среди 1982 проектов в{' '}
                <span className="text-[#4f5fd9]">{selectedCity}</span>
              </p>
            </DialogTitle>
            <SearchBar />
          </DialogHeader>
          <div className="px-15 py-8 flex flex-col gap-6">
            <Price />
            <Area />

            <Block title={'Тип'}>
              <SalesType />
            </Block>
            <Block title={'Тип объекта'}>
              <PropertyType />
            </Block>
            <Block title={'Статус продаж'}>
              <SalesStatus />
            </Block>
            <Block title={'Спальни'}>
              <Bedrooms />
            </Block>
          </div>

          <DialogFooter className="w-full sticky bottom-0 grid grid-cols-2 gap-4 bg-gray-200 rounded-b-lg p-10">
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
        </Form>
      </DialogContent>
    </Dialog>
  );
};
