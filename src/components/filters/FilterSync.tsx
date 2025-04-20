'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useFilters } from '@/hooks/useFilters';

export const FilterSync = () => {
  const { query } = useFilters();
  const router = useRouter();

  useEffect(() => {
    router.replace(`?${query}`);
  }, [query]);

  return null;
};
