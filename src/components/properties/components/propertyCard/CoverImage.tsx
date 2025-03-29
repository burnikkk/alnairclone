import React from 'react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import usePropertyImage from '@/hooks/usePropertyImages';
import { salesStatuses } from '@/utils/salesStatuses';

interface CoverImageProps {
  title: string;
  type: string;
  isRecommended: boolean;
  salesStatusType?: string;
}

export const CoverImage = ({
  title,
  type,
  isRecommended,
  salesStatusType,
}: CoverImageProps) => {
  const { imageUrl } = usePropertyImage(type);

  const getSalesStatusLabel = (status: string) =>
    salesStatuses[status] || 'Неизвестный статус';

  const getBadgeClass = (status: string) => {
    if (status === 'reg') return 'bg-[#819] text-white';
    if (status === 'startsales') return 'bg-[#510] text-white';
    if (status === 'insales') return 'bg-[#050] text-white';
    return 'bg-[#108192] text-white';
  };

  return (
    <div className="relative w-full h-[220px] mb-30">
      <div className="absolute top-3 left-3   grid items-start gap-2">
        {isRecommended && (
          <Badge className=" bg-[#edeef7] text-[#4f5fd9] rounded-full text-xs font-normal z-10 uppercase">
            Рекомендовано
          </Badge>
        )}
        {salesStatusType && salesStatusType !== 'all' && (
          <Badge
            className={`rounded-full text-xs font-normal z-10 uppercase ${getBadgeClass(salesStatusType)}`}
          >
            {getSalesStatusLabel(salesStatusType)}
          </Badge>
        )}
      </div>
      <Image
        src={imageUrl || '/icons/img.png'}
        alt={title || 'нет данных'}
        layout="fill"
        objectFit="cover"
        className="p-1 rounded-2xl z-0"
      />
    </div>
  );
};
