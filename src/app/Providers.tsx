'use client';

import './globals.css';
import React, { FC, PropsWithChildren } from 'react';
import { useFilters } from '@/hooks/useFilters';
import { useSettings } from '@/hooks/useSettings';
import { useLocation } from '@/hooks/useLocation';
import { useProperty } from '@/hooks/useProperty';

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <useSettings.Provider>
    <useFilters.Provider>
      <useProperty.Provider>
        <useLocation.Provider>{children}</useLocation.Provider>
      </useProperty.Provider>
    </useFilters.Provider>
  </useSettings.Provider>
);
