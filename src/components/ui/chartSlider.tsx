import React from 'react';
import { cn } from '@/lib/utils';
import { RangeSlider } from '@/components/ui/rangeSlider';

interface ChartSliderProps {
  data: number[];
  range: [number, number];
  min: number;
  max: number;
  onRangeChange: (value: [number, number]) => void;
}

const normalizeToMax100 = (data: number[]) => {
  const maxVal = Math.max(...data);
  return data.map((val) => (val / maxVal) * 100);
};

const roundStep = (value: number) => {
  const magnitude = Math.pow(10, Math.floor(Math.log10(value)) - 1);
  return Math.floor(value / magnitude) * magnitude;
};

const ChartSlider: React.FC<ChartSliderProps> = ({
  data,
  range,
  min,
  max,
  onRangeChange,
}) => {
  const chartColumns = data.length - 1;
  const step = roundStep((max - min) / chartColumns);

  const normalizedData = normalizeToMax100(data);

  return (
    <div className="w-full flex flex-col items-center gap-5">
      <div className="relative w-full h-20 flex items-end flex-nowrap gap-1">
        {normalizedData.map((value, index) => {
          const columnRange = index * step;
          const isInRange = columnRange >= range[0] && columnRange <= range[1];
          return (
            <div
              key={index}
              className={cn(
                'w-full rounded-[2px] transition-all bg-indigo-500',
                !isInRange && 'opacity-20'
              )}
              style={{ height: `${value}%` }}
            />
          );
        })}
      </div>

      <RangeSlider
        value={range}
        onValueChange={onRangeChange}
        min={min}
        max={max}
        step={step}
      />
    </div>
  );
};

ChartSlider.displayName = 'ChartSlider';

export { ChartSlider };
