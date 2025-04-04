import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Form } from '@/components/ui/form/form';
import { useForm } from 'react-hook-form';
import { FormTabs } from '@/components/ui/form/formTabs';
import { useSettings } from '@/hooks/useSettings';
import { getMeasureLabel } from '@/utils/label';
import { getDisplayPrice } from '@/utils/displayPrice';
import { useFilters } from '@/hooks/useFilters';
import { IPriceFilter } from '@/types/filters';
import { PriceList } from '@/components/filters/shared/PriceList';
import { CurrencyForm } from '@/components/filters/shared/FormParts/CurrencyForm';
import { MeasureForm } from '@/components/filters/shared/FormParts/MeasureForm';
import { useTranslations } from 'next-intl';

const basePriceOptions = [
  500_000, 1_000_000, 1_500_000, 3_000_000, 5_000_000, 8_000_000, 15_000_000,
];

const basePriceSqOptions = [500, 1_000, 1_500, 2_000, 2_500, 3_000];

export const Price = () => {
  const { filters, setAll } = useFilters();
  const { selectedCurrency, selectedMeasure } = useSettings();
  const t = useTranslations('Price');

  const form = useForm<IPriceFilter>({
    values: {
      minPrice: filters.minPrice,
      maxPrice: filters.maxPrice,
      pricePer: filters.pricePer,
    },
  });

  const pricePer = form.watch('pricePer');
  const isPerSqm = pricePer === 'sqm';

  const targetOptions = isPerSqm ? basePriceSqOptions : basePriceOptions;

  const displayPrice = getDisplayPrice(
    form.getValues(),
    selectedMeasure,
    selectedCurrency
  );

  const priceListSuffix = isPerSqm
    ? `${getMeasureLabel(selectedMeasure)}/${selectedCurrency}`
    : selectedCurrency;

  return (
    <Popover onOpenChange={() => form.reset()}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-fit rounded-full bg-[#f3f3f5] !text-[#1F1F1F] border-none"
        >
          {displayPrice ? displayPrice : t('button_placeholder')}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="md:w-[400px]">
        <Form context={form} onSubmit={setAll}>
          <FormTabs
            name="pricePer"
            options={[
              { value: 'object', label: t('per_object') },
              { value: 'sqm', label: t('per_sqm') },
            ]}
          />

          <Card>
            <CardContent className="py-4">
              {isPerSqm ? <MeasureForm /> : <CurrencyForm />}
              <div className="grid grid-cols-2 gap-2 mt-4">
                <PriceList
                  value={form.watch('minPrice')}
                  options={targetOptions.slice(0, -1)}
                  onSelect={(v) => form.setValue('minPrice', v)}
                  suffix={priceListSuffix}
                />
                <PriceList
                  value={form.watch('maxPrice')}
                  options={targetOptions.slice(1)}
                  onSelect={(v) => form.setValue('maxPrice', v)}
                  suffix={priceListSuffix}
                />
              </div>
            </CardContent>
            <CardFooter className="pt-2">
              <Button type="submit" className="w-full text-white bg-violet">
                {t('show')}
              </Button>
            </CardFooter>
          </Card>
        </Form>
      </PopoverContent>
    </Popover>
  );
};
