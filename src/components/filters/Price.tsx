import React, { useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Form } from '@/components/ui/form/form';
import { useForm } from 'react-hook-form';
import { FormInput } from '@/components/ui/form/formInput';
import { formatCurrency } from '@/lib/utils';
import { FormTabs } from '@/components/ui/form/formTabs';
import { useSettings } from '@/hooks/useSettings';
import { getMeasureLabel } from '@/utils/label';
import { useFilters } from '@/hooks/useFilters';
import { convertPrice } from '@/utils/price';
import { EMeasure } from '@/types/property';

const basePriceOptions = [
  500000, 1000000, 1500000, 3000000, 5000000, 8000000, 15000000,
];

const basePriceSqOptions = [500, 1000, 1500, 2000, 2500, 3000];

type IPrice = { minPrice: string; maxPrice: string; pricePer: string };

export const Price = () => {
  const { selectedCurrency, selectedMeasure } = useSettings();
  const { setAll } = useFilters();

  const form = useForm<IPrice>({
    defaultValues: {
      pricePer: 'object',
      minPrice: '',
      maxPrice: '',
    },
  });

  const pricePer = form.watch('pricePer');

  const [displayPrice, setDisplayPrice] = useState<string>('Стоимость');

  const priceOptions = basePriceOptions.map((price) =>
    convertPrice(price, selectedCurrency)
  );

  const priceSqOptions = basePriceSqOptions.map((price) =>
    convertPrice(price, selectedCurrency, selectedMeasure)
  );

  const targetOptions = pricePer === 'object' ? priceOptions : priceSqOptions;

  const handleSubmit = (data: IPrice) => {
    let minPrice = parseFloat(data.minPrice) || 0;
    let maxPrice = parseFloat(data.maxPrice) || 0;

    if (data.pricePer === 'sqm') {
      minPrice = minPrice * (selectedMeasure === EMeasure.SQFT ? 0.10764 : 1);
      maxPrice = maxPrice * (selectedMeasure === EMeasure.SQFT ? 0.10764 : 1);
    }

    setAll({
      minPrice: minPrice.toString(),
      maxPrice: maxPrice.toString(),
    });

    setDisplayPrice(
      minPrice && maxPrice
        ? `${minPrice} - ${maxPrice} ${pricePer === 'sqm' ? getMeasureLabel(selectedMeasure) + '/' + selectedCurrency : selectedCurrency}`
        : 'Стоимость'
    );

    const query = new URLSearchParams();
    if (minPrice) query.append('minPrice', minPrice.toString());
    if (maxPrice) query.append('maxPrice', maxPrice.toString());

    fetch(`/api/properties?${query.toString()}`)
      .then((response) => response.json())
      .then((filteredData) => {
        console.log('Отфильтрованные данные:', filteredData);
      })
      .catch((error) => {
        console.error('Ошибка фильтрации:', error);
      });
  };

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
            <CardContent>
              <div className="grid grid-cols-2 text-center bg-gray-100 text-gray-500 p-2 rounded-md text-sm">
                <div>
                  <FormInput
                    name="minPrice"
                    placeholder={`Мин. цена (${selectedCurrency})`}
                    inputMode="numeric"
                    className="mt-1 text-lg font-semibold text-black text-center border-none shadow-none"
                    IMask={{
                      mask: Number,
                      thousandsSeparator: ' ',
                    }}
                  />
                </div>
                <div>
                  <FormInput
                    name="maxPrice"
                    placeholder={`Макс. цена (${selectedCurrency})`}
                    inputMode="numeric"
                    className="mt-1 text-lg font-semibold text-black text-center border-none shadow-none"
                    IMask={{
                      mask: Number,
                      thousandsSeparator: ' ',
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4">
                <div>
                  {targetOptions.slice(0, -1).map((price, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className={`w-full text-left ${form.watch('minPrice') === price ? 'text-[#4249ce]' : ''}`}
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
                      className={`w-full text-left ${form.watch('maxPrice') === price ? 'text-[#4249ce]' : ''}`}
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
