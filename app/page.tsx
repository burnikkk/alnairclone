'use client';

import { Header } from '@/app/components/layout/Header';
import { Separator } from '@/components/ui/separator';
import { MainLayout } from '@/app/components/layout/mainLayout';
import React from 'react';
import { CurrencyProvider } from '@/app/components/contexts/CurrencyProvider';

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <CurrencyProvider>
      <header>
        <Header />
        <Separator />
      </header>
      <MainLayout />
      <Separator />
    </CurrencyProvider>
  );
}
