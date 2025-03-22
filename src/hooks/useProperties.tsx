import useSWR from 'swr';
import { fetcher } from '@/utils/api';
import { useFilters } from '@/hooks/useFilters';
import { IProperty } from '@/types/property';

export const useProperties = () => {
  const { query } = useFilters();

  const url = `/properties?${query}`;

  return useSWR<IProperty[]>(url, fetcher);
};
