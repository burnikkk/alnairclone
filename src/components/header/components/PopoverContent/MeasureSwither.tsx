import { EMeasure } from '@/types/property';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getMeasureLabel } from '@/utils/label';
import React from 'react';
import { useSettings } from '@/hooks/useSettings';

export const MeasureSwitcher = () => {
  const { setSelectedMeasure, selectedMeasure } = useSettings();

  return (
    <div className="grid grid-cols-2 w-full border border-gray-300 rounded-md">
      {[EMeasure.SQM, EMeasure.SQFT].map((measure, index) => (
        <Button
          key={measure}
          variant="ghost"
          size="sm"
          className={cn(
            'rounded-none border',
            index === 0 ? 'rounded-l-md' : 'rounded-r-md',
            selectedMeasure === measure
              ? 'bg-blue-100 text-blue-500 border-blue-500'
              : 'text-black'
          )}
          onClick={() => setSelectedMeasure(measure)}
        >
          {getMeasureLabel(measure)}
        </Button>
      ))}
    </div>
  );
};
