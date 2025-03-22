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
import { FormInput } from '@/components/ui/form/formInput';
import { formatCurrency } from '@/lib/utils';
import { FormTabs } from '@/components/ui/form/formTabs';
import { useSettings } from '@/hooks/useSettings';
import { getMeasureLabel } from '@/utils/label';

const priceOptions = [
  '500000',
  '1000000',
  '1500000',
  '3000000',
  '5000000',
  '8000000',
  '15000000',
];

const priceSqOptions = ['500', '1000', '1500', '2000', '2500', '3000'];

type PriceProps = {
  value?: string;
  onChange?: (value: string) => void;
};

type IPrice = { minPrice: string; maxPrice: string; pricePer: string };

export const Price: React.FC<PriceProps> = ({ onChange }) => {
  const { selectedCurrency, selectedMeasure } = useSettings();

  const form = useForm<IPrice>({
    values: {
      pricePer: 'object',
      minPrice: '',
      maxPrice: '',
    },
  });

  const pricePer = form.watch('pricePer');
  const minPrice = form.watch('minPrice');
  const maxPrice = form.watch('maxPrice');

  const priceLabel =
    minPrice && maxPrice
      ? `${formatCurrency(minPrice)} - ${formatCurrency(maxPrice)} ${selectedCurrency}`
      : 'Стоимость';

  const targetOptions = pricePer === 'object' ? priceOptions : priceSqOptions;

  const handleSubmit = (data: IPrice) => {
    const query = new URLSearchParams();

    if (data.minPrice) query.append('minPrice', data.minPrice);
    if (data.maxPrice) query.append('maxPrice', data.maxPrice);

    fetch(`/api/properties?${query.toString()}`)
      .then((response) => response.json())
      .then((filteredData) => {
        console.log('Отфильтрованные данные:', filteredData);
        // Обновляем состояние с полученными данными
        // setProperties(filteredData);
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
          {priceLabel}
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
                      {formatCurrency(price)} {selectedCurrency}
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
                      {formatCurrency(price)} {selectedCurrency}
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
