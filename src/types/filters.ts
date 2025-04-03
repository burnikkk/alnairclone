type FilterValue = string;
type FilterBValue = boolean;

export type IFilters = {
  bedrooms: FilterValue;
  saleStatus: FilterValue;
  propertyType: FilterValue;
  latitude: FilterValue;
  longitude: FilterValue;
  sortOption: FilterValue;
  pricePer: 'object' | 'sqm';
  minPrice: FilterValue;
  maxPrice: FilterValue;
  minArea: FilterValue;
  maxArea: FilterValue;
  salesType: FilterValue;
  searchQuery: FilterValue;
  exclusive: FilterBValue;
};

export type IPriceFilter = Pick<IFilters, 'minPrice' | 'maxPrice' | 'pricePer'>;
export type IAreaFilter = Pick<IFilters, 'minArea' | 'maxArea'>;
