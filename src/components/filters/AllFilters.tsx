'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import React, { FC, PropsWithChildren, useState } from 'react';
import { IProperty } from '@/types/property';
import { Histogram } from '@/components/filters/filterParts/histogram';

export const AllFilters: FC<PropsWithChildren> = ({ children }) => {
  const [properties, setProperties] = useState<IProperty[]>([]);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:min-w-[400px] md:min-w-[600px] lg:min-w-[850px] p-6 border-none">
        <DialogHeader className="bg-gray-200 rounded-lg p-6">
          <DialogTitle className="font-semibold text-2xl ">
            Поиск среди 1982 проектов в{' '}
            <p className="text-[#819]">
              {properties[0]?.city || 'неизвестном городе'}
            </p>
          </DialogTitle>
        </DialogHeader>
        <Histogram />
      </DialogContent>
    </Dialog>
  );
};
