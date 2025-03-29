import { EMeasure, IPrice } from '@/types/property';
import { useFilters } from '@/hooks/useFilters';
import { useSettings } from '@/hooks/useSettings';
import { getDisplayPrice } from '@/utils/displayPrice';

export const handleSubmit = (data: IPrice) => {
  const { setAll } = useFilters();
  const { selectedCurrency, selectedMeasure } = useSettings();
  const displayPrice = getDisplayPrice(data, selectedMeasure, selectedCurrency);

  let minPrice = parseFloat(data.minPrice) || 0;
  let maxPrice = parseFloat(data.maxPrice) || 0;
  if (data.pricePer === 'sqm') {
    minPrice = minPrice * (selectedMeasure === EMeasure.SQFT ? 0.10764 : 1);
    maxPrice = maxPrice * (selectedMeasure === EMeasure.SQFT ? 0.10764 : 1);
  }

  setAll({
    minPrice: minPrice.toString(),
    maxPrice: maxPrice.toString(),
  });

  const query = new URLSearchParams();
  if (minPrice) query.append('minPrice', minPrice.toString());
  if (maxPrice) query.append('maxPrice', maxPrice.toString());

  fetch(`/api/properties?${query.toString()}`)
    .then((response) => response.json())
    .then((filteredData) => {
      console.log('Отфильтрованные данные:', filteredData);
    })
    .catch((error) => {
      console.error('Ошибка фильтрации:', error);
    });
};
