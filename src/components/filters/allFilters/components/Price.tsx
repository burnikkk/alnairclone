'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis } from 'recharts';
import { getTrackBackground, Range } from 'react-range';
import { Card, CardContent } from '@/components/ui/card';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { CurrencyForm } from '@/components/filters/shared/FormParts/CurrencyForm';
import { MeasureForm } from '@/components/filters/shared/FormParts/MeasureForm';

const STEP = 100_000;
const MIN = 0;
const MAX = 10_000_000;

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
  const step = STEP;
  const priceDistribution: Record<number, number> = {};

  prices.forEach((price) => {
    const bucket = Math.floor(price / step) * step;
    priceDistribution[bucket] = (priceDistribution[bucket] || 0) + 1;
  });

  return Object.entries(priceDistribution).map(([price, count]) => ({
    rawPrice: parseInt(price),
    price: `${parseInt(price).toLocaleString()} AED`,
    count,
  }));
};

export function Price() {
  const [chartData, setChartData] = useState<
    { rawPrice: number; price: string; count: number }[]
  >([]);

  const [priceRange, setPriceRange] = useState<[number, number]>([MIN, MAX]);

  useEffect(() => {
    const loadData = async () => {
      const prices = await fetchPriceData();
      const processedData = processPriceData(prices);
      setChartData(processedData);
    };
    loadData();
  }, []);

  const filteredData = chartData.filter(
    (item) => item.rawPrice >= priceRange[0] && item.rawPrice <= priceRange[1]
  );

  return (
    <>
      <Card>
        <CardContent>
          <ChartContainer config={{}} className="h-[150px] w-full">
            <BarChart width={600} height={150} data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="price" tickLine={false} tickMargin={10} />
              <Tooltip content={<ChartTooltipContent />} />
              <Bar dataKey="count" fill="#8884d8" radius={4} />
            </BarChart>
          </ChartContainer>
          <div className="pt-4 px-4">
            <Range
              values={priceRange}
              step={STEP}
              min={MIN}
              max={MAX}
              onChange={(values) => setPriceRange(values as [number, number])}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '6px',
                    background: getTrackBackground({
                      values: priceRange,
                      colors: ['#ccc', '#8884d8', '#ccc'],
                      min: MIN,
                      max: MAX,
                    }),
                    borderRadius: '4px',
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    height: '20px',
                    width: '20px',
                    backgroundColor: '#8884d8',
                    borderRadius: '50%',
                    border: '2px solid white',
                    cursor: 'pointer',
                  }}
                />
              )}
            />
            <div className="flex justify-between text-sm pt-2">
              <span>{priceRange[0].toLocaleString()} AED</span>
              <span>{priceRange[1].toLocaleString()} AED</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="pt-6">
        <div className="pb-4">
          <CurrencyForm />
        </div>
        <MeasureForm />
      </div>
    </>
  );
}
