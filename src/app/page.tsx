'use client';

import { Separator } from '@/src/components/ui/separator';
import { Body } from '@/src/components/layout/Body';
import { Header } from '@/src/components/header';
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
