import { EMeasure } from '@/types/property';
import { IPriceFilter } from '@/types/filters';
import { getMeasureLabel } from '@/utils/label';

export const getDisplayPrice = (
  data: IPriceFilter,
  selectedMeasure: EMeasure,
  selectedCurrency: string
) => {
  let minPrice = parseFloat(data.minPrice) || 0;
  let maxPrice = parseFloat(data.maxPrice) || 0;

  if (data.pricePer === 'sqm') {
    minPrice *= selectedMeasure === EMeasure.SQFT ? 0.10764 : 1;
    maxPrice *= selectedMeasure === EMeasure.SQFT ? 0.10764 : 1;
  }

  if (minPrice && maxPrice) {
    return `${minPrice} - ${maxPrice} ${
      data.pricePer === 'sqm'
        ? `${getMeasureLabel(selectedMeasure)}/${selectedCurrency}`
        : selectedCurrency
    }`;
  }
};
