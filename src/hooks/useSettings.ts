import { createContextHook } from '@/hooks/createContextHook';
import { useState } from 'react';
import { Currency, EMeasure } from '@/types/property';

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
