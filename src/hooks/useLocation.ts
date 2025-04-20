import { createContextHook } from '@/hooks/createContextHook';
import { useState } from 'react';

export const useLocation = createContextHook(() => {
  const [selectedCity, setSelectedCity] = useState<string>('Dubai');

  return {
    selectedCity,
    setSelectedCity,
  };
});
