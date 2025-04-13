import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { useProperty } from '@/hooks/useProperty';

export const EventCard = () => {
  const { property, setProperty } = useProperty();

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
          Запуск
        </Badge>
      </div>

      <div className="flex flex-col justify-between p-4 w-full">
        <div>
          <h3 className="font-semibold text-lg">
            СТАРТ ПРОДАЖ: {property.title}
          </h3>
          <div className="grid grid-col text-sm text-gray-700 hidden md:grid">
            <p>Застройщик: {property.developer}</p>
            <p>Расположение: {property.city}</p>
            <p>Завершение строительства: {property.completionDate}</p>
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
