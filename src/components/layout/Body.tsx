'use client';

import React from 'react';

import { Menubar } from '@/src/components/navigation/Menubar';
import { Separator } from '@/src/components/ui/separator';
import { Map } from '@/src/components/map/Map';
import { PropertyList } from '@/src/components/properties';

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
