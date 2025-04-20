'use client';

import { IProperty } from '@/types/property';
import { createContextHook } from '@/hooks/createContextHook';

let _property: IProperty;

const useInternalPropertyContext = () => ({
  property: _property,
});

export const usePropertyContext = createContextHook(useInternalPropertyContext);

export const PropertyContextProvider = ({
  property,
  children,
}: {
  property: IProperty;
  children: React.ReactNode;
}) => {
  _property = property;
  return <usePropertyContext.Provider>{children}</usePropertyContext.Provider>;
};
