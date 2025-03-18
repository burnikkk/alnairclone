'use client';

import './globals.css';
import React, { FC, PropsWithChildren } from 'react';
import { useFilters } from '@/src/hooks/useFilters';

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <useFilters.Provider>{children}</useFilters.Provider>
);
