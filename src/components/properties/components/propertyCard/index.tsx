import { PropertyCard as PropertyType } from '@/src/types/propertyObjCard';
import React from 'react';
import { Card } from '@/src/components/ui/card';
import { CoverImage } from '@/src/components/properties/components/propertyCard/CoverImage';
import { Details } from '@/src/components/properties/components/propertyCard/Details';

interface PropertyCardProps {
  property?: PropertyType;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  if (!property) return null;

  return (
    <Card className="relative border w-full h-full rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 ease-in-out">
      <CoverImage
        type={property.propertyType}
        title={property.title}
        isRecommended={property.isRecommended}
        salesStatusType={property.salesStatusType}

      />
      <Details property={property} />
    </Card>
  );
};
