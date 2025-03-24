import { EMeasure } from '@/types/property';

export const getMeasureLabel = (measure: EMeasure) => {
  return { [EMeasure.SQM]: 'm²', [EMeasure.SQFT]: 'ft²' }[measure];
};
