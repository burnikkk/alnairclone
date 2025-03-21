import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/src/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardFooter } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { useFilters } from "@/src/hooks/useFilters";

const priceOptionsAED = [
  500000, 1000000, 1500000, 3000000, 5000000, 8000000, 15000000,
];

const formatNumber = (value: number | '') =>
  value !== '' ? value.toLocaleString('en-US').replace(/,/g, ' ') : '';


type PriceProps = {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};

export const Price: React.FC<PriceProps> = ({ className, onChange }) => {
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const { selectedCurrency, convertPrice, selectedMeasure, getMeasureCoef } = useFilters();


  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, '');
    setMinPrice(value ? parseInt(value) : '');
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, '');
    setMaxPrice(value ? parseInt(value) : '');
  };


  const priceLabel = minPrice && maxPrice
    ? `${formatNumber(Number(convertPrice(minPrice)))} - ${formatNumber(Number(convertPrice(maxPrice)))} ${selectedCurrency}`
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
        >
          <TabsList className="grid w-full grid-cols-2 rounded-lg">
            <TabsTrigger value="object">за объект</TabsTrigger>
            <TabsTrigger value="sqm">за {selectedMeasure}</TabsTrigger>
          </TabsList>

          <TabsContent value="object">
            <Card>
              <CardContent>
                <div className="grid grid-cols-2 text-center bg-gray-100 text-gray-500 p-2 rounded-md text-sm">
                  <div>
                    <Input
                      type="text"
                      value={minPrice !== "" ? `${formatNumber(Number(convertPrice(minPrice).replace(/[^0-9.]/g, "")))}` : ""}
                      onChange={handleMinPriceChange}
                      placeholder={`Мин. цена (${selectedCurrency})`}
                      className="mt-1 text-lg font-semibold text-black text-center border-none shadow-none"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      value={maxPrice !== "" ? `${formatNumber(Number(convertPrice(maxPrice).replace(/[^0-9.]/g, "")))}` : ""}
                      onChange={handleMaxPriceChange}
                      placeholder={`Макс. цена (${selectedCurrency})`}
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
                        {formatNumber(Number(convertPrice(price)))} {selectedCurrency}
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
                        {formatNumber(Number(convertPrice(price)))} {selectedCurrency}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
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
                      value={minPrice !== "" ? formatNumber(Math.round(Number(convertPrice(minPrice)) * getMeasureCoef())) : ""}
                      onChange={handleMinPriceChange}
                      placeholder={`Мин. цена за ${selectedMeasure}`}
                      className="mt-1 text-lg font-semibold text-black text-center border-none shadow-none"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      value={maxPrice !== "" ? formatNumber(Math.round(Number(convertPrice(maxPrice)) * getMeasureCoef())) : ""}
                      onChange={handleMaxPriceChange}
                      placeholder={`Макс. цена за ${selectedMeasure}`}
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
                        {formatNumber(Math.round(Number(convertPrice(price)) * getMeasureCoef()))} {selectedCurrency}/{selectedMeasure}
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
                        {formatNumber(Math.round(Number(convertPrice(price)) * getMeasureCoef()))} {selectedCurrency}/{selectedMeasure}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
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


