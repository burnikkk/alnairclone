'use client';

import React from 'react';

import { Menubar } from '@/components/navigation/Menubar';
import { Separator } from '@/components/ui/separator';
import { PropertyList } from '@/components/properties';
import dynamic from 'next/dynamic';
import { Chatbot } from '@/components/chatbot/chatbot';

const Map = dynamic(() => import('@/components/map/Map'), {
  ssr: false,
});

export const Body = () => {
  return (
    <div>
      <Menubar />
      <Separator />
      <div className="relative lg:flex">
        <PropertyList />
        <Map />
        <Chatbot />
      </div>
    </div>
  );
};
