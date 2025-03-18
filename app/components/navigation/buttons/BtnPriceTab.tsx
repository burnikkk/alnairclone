import React, { useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const priceOptionsAED = [
  500000, 1000000, 1500000, 3000000, 5000000, 8000000, 15000000,
];

const conversionRate = 0.01;

const formatNumber = (value: number | '') =>
  value !== '' ? value.toLocaleString('en-US').replace(/,/g, ' ') : '';

export const BtnPriceTab = () => {
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const [activeTab, setActiveTab] = useState<'object' | 'sqm'>('object');

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, '');
    setMinPrice(value ? parseInt(value) : '');
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, '');
    setMaxPrice(value ? parseInt(value) : '');
  };

  const priceLabel =
    minPrice && maxPrice
      ? activeTab === 'object'
        ? `${formatNumber(minPrice)} - ${formatNumber(maxPrice)} AED`
        : `${formatNumber(Math.round(Number(minPrice) * conversionRate))} - ${formatNumber(Math.round(Number(maxPrice) * conversionRate))} AED/m²`
      : 'Стоимость';

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
        <Tabs
          defaultValue="object"
          onValueChange={(val) => setActiveTab(val as 'object' | 'sqm')}
        >
          <TabsList className="grid w-full grid-cols-2 rounded-lg">
            <TabsTrigger value="object">за объект</TabsTrigger>
            <TabsTrigger value="sqm">за м²</TabsTrigger>
          </TabsList>

          <TabsContent value="object">
            <Card>
              <CardContent>
                <div className="grid grid-cols-2 text-center bg-gray-100 text-gray-500 p-2 rounded-md text-sm">
                  <div>
                    <Input
                      type="text"
                      value={formatNumber(minPrice)}
                      onChange={handleMinPriceChange}
                      placeholder="Мин. цена"
                      className="mt-1 text-lg font-semibold text-black text-center border-none shadow-none"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      value={formatNumber(maxPrice)}
                      onChange={handleMaxPriceChange}
                      placeholder="Макс. цена"
                      className="mt-1 text-lg font-semibold text-black text-center border-none shadow-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div>
                    {priceOptionsAED.slice(0, -1).map((price, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className={`w-full text-left ${minPrice === price ? 'text-[#4249ce]' : ''}`}
                        onClick={() => setMinPrice(price)}
                      >
                        {formatNumber(price)} AED
                      </Button>
                    ))}
                  </div>
                  <div>
                    {priceOptionsAED.slice(1).map((price, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className={`w-full text-left ${maxPrice === price ? 'text-[#4249ce]' : ''}`}
                        onClick={() => setMaxPrice(price)}
                      >
                        {formatNumber(price)} AED
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full text-white bg-[#4249ce]">
                  Показать
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="sqm">
            <Card>
              <CardContent>
                <div className="grid grid-cols-2 text-center bg-gray-100 text-gray-500 p-2 rounded-md text-sm">
                  <div>
                    <Input
                      type="text"
                      value={formatNumber(
                        Math.round(Number(minPrice) * conversionRate)
                      )}
                      onChange={handleMinPriceChange}
                      placeholder="Мин. цена за м²"
                      className="mt-1 text-lg font-semibold text-black text-center border-none shadow-none"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      value={formatNumber(
                        Math.round(Number(maxPrice) * conversionRate)
                      )}
                      onChange={handleMaxPriceChange}
                      placeholder="Макс. цена за м²"
                      className="mt-1 text-lg font-semibold text-black text-center border-none shadow-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div>
                    {priceOptionsAED.slice(0, -1).map((price, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className={`w-full text-left ${minPrice === price ? 'text-[#4249ce]' : ''}`}
                        onClick={() => setMinPrice(price)}
                      >
                        {formatNumber(Math.round(price * conversionRate))}{' '}
                        AED/m²
                      </Button>
                    ))}
                  </div>
                  <div>
                    {priceOptionsAED.slice(1).map((price, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className={`w-full text-left ${maxPrice === price ? 'text-[#4249ce]' : ''}`}
                        onClick={() => setMaxPrice(price)}
                      >
                        {formatNumber(Math.round(price * conversionRate))}{' '}
                        AED/m²
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full text-white bg-[#4249ce]">
                  Показать
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
};
