import { createContextHook } from '@/src/hooks/createContextHook';
import { useState } from 'react';

export type Measure = 'm²' | 'ft²';

interface MeasureRates {
  [key: string]: number;
}

const measureRates: MeasureRates = {
  'm²': 0.1,
  'ft²': 1.7639,
};

export type Currency = 'AED' | '$' | '€' | '฿' | '₽' | 'OMR' | '¥' | 'IDR' | '£';

interface CurrencyRates {
  [key: string]: number;
}

const currencyRates: CurrencyRates = {
  AED: 1,
  $: 0.27,
  '€': 0.25,
  '฿': 0.000007,
  '₽': 16.00,
  OMR: 0.01,
  '¥': 0.12,
  IDR: 1.12,
  '£': 0.22,
};

export const useFilters = createContextHook(() => {
  const [houseType, setHouseType] = useState<string>('');
  const [roomType, setRoomType] = useState<string>('');
  const [statusType, setStatusType] = useState<string>('');
  const [latitude, setLatitude] = useState(25.116987);
  const [longitude, setLongitude] = useState(55.496249);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('AED');
  const [selectedMeasure, setSelectedMeasure] = useState<Measure>('m²');
  const [sortOption, setSortOption] = useState<string>('all');

  const convertPrice = (priceInAED: number): string => {
    const rate = currencyRates[selectedCurrency];
    return (priceInAED * rate).toFixed(1);
  };

  const getMeasureCoef = (): number => {
    return measureRates[selectedMeasure];
  };

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
    selectedCurrency,
    setSelectedCurrency,
    convertPrice,
    selectedMeasure,
    setSelectedMeasure,
    getMeasureCoef,
    sortOption,
    setSortOption,
  };
});
