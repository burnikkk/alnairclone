import { useFilters } from '@/src/hooks/useFilters';
import useSWR from "swr";
import { PropertyCard as PropertyType } from '@/src/types/propertyObjCard';

export const filteredProperties = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: properties, error } = useSWR('/api/properties', fetcher);

  const { houseType, roomType, statusType } = useFilters();

  if (error) return { properties: [], isLoading: false, isError: true };
  if (!properties) return { properties: [], isLoading: true, isError: false };

  const filteredProperties =
    (!houseType || houseType === "all") &&
    (!roomType || roomType === "all") &&
    (!statusType || statusType === "all")
      ? properties
      : properties.filter((property: PropertyType) => {
        const matchesHouseType =
          !houseType || houseType === "all" || property.propertyType?.trim() === houseType.trim();
        const matchesRoomType =
          !roomType || roomType === "all" ||
          property.units.some((unit) => unit.type?.trim() === roomType.trim());
        const matchesStatusType =
          !statusType || statusType === "all" || property.salesStatusType?.trim() === statusType.trim();

        return matchesHouseType && matchesRoomType && matchesStatusType;
      });

  return { properties: filteredProperties, isLoading: false, isError: false };
};
