'use client';

import { Menubar } from '@/app/components/navigation/Menubar';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { PropertyCard } from '@/app/components/property/PropertyCard';
import { PropertyHeading } from '@/app/components/property/PropertyHeading';
import styles from '@/app/page.module.css';
import { Map } from '@/app/components/map/Map';
import { CollapsibleButton } from '@/app/components/navigation/buttons/CollapsibleButton';

export const MainLayout = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <div>
      <Menubar />
      <Separator />
      <div
        className={`${styles['full-screen-container']} ${isCollapsed ? styles['collapsed'] : ''}`}
      >
        <div className={`${styles['projects']} w-full`}>
          <div
            className={`flex flex-wrap content-start px-4 pb-4 overflow-y-scroll`}
          >
            <div className="w-full">
              <PropertyHeading />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
            </div>
          </div>
          <CollapsibleButton
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        </div>
        <div className={styles['leaflet-container']}>
          <Map />
        </div>
      </div>
    </div>
  );
};
