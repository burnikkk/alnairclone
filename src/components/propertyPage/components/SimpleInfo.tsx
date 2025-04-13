import * as React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useProperty } from '@/hooks/useProperty';

export const SimpleInfo = () => {
  const { property, setProperty } = useProperty();

  return (
    <div className="h-fit p-6 rounded-lg border sticky top-0">
      <div className="grid grid-cols-2 p-3">
        <div>
          <h3 className="text-lg font-bold">{property.title}</h3>
          <p>{property.city}</p>
          <p>{property.developer}</p>
        </div>
        <div className="flex items-center justify-end">
          <Image
            src={'/icons/img.png'}
            width={60}
            height={60}
            alt="Логотип"
            className="rounded-md object-cover lg:w-[60px] lg:h-[60px]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Link href="/login">
          <Button
            variant="outline"
            className="w-full h-15 bg-violet text-white rounded-xl text-md lg:text-lg"
          >
            Наличие
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="default" className="w-1/2 h-12 rounded-xl">
            Презентация
          </Button>
        </Link>
      </div>
    </div>
  );
};
