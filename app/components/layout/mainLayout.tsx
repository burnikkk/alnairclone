'use client';
import React, { useState } from 'react';

import { Menubar } from '@/app/components/navigation/Menubar';
import { Separator } from '@/components/ui/separator';
import { PropertyCard } from '@/app/components/property/PropertyCard';
import { PropertyHeading } from '@/app/components/property/PropertyHeading';
import { Map } from '@/app/components/map/Map';
import { CollapsibleButton } from '@/app/components/navigation/buttons/CollapsibleButton';
import { PropertyCard as PropertyType } from '@/app/types/propertyObjCard';
import useSWR from 'swr';

export const MainLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: properties, error } = useSWR('/api/properties', fetcher);

  if (error) {
    console.error('Ошибка при получении данных:', error);
  }

  if (!properties) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <Menubar />
      <Separator />
      <div
        className={`grid w-screen h-[calc(100vh-125px)] overflow-hidden transition-[grid-template-columns] duration-300 ease-in-out
      ${isCollapsed ? 'sm:grid-cols-[32px_calc(100%-32px)]' : 'lg:grid-cols-[656px_calc(100%-656px)]'}
      grid-cols-1`}
      >
        <div className="relative transition-transform duration-300 ease-in-out pr-8 w-full">
          <div
            className={`overflow-y-scroll h-[calc(100vh-125px)] transition-opacity duration-300 ease-in-out ${
              isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <div className="flex flex-wrap content-start px-4 pb-4">
              <div className="w-full">
                <PropertyHeading />
              </div>
              <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
                {properties.map((property: PropertyType) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </div>
          </div>
          <CollapsibleButton
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        </div>

        <div
          className={`relative w-full h-full z-0 transition-all duration-300 ease-in-out block`}
        >
          <Map />
        </div>
      </div>
    </div>
  );
};
