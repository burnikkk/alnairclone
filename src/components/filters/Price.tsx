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
import { formatCurrency } from '@/lib/utils';
import { FormTabs } from '@/components/ui/form/formTabs';
import { useSettings } from '@/hooks/useSettings';
import { getMeasureLabel } from '@/utils/label';
import { convertPrice } from '@/utils/price';
import { handleSubmit } from '@/utils/handleSumbit';
import { IPrice } from '@/types/property';
import { getDisplayPrice } from '@/utils/displayPrice';
import { PriceForm } from '@/components/filters/filterParts/PriceForm';

const basePriceOptions = [
  500000, 1000000, 1500000, 3000000, 5000000, 8000000, 15000000,
];

const basePriceSqOptions = [500, 1000, 1500, 2000, 2500, 3000];

export const Price = () => {
  const { selectedCurrency, selectedMeasure } = useSettings();

  const form = useForm<IPrice>({
    defaultValues: {
      pricePer: 'object',
      minPrice: '',
      maxPrice: '',
    },
  });

  const pricePer = form.watch('pricePer');

  const priceOptions = basePriceOptions.map((price) =>
    convertPrice(price, selectedCurrency)
  );

  const priceSqOptions = basePriceSqOptions.map((price) =>
    convertPrice(price, selectedCurrency, selectedMeasure)
  );

  const targetOptions = pricePer === 'object' ? priceOptions : priceSqOptions;

  const displayPrice = getDisplayPrice(
    form.getValues(),
    selectedMeasure,
    selectedCurrency
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-fit rounded-full bg-[#f3f3f5] !text-[#1F1F1F] border-none"
        >
          {displayPrice}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="md:w-[400px]">
        <Form context={form} onSubmit={handleSubmit}>
          <FormTabs
            name="pricePer"
            options={[
              { value: 'object', label: 'за объект' },
              { value: 'sqm', label: `за ${getMeasureLabel(selectedMeasure)}` },
            ]}
          />
          <Card>
            <CardContent className="py-4">
              <PriceForm form={form} />
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div>
                  {targetOptions.slice(0, -1).map((price, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className={`w-full text-left ${
                        form.watch('minPrice') === price ? 'text-[#4249ce]' : ''
                      }`}
                      onClick={() => form.setValue('minPrice', price)}
                    >
                      {formatCurrency(price)}{' '}
                      {pricePer === 'sqm'
                        ? `${getMeasureLabel(selectedMeasure)}/${selectedCurrency}`
                        : selectedCurrency}
                    </Button>
                  ))}
                </div>
                <div>
                  {targetOptions.slice(1).map((price, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className={`w-full text-left ${
                        form.watch('maxPrice') === price ? 'text-[#4249ce]' : ''
                      }`}
                      onClick={() => form.setValue('maxPrice', price)}
                    >
                      {formatCurrency(price)}{' '}
                      {pricePer === 'sqm'
                        ? `${getMeasureLabel(selectedMeasure)}/${selectedCurrency}`
                        : selectedCurrency}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-2">
              <Button type="submit" className="w-full text-white bg-[#4249ce]">
                Показать
              </Button>
            </CardFooter>
          </Card>
        </Form>
      </PopoverContent>
    </Popover>
  );
};
