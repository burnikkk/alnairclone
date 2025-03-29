'use client';

import './globals.css';
import React, { FC, PropsWithChildren } from 'react';
import { useFilters } from '@/hooks/useFilters';
import { useSettings } from '@/hooks/useSettings';
import { useLocation } from '@/hooks/useLocation';

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <useSettings.Provider>
    <useFilters.Provider>
      <useLocation.Provider>{children}</useLocation.Provider>
    </useFilters.Provider>
  </useSettings.Provider>
);
