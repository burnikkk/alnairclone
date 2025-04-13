'use client';

import React, { useState } from 'react';
import { CollapsibleButton } from '@/components/properties/components/CollapsibleButton';
import { IProperty as PropertyType } from '@/types/property';
import { cn } from '@/lib/utils';
import { PropertyCard } from '@/components/properties/components/propertyCard';
import { PropertyHead } from '@/components/properties/components/PropertyHead';
import { sortProperties } from '@/utils/sortProperties';
import { useProperties } from '@/hooks/useProperties';
import { useFilters } from '@/hooks/useFilters';

export const PropertyList = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { filters } = useFilters();
  const { data: properties } = useProperties();

  const sortedProperties = sortProperties(properties, filters.sortOption);

  return (
    <div
      className={cn(
        'transition-all duration-300 ease-in-out absolute lg:pr-8 lg:relative h-svh z-10 bg-white',
        isCollapsed
          ? 'w-[1px] overflow-hidden'
          : 'min-w-[320px] w-svw lg:min-w-[488px]'
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
          <div className="grid sm:grid-cols-2 custom-md:grid-cols-3 lg:grid-cols-2 gap-3 w-full">
            {sortedProperties?.length ? (
              sortedProperties.map((property: PropertyType) => (
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
