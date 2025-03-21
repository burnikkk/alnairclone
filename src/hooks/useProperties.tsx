import useSWR from 'swr';
import { fetcher } from '@/src/utils/api';
import { useFilters } from '@/src/hooks/useFilters';

export const useProperties = () => {
  const { propertyType, bedrooms, saleStatus } = useFilters();

  const queryParams = new URLSearchParams({
    propertyType: propertyType || '',
    bedrooms: bedrooms || '',
    saleStatus: saleStatus || '',
  }).toString();

  const url = `/properties?${queryParams}`;

  return useSWR(url, fetcher);
};
