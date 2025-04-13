import { CarouselApi } from '@/components/propertyPage/components/Carousel';
import { TextLorem } from '@/components/propertyPage/components/textlorem';
import Image from 'next/image';
import React from 'react';
import { Currency } from '@/components/propertyPage/components/Currency';
import { Separator } from '@/components/ui/separator';
import CompletionDate from '@/components/properties/components/propertyCard/CompletionDate';
import { EventCard } from '@/components/propertyPage/components/Events';
import dynamic from 'next/dynamic';
import { useProperty } from '@/hooks/useProperty';

const MapCard = dynamic(() => import('./Map'), {
  ssr: false,
});

export const FullInfo = () => {
  const { property, setProperty } = useProperty();

  return (
    <div>
      <div className="w-full lg:max-w-full xl:w-[700px] flex flex-col items-center gap-4">
        <div>
          <CarouselApi query={property.title} />
        </div>
        <div className="grid grid-cols-2 grid-rows-[1fr_40px] p-3 border rounded-lg w-full">
          <div className="flex flex-row items-center">
            <Image
              src={'/icons/img.png'}
              width={80}
              height={80}
              alt="Логотип"
              className="rounded-md border object-cover w-[80px] h-[80px]"
            />
            <div className="px-3 text-sm">
              <h2 className="md:text-xl font-bold">{property.title}</h2>
              <p className="text-gray-500">{property.city}</p>
              <p className="text-gray-600">{property.developer}</p>
            </div>
          </div>

          <div className="flex items-start justify-end">
            <Currency />
          </div>
          <div className="col-span-2 flex items-center justify-between gap-4 w-full">
            <p className="whitespace-nowrap">Завершение:</p>
            <Separator className="bg-gray-300 !h-[2px] flex-1" />
            <div className="text-violet font-semibold">
              <CompletionDate date={property.completionDate} />
            </div>
          </div>
        </div>
        <TextLorem />
        <h2 className="text-3xl font-bold text-left pt-3">News and Events</h2>
        <EventCard />
        <EventCard />
        <h2 className="text-3xl font-bold text-left pt-3">Map</h2>
        <MapCard />
      </div>
    </div>
  );
};
