'use client';
import { useState } from 'react';
import { createContextHook } from '@/hooks/createContextHook';
import { IProperty } from '@/types/property';

const initProperty: IProperty = {
  isRecommended: false,
  units: [],
  id: '',
  imageUrl: '',
  salesStatus: '',
  propertyType: '',
  price: 0,
  title: '',
  developer: '',
  salesType: '',
  exclusive: false,
  availableUnits: 0,
  completionDate: '',
  longitude: 0,
  latitude: 0,
  city: '',
};

export const useProperty = createContextHook(function useProperty(
  initialProperty: IProperty = initProperty
) {
  const [property, setProperty] = useState<IProperty>(initialProperty);

  return {
    property,
    setProperty,
  };
});
