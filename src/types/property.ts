export enum EDiscountType {
  PERCENTAGE = 'PERCENTAGE',
  FIXED = 'FIXED',
}

export interface IDiscount {
  type: EDiscountType;
  value: number;
}

export enum EBedroom {
  ONE = '1K',
  TWO = '2K',
  THREE = '3K',
  FOUR = '4K',
  FIVE = '5K',
  SIX = '6K',
  SEVEN = '7K',
  EIGHT = '8K',
  NINE = '9K',
  TEN = '10K',
  FREE = 'free_planing',
}

export interface IUnit {
  type: EBedroom;
  size: number;
  price: number;
}

export interface ILocation {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

export enum EMeasure {
  SQM = 'SQM',
  SQFT = 'SQFT',
}

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

export interface IProperty {
  id: string;
  isRecommended: boolean;
  imageUrl: string;
  title: string;
  developer: string;
  salesStatus?: string;
  propertyType: string;
  price: number;
  discount?: IDiscount;
  units: IUnit[];
  availableUnits: number;
  completionDate: string;
  longitude: number;
  latitude: number;
  city: string;
  salesType?: string;
  exclusive?: boolean;
}
