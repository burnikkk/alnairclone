import { createContextHook } from '@/src/hooks/createContextHook';
import { useState } from 'react';
import { Currency, EMeasure } from '@/src/types/property';

export const useSettings = createContextHook(() => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('AED');
  const [selectedMeasure, setSelectedMeasure] = useState<EMeasure>(
    EMeasure.SQM
  );

  return {
    selectedCurrency,
    setSelectedCurrency,
    selectedMeasure,
    setSelectedMeasure,
  };
});
