import { useFilters } from '@/src/hooks/useFilters';
import { IProperty as PropertyType } from '@/src/types/property';
import { useProperties } from '@/src/hooks/useProperties';

export const useFilteredProperties = () => {
  const { data: properties, error } = useProperties();

  const { propertyType, bedrooms, saleStatus } = useFilters();

  if (error) return { properties: [], isLoading: false, isError: true };
  if (!properties) return { properties: [], isLoading: true, isError: false };

  const filteredProperties =
    (!propertyType || propertyType === 'all') &&
    (!bedrooms || bedrooms === 'all') &&
    (!saleStatus || saleStatus === 'all')
      ? properties
      : properties.filter((property: PropertyType) => {
          const matchesHouseType =
            !propertyType ||
            propertyType === 'all' ||
            property.propertyType?.trim() === propertyType.trim();
          const matchesRoomType =
            !bedrooms ||
            bedrooms === 'all' ||
            property.units.some(
              (unit) => unit.type?.trim() === bedrooms.trim()
            );
          const matchesStatusType =
            !saleStatus ||
            saleStatus === 'all' ||
            property.salesStatus?.trim() === saleStatus.trim();

          return matchesHouseType && matchesRoomType && matchesStatusType;
        });

  return { properties: filteredProperties, isLoading: false, isError: false };
};
