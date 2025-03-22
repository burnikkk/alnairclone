'use client';

import React from 'react';

import { Menubar } from '@/components/navigation/Menubar';
import { Separator } from '@/components/ui/separator';
import { PropertyList } from '@/components/properties';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/map/Map'), {
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
