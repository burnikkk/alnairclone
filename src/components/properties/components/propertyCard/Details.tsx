import { PropertyCard as PropertyType } from '@/src/types/propertyObjCard';
import React from 'react';
import { CardContent } from '@/src/components/ui/card';
import { Badge } from '@/src/components/ui/badge';
import Image from 'next/image';
import { Separator } from '@/src/components/ui/separator';
import usePropertyImage from '@/src/hooks/usePropertyImages';
import { ChevronUp } from 'lucide-react';

interface DetailsProps {
  property: PropertyType;
}

export const Details = ({ property }: DetailsProps) => {
  const { imageUrl } = usePropertyImage(property?.propertyType);

  return (
    <CardContent className="absolute bottom-0 left-0 w-full bg-white px-3 py-2 max-h-[126px] overflow-hidden group-hover:max-h-[272px] transition-[max-height] duration-300 ease-in-out">
      <div className="grid grid-cols-[40px_1fr] items-center gap-3 pb-2 h-[56px]">
        <Image
          src={imageUrl || '/CardComponents/img.png'}
          width={40}
          height={40}
          alt="Логотип"
          className="rounded-md border"
        />
        <div className="w-full overflow-hidden">
          <h3 className="font-bold truncate">{property.title}</h3>
          <p className="text-sm text-gray-500">{property.developer}</p>
        </div>
      </div>
      <Separator />

      <div className="flex flex-row items-center justify-between pb-2 h-[60px]">
        <div>
          <p className="text-xs pt-2">{property.propertyType}</p>
          <p className="text-lg font-semibold">{property.price.formatted}</p>
        </div>
        <div className="flex flex-row justify-end items-center">
          {property.discount?.formatted && (
            <Badge className="w-fit rounded-2xl bg-[#e9faf0] text-[#20cb6a] px-3 py-1 text-xs font-semibold mr-1">
              {property.discount.formatted}
            </Badge>
          )}
          <ChevronUp className="bg-[#f3f3f5] border-box rounded-full" />
        </div>
      </div>
      <Separator />

      <div className="flex flex-col gap-2 opacity-0 max-h-[110px] group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <div className="flex flex-col gap-1">
          {property.units.map((unit, index) => (
            <div key={index} className="flex justify-between text-sm">
              <div>
                <span className="font-semibold mr-1">{unit.type}</span>
                <span className="font-normal text-gray-500">
                  от {unit.size}
                </span>
              </div>
              <span>{unit.price}</span>
            </div>
          ))}
        </div>

        <Separator />

        <div className="flex justify-between items-center text-sm">
          <span className="font-semibold">
            {property.availableUnits} юнитов доступно
          </span>
          <span className="text-gray-500">{property.completionDate}</span>
        </div>
      </div>
    </CardContent>
  );
};
