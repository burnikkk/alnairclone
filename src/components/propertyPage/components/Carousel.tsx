'use client';

import * as React from 'react';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import useObjectImages from '@/hooks/useObjectImages';

export function CarouselApi({ query }: { query: string }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const { images, isLoading } = useObjectImages(query);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="group w-full max-w-[700px]">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {images.map((url, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex items-center justify-center">
                  <Image
                    src={url}
                    alt={`Property ${index + 1}`}
                    width={1000}
                    height={800}
                    className="object-cover rounded-lg w-full max-w-[700px] h-[230px] md:h-[450px]"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="opacity-0 group-hover:opacity-100" />
        <CarouselNext className="opacity-0 group-hover:opacity-100" />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
}
