import React from 'react';
import { Badge } from '@/src/components/ui/badge';
import Image from 'next/image';
import usePropertyImage from '@/src/hooks/usePropertyImages';

interface CoverImageProps {
  title: string;
  type: string;
  isRecommended: boolean;
}

export const CoverImage = ({ title, type, isRecommended }: CoverImageProps) => {
  const { imageUrl } = usePropertyImage(type);

  return (
    <div className="relative w-full h-[220px] mb-28">
      {isRecommended && (
        <Badge className="absolute top-3 left-3 bg-[#edeef7] text-[#4f5fd9] rounded-full text-sm font-normal z-10">
          Рекомендовано
        </Badge>
      )}
      <Image
        src={imageUrl || '/CardComponents/img.png'}
        alt={title || 'нет данных'}
        layout="fill"
        objectFit="cover"
        className="p-1 rounded-2xl z-0"
      />
    </div>
  );
};
