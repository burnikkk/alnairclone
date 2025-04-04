import useSWR from 'swr';
import { fetcher } from '@/utils/api';
import { useFilters } from '@/hooks/useFilters';
import { IProperty } from '@/types/property';

type IPropertiesResponse = {
  data: IProperty[];
  found: number;
  total: number;
};

export const useProperties = () => {
  const { query } = useFilters();

  const url = `/properties?${query}`;

  const { data, ...rest } = useSWR<IPropertiesResponse>(url, fetcher);

  return { data: data?.data, found: data?.found, total: data?.total, ...rest };
};
