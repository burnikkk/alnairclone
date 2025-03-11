'use client';

import { Header } from '@/app/components/layout/Header';
import { Separator } from '@/components/ui/separator';
import { MainLayout } from '@/app/components/layout/mainLayout';
import React from 'react';

export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <Separator />
      </div>
      <div>
        <MainLayout />
      </div>
    </div>
  );
}
