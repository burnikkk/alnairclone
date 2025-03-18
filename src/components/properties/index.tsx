'use client';

import React, { useState } from 'react';
import { CollapsibleButton } from '@/src/components/properties/components/CollapsibleButton';
import { PropertyCard as PropertyType } from '@/src/types/propertyObjCard';
import useSWR from 'swr';
import { useFilters } from '@/src/hooks/useFilters';
import { cn } from '@/src/lib/utils';
import { PropertyCard } from '@/src/components/properties/components/propertyCard';
import { PropertyHead } from '@/src/components/properties/components/PropertyHead';

export const PropertyList = () => {
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
    <div
      className={cn(
        'transition-all duration-300 ease-in-out md:relative w-full pr-8',
        isCollapsed
          ? 'md:w-8 md:overflow-hidden'
          : 'md:min-w-[320px] md:w-[320px] xl:min-w-[656px]'
      )}
    >
      <div
        className={`overflow-y-scroll h-[calc(100vh-125px)] transition-opacity duration-300 ease-in-out ${
          isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="flex flex-wrap content-start px-4 pb-4">
          <div className="w-full">
            <PropertyHead />
          </div>
          <div className="grid xs:grid-cols-1 xl:grid-cols-2 gap-4 w-full">
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
  );
};
