'use client';

import './globals.css';
import { LocationProvider } from '@/app/contexts/LocationContext';
import React, { FC, PropsWithChildren } from 'react';
import { useFilters } from './hooks/useFilters';

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <useFilters.Provider>
    <LocationProvider>{children}</LocationProvider>
  </useFilters.Provider>
);
