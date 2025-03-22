import { EMeasure } from '@/types/property';

export const getMeasureLabel = (measure: EMeasure) => {
  return { [EMeasure.SQM]: 'm2', [EMeasure.SQFT]: 'ft2' }[measure];
};
