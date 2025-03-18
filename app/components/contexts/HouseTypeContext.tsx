'use client';

import React, { createContext, ReactNode, useContext, useState } from "react";

interface HouseTypeContextType {
  houseType: string;
  setHouseType: (houseType: string) => void;
}

const HouseTypeContext = createContext<HouseTypeContextType | undefined>(
  undefined
);

export const HouseTypeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {

  const [houseType, setHouseTypeState] = useState<string>("");

  const setHouseType = (houseType: string) => {
    setHouseTypeState(houseType);
  };

  return (
    <HouseTypeContext.Provider value={{ houseType, setHouseType }}>
      {children}
    </HouseTypeContext.Provider>
  );
};

export const useHouseType = () => {
  const context = useContext(HouseTypeContext);
  if (!context) {
    throw new Error('useHouseType must be used within a HouseTypeProvider');
  }
  return context;
};

