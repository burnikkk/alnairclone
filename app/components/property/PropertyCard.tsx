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
      <Card className="w-full rounded-2xl shadow-lg overflow-hidden cursor-pointer">
        {/* Рекомендовано + изображение */}
        <div className="relative w-full aspect-[4/3]">
          <Badge className="absolute top-3 left-3 bg-[#edeef7] text-[#4f5fd9] rounded-full text-sm font-normal z-1">
            Рекомендовано
          </Badge>
          <Image
            src="/CardComponents/img.png"
            alt={'нет данных'}
            layout="fill"
            objectFit="cover"
            className="p-1 rounded-2xl z-0"
          />
        </div>

        <CardContent className="p-2">
          {/* Лого + Заголовок */}
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
          <div className="flex justify-between items-center pt-2">
            <p className="text-md font-semibold">от миллиона гривен</p>
            <Badge className="rounded-full bg-green-200 text-green-500 px-2 py-1 text-xs font-bold">
              100%
            </Badge>
          </div>
        </CardContent>

        {/*<CardFooter className="bg-white transition-all duration-300 max-h-0 overflow-hidden group-hover:max-h-40 p-4">*/}
        {/*  <p className="text-sm text-gray-700">*/}
        {/*    Здесь может быть дополнительная информация об объекте, которая*/}
        {/*    появляется при наведении на карточку.*/}
        {/*  </p>*/}
        {/*</CardFooter>*/}
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
