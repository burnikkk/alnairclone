'use client';

import * as React from 'react';
import { CurrencyForm } from '@/components/filters/shared/FormParts/CurrencyForm';
import { MeasureForm } from '@/components/filters/shared/FormParts/MeasureForm';
import { ChartSlider } from '@/components/ui/chartSlider';
import { useFormContext } from 'react-hook-form';
import { IFilters } from '@/types/filters';

const STEP = 100_000;
const MIN = 0;
const MAX = 10_000_000;

export function Price() {
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

  return (
    <>
      <ChartSlider
        data={[
          2, 8, 5, 7, 4, 6, 10, 3, 9, 4, 6, 7, 5, 8, 3, 6, 5, 4, 7, 3, 6, 5,
        ]}
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
