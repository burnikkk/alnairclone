import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { usePropertyContext } from '@/hooks/usePropertyContext';
import { useTranslations } from 'next-intl';

export const EventCard = () => {
  const { property } = usePropertyContext();
  const t = useTranslations('PropertyPage');

  return (
    <div className="flex w-full h-[150px] bg-gray-100 rounded-xl">
      <div className="relative w-[180px] h-auto min-w-[180px] rounded-lg overflow-hidden">
        <Image
          src={'/icons/img.png'}
          alt={property.title}
          fill
          className="object-cover"
        />
        <Badge className="absolute top-2 right-2 bg-white text-xs font-semibold text-black rounded-full">
          {t('launch')}
        </Badge>
      </div>

      <div className="flex flex-col justify-between p-4 w-full">
        <div>
          <h3 className="font-semibold text-lg">
            {t('sale_start')}: {property.title}
          </h3>
          <div className="grid grid-col text-sm text-gray-700 hidden md:grid">
            <p>
              {t('developer')}: {property.developer}
            </p>
            <p>
              {t('location')}: {property.city}
            </p>
            <p>
              {t('completion')}: {property.completionDate}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2">
          <Image
            src={'/icons/img.png'}
            alt="Застройщик"
            width={32}
            height={32}
            className="rounded-full border object-cover"
          />
          <div>
            <p className="text-sm font-medium">{property.developer}</p>
            <p className="text-xs text-gray-500">Застройщик</p>
          </div>
        </div>
      </div>
    </div>
  );
};
