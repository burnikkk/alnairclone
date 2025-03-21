export interface Price {
  amount: number;
  currency: string;
  formatted: string;
}

export interface Discount {
  percentage: number;
  formatted: string;
}

export interface Units {
  type: string;
  size: string;
  price: number;
}

export interface PropertyCard {
  id: string;
  isRecommended: boolean;
  imageUrl: string;
  title: string;
  developer: string;
  salesStatusType: string;
  propertyType: string;
  price: Price;
  discount?: Discount;
  units: Units[];
  availableUnits: string;
  completionDate: string;
}
