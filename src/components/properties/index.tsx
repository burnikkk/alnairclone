'use client';

import React, { useState } from 'react';
import { CollapsibleButton } from '@/src/components/properties/components/CollapsibleButton';
import { IProperty as PropertyType } from '@/src/types/property';
import { useFilters } from '@/src/hooks/useFilters';
import { cn } from '@/src/lib/utils';
import { PropertyCard } from '@/src/components/properties/components/propertyCard';
import { PropertyHead } from '@/src/components/properties/components/PropertyHead';
import { sortProperties } from '@/src/utils/sortProperties';
import { useProperties } from '@/src/hooks/useProperties';

export const PropertyList = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { sortOption, setSortOption } = useFilters();
  const { data: properties } = useProperties();

  const sortedProperties = sortProperties(properties, sortOption);

  return (
    <div
      className={cn(
        'transition-all duration-300 ease-in-out md:relative w-full pr-8',
        isCollapsed
          ? 'md:w-8 md:overflow-hidden'
          : 'md:min-w-[320px] md:w-[320px] xl:min-w-[688px]'
      )}
    >
      <div
        className={`overflow-y-scroll h-[calc(100vh-125px)] transition-opacity duration-300 ease-in-out ${
          isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="flex flex-wrap content-start px-4 pb-4">
          <div className="w-full">
            <PropertyHead onSortChange={setSortOption} />
          </div>
          <div className="grid xs:grid-cols-1 xl:grid-cols-2 gap-3 w-full">
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
