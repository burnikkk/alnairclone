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
import { Button } from '@/components/ui/button';
import { SalesType } from '@/components/filters/allFilters/components/SalesType';
import { Form } from '@/components/ui/form/form';
import { useFilters } from '@/hooks/useFilters';
import { useForm } from 'react-hook-form';
import { useLocation } from '@/hooks/useLocation';
import { Price } from '@/components/filters/allFilters/components/Price';
import { SearchBar } from '@/components/filters/allFilters/components/SearchBar';
import { IFilters } from '@/types/filters';
import { Block } from '@/components/filters/allFilters/components/Block';
import { useTranslations } from 'next-intl';
import { SalesStatus } from '@/components/filters/allFilters/components/SalesStatus';
import { PropertyType } from '@/components/filters/allFilters/components/PropertyType';
import { Bedrooms } from '@/components/filters/allFilters/components/Bedrooms';
import { ExclusiveSwitch } from '@/components/filters/allFilters/components/Exclusive';

export const AllFilters: FC<PropsWithChildren> = ({ children }) => {
  const t = useTranslations('AllFilters');
  const tr = useTranslations('Price');
  const { filters, setAll, resetAll } = useFilters();
  const { selectedCity } = useLocation();

  const form = useForm<IFilters>({
    values: filters,
  });

  // useEffect(() => {
  //   form.watch(debounce(() => setAll(form.getValues()), 500));
  // }, [form, setAll]);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-svw md:max-w-[900px] max-h-[650px] border-none">
        <Form context={form} onSubmit={setAll}>
          <DialogHeader className="bg-gray-200 rounded-t-lg p-15">
            <DialogTitle className="font-semibold text-2xl pb-4">
              <p>{t('search_in_projects', { city: selectedCity })}</p>
            </DialogTitle>
            <SearchBar />
          </DialogHeader>
          <div className="px-15 py-8 flex flex-col gap-6">
            <Price />

            <Block title={t('type')}>
              <SalesType />
            </Block>
            <ExclusiveSwitch />
            <Block title={t('property_type')}>
              <PropertyType />
            </Block>
            <Block title={t('sales_status')}>
              <SalesStatus />
            </Block>
            <Block title={t('bedrooms')}>
              <Bedrooms />
            </Block>
          </div>

          <DialogFooter className="w-full sticky bottom-0 grid grid-cols-2 gap-4 bg-gray-200 rounded-b-lg p-10">
            <Button
              type="button"
              variant="secondary"
              className="p-7 text-center text-lg bg-white hover:bg-gray-100 cursor-pointer"
              onClick={resetAll}
            >
              {t('clear_filters')}
            </Button>
            <DialogClose asChild>
              <Button
                type="submit"
                variant="secondary"
                className="p-7 text-center text-lg bg-violet text-white hover:bg-violet-light cursor-pointer"
              >
                {tr('show')}
              </Button>
            </DialogClose>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
