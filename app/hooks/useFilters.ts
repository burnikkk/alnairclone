import { createContextHook } from '@/app/hooks/createContextHook';
import { useState } from 'react';

export const useFilters = createContextHook(() => {
  const [houseType, setHouseType] = useState<string>('');
  const [roomType, setRoomType] = useState<string>('');
  const [statusType, setStatusType] = useState<string>('');

  return {
    houseType,
    roomType,
    statusType,
    setHouseType,
    setRoomType,
    setStatusType,
  };
});
