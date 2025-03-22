'use client';

import { Separator } from '@/components/ui/separator';
import { Body } from '@/components/layout/Body';
import { Header } from '@/components/header';
import React from 'react';

export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <Separator />
      </div>
      <div>
        <Body />
      </div>
    </div>
  );
}
