import { createContextHook } from '@/src/hooks/createContextHook';
import { useState } from 'react';

export enum EMeasure {
  SQM = 'SQM',
  SQFT = 'SQFT',
}

interface MeasureRates {
  [key: string]: number;
}

const measureRates: MeasureRates = {
  [EMeasure.SQM]: 0.1,
  [EMeasure.SQFT]: 1.7639,
};

export type Currency =
  | 'AED'
  | '$'
  | '€'
  | '฿'
  | '₽'
  | 'OMR'
  | '¥'
  | 'IDR'
  | '£';

interface CurrencyRates {
  [key: string]: number;
}

const currencyRates: CurrencyRates = {
  AED: 1,
  $: 0.27,
  '€': 0.25,
  '฿': 0.000007,
  '₽': 16.0,
  OMR: 0.01,
  '¥': 0.12,
  IDR: 1.12,
  '£': 0.22,
};

export const useFilters = createContextHook(() => {
  const [propertyType, setPropertyType] = useState<string>('');
  const [bedrooms, setBedrooms] = useState<string>('');
  const [saleStatus, setSaleStatus] = useState<string>('');
  const [latitude, setLatitude] = useState(25.116987);
  const [longitude, setLongitude] = useState(55.496249);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('AED');
  const [selectedMeasure, setSelectedMeasure] = useState<EMeasure>(
    EMeasure.SQM
  );
  const [sortOption, setSortOption] = useState<string>('all');

  const convertPrice = (priceInAED: number): string => {
    const rate = currencyRates[selectedCurrency];
    return (priceInAED * rate).toFixed(1);
  };

  const getMeasureCof = (): number => {
    return measureRates[selectedMeasure];
  };

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
    selectedCurrency,
    setSelectedCurrency,
    convertPrice,
    selectedMeasure,
    setSelectedMeasure,
    getMeasureCof,
    sortOption,
    setSortOption,
  };
});
