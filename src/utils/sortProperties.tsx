import { IProperty } from '@/types/property';

export const sortProperties = (
  properties?: IProperty[],
  sortOption?: string
) => {
  if (!properties) return [];

  switch (sortOption) {
    case 'new':
      return [...properties].sort(
        (a, b) =>
          new Date(b.completionDate).getTime() -
          new Date(a.completionDate).getTime()
      );
    case 'old':
      return [...properties].sort(
        (a, b) =>
          new Date(a.completionDate).getTime() -
          new Date(b.completionDate).getTime()
      );
    case 'price-desc':
      return [...properties].sort((a, b) => b.price - a.price);
    case 'price-asc':
      return [...properties].sort((a, b) => a.price - b.price);
    case 'sqm-desc':
      return [...properties].sort((a, b) => b.price - a.price);
    case 'sqm-asc':
      return [...properties].sort((a, b) => a.price - b.price);
    case 'date-desc':
      return [...properties].sort(
        (a, b) =>
          new Date(b.completionDate).getTime() -
          new Date(a.completionDate).getTime()
      );
    case 'date-asc':
      return [...properties].sort(
        (a, b) =>
          new Date(a.completionDate).getTime() -
          new Date(b.completionDate).getTime()
      );
    case 'all':
      return properties;
    default:
      return properties;
  }
};
