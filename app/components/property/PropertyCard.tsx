import { PropertyCard as PropertyType } from '@/app/types/propertyObjCard';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import usePropertyImage from '@/app/hooks/usePropertyImages';
import { ChevronUp } from 'lucide-react';

interface PropertyCardProps {
  property?: PropertyType;
}


export const PropertyCard = ({ property }: PropertyCardProps) => {
  const { imageUrl } = usePropertyImage(property?.propertyType);

  if (!property) {
    return (
      <Card className="relative w-full rounded-2xl shadow-lg overflow-hidden cursor-pointer group transition-all duration-300 ease-in-out">
        <div className="relative w-full aspect-[4/3]">
          <Badge className="absolute top-3 left-3 bg-[#edeef7] text-[#4f5fd9] rounded-full text-sm font-normal z-10">
            Рекомендовано
          </Badge>
          <Image
            src="/CardComponents/img.png"
            alt="нет данных"
            layout="fill"
            objectFit="cover"
            className="p-1 rounded-2xl z-0"
          />
        </div>

        <CardContent className="absolute bottom-0 left-0 w-full bg-white p-4 pt-0 transform translate-y-[116px] group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          <div className="flex items-center gap-3 pb-2 h-[56px]">
            <Image
              src="/CardComponents/img.png"
              width={40}
              height={40}
              alt="Логотип"
              className="rounded-md border"
            />
            <div>
              <h3 className="text-lg font-bold">Стройка жесткая</h3>
              <p className="text-sm text-gray-500">Реально жесткая компания</p>
            </div>
          </div>
          <Separator />

          <div className="flex items-center justify-between pb-2 h-[60px]">
            <div className="">
              <p className="text-xs pt-2">Первичная</p>
              <p className="text-lg font-semibold">от миллиона гривен</p>
            </div>
            <div>
              <Badge className="rounded-full bg-green-200 text-green-500 p-2 text-xs font-bold">
                100%
              </Badge>
            </div>
          </div>
          <Separator />

          <div className="pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out h-[100px]">
            <p className="text-sm text-gray-700">
              Подробная информация: скидка 100% на первый взнос, комфорт-класс,
              выгодные условия приобретения и ипотека на месте.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="relative w-full h-full rounded-2xl shadow-lg overflow-hidden cursor-pointer group transition-all duration-300 ease-in-out">
      <div className="relative w-full h-[220px] mb-28">
        {property.isRecommended && (
          <Badge className="absolute top-3 left-3 bg-[#edeef7] text-[#4f5fd9] rounded-full text-sm font-normal z-10">
            Рекомендовано
          </Badge>
        )}
        <Image
          src={
            imageUrl  ||
            '/CardComponents/img.png'
          }
          alt={property.title || 'нет данных'}
          layout="fill"
          objectFit="cover"
          className="p-1 rounded-2xl z-0"
        />
      </div>

      <CardContent className="absolute bottom-0 left-0 w-full bg-white px-3 py-2 max-h-[126px] overflow-hidden group-hover:max-h-[272px] transition-[max-height] duration-300 ease-in-out">
        <div className="grid grid-cols-[40px_1fr] items-center gap-3 pb-2 h-[56px]">
          <Image
            src={
              imageUrl ||
              '/CardComponents/img.png'
            }
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
    </Card>
  );
};
