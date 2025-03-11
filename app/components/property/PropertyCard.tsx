import { PropertyCard as PropertyType } from '@/app/types/propertyObjCard';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

interface PropertyCardProps {
  property?: PropertyType;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  if (!property) {
    return (
      <Card className="relative w-full rounded-2xl shadow-lg overflow-hidden cursor-pointer group transition-all duration-300 ease-in-out">
        <div className="relative w-full aspect-[1/1]">
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

        {/* Анимированный контент карточки */}
        <CardContent className="absolute bottom-0 left-0 w-full bg-white p-4 transform translate-y-1/3 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          {/* Основная информация */}
          <div className="flex items-center gap-3 pb-2">
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

          {/* Тип недвижимости */}
          <p className="text-xs pt-2">Первичная</p>

          {/* Цена + Скидка */}
          <div className="flex justify-between items-center pb-2">
            <p className="text-lg font-semibold">от миллиона гривен</p>
            <Badge className="rounded-full bg-green-200 text-green-500 px-2 text-xs font-bold">
              100%
            </Badge>
          </div>
          <Separator />

          {/* Дополнительная информация */}
          <div className="pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
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
    <div className="border rounded-lg p-4 shadow-md">
      {property.isRecommended && (
        <span className="text-xs font-semibold text-blue-600">
          РЕКОМЕНДОВАНО
        </span>
      )}
      <img
        src={property.imageUrl || '/default-image.jpg'}
        alt={property.title}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h3 className="text-lg font-bold mt-2">{property.title}</h3>
      <p className="text-sm text-gray-500">{property.developer}</p>
      <p className="text-xs text-gray-400">{property.propertyType}</p>
      <p className="text-md font-semibold">{property.price.formatted}</p>
      {property.discount?.formatted && (
        <span className="text-green-600 text-sm font-bold">
          {property.discount.formatted}
        </span>
      )}
    </div>
  );
};
