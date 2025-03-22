'use client';

import React from 'react';

import { Menubar } from '@/src/components/navigation/Menubar';
import { Separator } from '@/src/components/ui/separator';
import { PropertyList } from '@/src/components/properties';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/src/components/map/Map'), {
  ssr: false,
});

export const Body = () => {
  return (
    <div>
      <Menubar />
      <Separator />
      <div className="flex">
        <PropertyList />
        <Map />
      </div>
    </div>
  );
};
