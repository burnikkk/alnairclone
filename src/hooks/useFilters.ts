import { createContextHook } from '@/src/hooks/createContextHook';
import { useState } from 'react';

export const useFilters = createContextHook(() => {
  const [propertyType, setPropertyType] = useState<string>('');
  const [bedrooms, setBedrooms] = useState<string>('');
  const [saleStatus, setSaleStatus] = useState<string>('');
  const [latitude, setLatitude] = useState(25.116987);
  const [longitude, setLongitude] = useState(55.496249);
  const [sortOption, setSortOption] = useState<string>('all');
  const setCoordinates = (lat: number, lng: number) => {
    setLatitude(lat);
    setLongitude(lng);
  };

  return {
    latitude,
    longitude,
    propertyType,
    bedrooms,
    saleStatus,
    setCoordinates,
    setPropertyType,
    setBedrooms,
    setSaleStatus,
    sortOption,
    setSortOption,
  };
});
