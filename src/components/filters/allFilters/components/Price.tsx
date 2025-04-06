'use client';

import * as React from 'react';
import { CurrencyForm } from '@/components/filters/shared/FormParts/CurrencyForm';
import { MeasureForm } from '@/components/filters/shared/FormParts/MeasureForm';
import { ChartSlider } from '@/components/ui/chartSlider';
import { useFormContext } from 'react-hook-form';
import { IFilters } from '@/types/filters';
import { IProperty as PropertyType } from '@/types/property';

const STEP = 1_000_000;
const MIN = 0;
const MAX = 10_000_000;

interface PriceProps {
  properties: PropertyType[];
}

export function Price({ properties }: PriceProps) {
  const form = useFormContext<IFilters>();
  const minPrice = +form.watch('minPrice');
  const maxPrice = +form.watch('maxPrice');

  const from = !minPrice || isNaN(minPrice) ? MIN : minPrice;
  const to = !maxPrice || isNaN(maxPrice) ? MAX : maxPrice;
  const range = [from, to] as [number, number];

  const setRange = ([min, max]: [number, number]) => {
    form.setValue('minPrice', String(min));
    form.setValue('maxPrice', String(max));
  };

  const buckets = Array.from({ length: (MAX - MIN) / STEP }, (_, i) => {
    const lower = i * STEP;
    const upper = lower + STEP;
    return properties.filter(
      (property) => property.price >= lower && property.price < upper
    ).length;
  });

  return (
    <>
      <ChartSlider
        data={buckets}
        min={MIN}
        max={MAX}
        range={range}
        onRangeChange={setRange}
      />

      <div className="pt-6">
        <div className="pb-4">
          <CurrencyForm />
        </div>
        <MeasureForm />
      </div>
    </>
  );
}
