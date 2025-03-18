import { createContextHook } from '@/hooks/createContextHook';
import { useState } from 'react';

export const useFilters = createContextHook(() => {
  const [houseType, setHouseType] = useState<string>('');
  const [roomType, setRoomType] = useState<string>('');
  const [statusType, setStatusType] = useState<string>('');
  const [latitude, setLatitude] = useState(25.276987);
  const [longitude, setLongitude] = useState(55.296249);

  const setCoordinates = (lat: number, lng: number) => {
    setLatitude(lat);
    setLongitude(lng);
  };

  return {
    latitude,
    longitude,
    houseType,
    roomType,
    statusType,
    setCoordinates,
    setHouseType,
    setRoomType,
    setStatusType,
  };
});
