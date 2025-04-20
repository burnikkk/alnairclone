import { useMemo, useReducer } from 'react';
import { createContextHook } from '@/hooks/createContextHook';
import { IFilters } from '@/types/filters';

const initFilters: IFilters = {
  bedrooms: '',
  saleStatus: '',
  propertyType: '',
  pricePer: 'object',
  latitude: '25.116987',
  longitude: '55.496249',
  title: '',
  developer: '',
  sortOption: '',
  minPrice: '',
  maxPrice: '',
  minArea: '',
  maxArea: '',
  salesType: '',
  searchQuery: '',
  exclusive: 'false',
};

type FiltersAction =
  | {
      type: 'SET_FILTER_BUNCH';
      value: Partial<IFilters>;
    }
  | { type: 'RESET_FILTERS' };

const filtersReducer = (state: IFilters, action: FiltersAction): IFilters => {
  switch (action.type) {
    case 'SET_FILTER_BUNCH':
      return {
        ...state,
        ...action.value,
      };

    case 'RESET_FILTERS': {
      return initFilters;
    }

    default:
      return state;
  }
};

export const useFilters = createContextHook(function useFilters(
  initialFilters: IFilters = initFilters
) {
  const [filters, dispatch] = useReducer(filtersReducer, initialFilters);

  const setAll = (filters: Partial<IFilters>) => {
    dispatch({
      type: 'SET_FILTER_BUNCH',
      value: filters,
    });
  };

  const resetAll = () => {
    dispatch({ type: 'RESET_FILTERS' });
  };

  const query = useMemo(() => filtersToQuery(filters), [filters]);

  return {
    filters,
    query,
    setAll,
    resetAll,
  };
});

const filtersToQuery = (filters: IFilters) => {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value) {
      params.set(key, value);
    }
  });
  return params.toString();
};
