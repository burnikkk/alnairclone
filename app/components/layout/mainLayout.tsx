'use client';

import { Menubar } from '@/app/components/navigation/Menubar';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { PropertyCard } from '@/app/components/property/PropertyCard';
import { PropertyHeading } from '@/app/components/property/PropertyHeading';
import styles from '@/app/page.module.css';
import { Map } from '@/app/components/map/Map';

export const MainLayout = () => {
  return (
    <div className="overflow-x-hidden">
      <Menubar />
      <Separator />

      <div className={styles['full-screen-container']}>
        <div className="flex flex-wrap relative max-h-full content-start h-full relative overflow-auto px-4 pb-4">
          {/*объекты и их сортировка*/}

          <div className="w-full">
            {/*сортировка*/}
            <PropertyHeading />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {/*объекты*/}
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </div>
        </div>

        <div className={styles['leaflet-container']}>
          {/*карта*/}
          <Map />
        </div>
      </div>
    </div>
  );
};
