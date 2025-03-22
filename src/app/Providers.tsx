'use client';

import './globals.css';
import React, { FC, PropsWithChildren } from 'react';
import { useFilters } from '@/src/hooks/useFilters';
import { useSettings } from '@/src/hooks/useSettings';

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <useSettings.Provider>
    <useFilters.Provider>{children}</useFilters.Provider>
  </useSettings.Provider>
);
