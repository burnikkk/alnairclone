'use client';

import React, { useState } from 'react';

import { Menubar } from '@/components/navigation/Menubar';
import { Separator } from '@/components/ui/separator';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { PropertyHeading } from '@/components/properties/PropertyHeading';
import { Map } from '@/components/map/Map';
import { CollapsibleButton } from '@/components/layout/components/CollapsibleButton';
import { PropertyCard as PropertyType } from '@/types/propertyObjCard';
import useSWR from 'swr';
import { useFilters } from '@/hooks/useFilters';

export const Body = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  // const { houseType } = useHouseType();
  const { roomType } = useFilters();
  // const { statusType } = useStatusType();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: properties } = useSWR('/api/properties', fetcher);

  if (!properties) {
    return <div>Загрузка...</div>;
  }

  const filteredProperties = properties.filter((property: PropertyType) => {
    //  const matchesHouseType = houseType === "all" || property.propertyType?.trim() === houseType.trim();
    const matchesRoomType =
      roomType === 'all' ||
      property.units.some((unit) => unit.type?.trim() === roomType.trim());
    //   const matchesStatusType = statusType === "all" || property.salesStatusType?.trim() === statusType.trim();

    return matchesRoomType;
  });

  console.log(filteredProperties);

  return (
    <div>
      <Menubar />
      <Separator />
      <div
        className={`grid w-screen h-[calc(100vh-125px)] overflow-hidden transition-[grid-template-columns] duration-300 ease-in-out
      ${isCollapsed ? 'grid-cols-[32px_1fr]' : 'xs:grid-cols-1 md:grid-cols-[656px_1fr]'}`}
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
              <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {filteredProperties.length > 0 ? (
                  filteredProperties.map((property: PropertyType) => (
                    <PropertyCard key={property.id} property={property} />
                  ))
                ) : (
                  <div className="text-center text-gray-500 w-full">
                    Нет доступных объектов
                  </div>
                )}
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
