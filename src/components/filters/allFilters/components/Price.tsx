'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { useFormContext } from 'react-hook-form';
import { IFilters } from '@/types/filters';
import { CurrencyForm } from '@/components/filters/shared/FormParts/CurrencyForm';
import { MeasureForm } from '@/components/filters/shared/FormParts/MeasureForm';

const fetchPriceData = async () => {
  try {
    const response = await fetch('/api/properties');
    const data = await response.json();
    return data.map((property: { price: number }) => property.price);
  } catch (error) {
    console.error('Ошибка загрузки данных:', error);
    return [];
  }
};

const processPriceData = (prices: number[]) => {
  const step = 1_000_000;
  const priceDistribution: Record<number, number> = {};

  prices.forEach((price) => {
    const bucket = Math.floor(price / step) * step;
    priceDistribution[bucket] = (priceDistribution[bucket] || 0) + 1;
  });

  return Object.entries(priceDistribution).map(([price, count]) => ({
    price: `${parseInt(price).toLocaleString()} AED`,
    count,
  }));
};

export function Price() {
  const [chartData, setChartData] = React.useState<
    { price: string; count: number }[]
  >([]);

  const form = useFormContext<IFilters>();
  console.log('minPrice:', form.watch('minPrice'));
  console.log('maxPrice:', form.watch('maxPrice'));
  console.log('pricePer:', form.watch('pricePer'));

  React.useEffect(() => {
    const loadData = async () => {
      const prices = await fetchPriceData();
      const processedData = processPriceData(prices);
      setChartData(processedData);
    };
    loadData();
  }, []);

  return (
    <>
      <Card>
        <CardContent>
          <ChartContainer config={{}} className="h-[100px] w-full">
            <BarChart width={600} height={100} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="price" tickLine={false} tickMargin={10} />
              <Tooltip content={<ChartTooltipContent />} />
              <Bar dataKey="count" fill="#8884d8" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <div>
        <div className="pb-4">
          <CurrencyForm />
        </div>
        <MeasureForm />
      </div>
    </>
  );
}
