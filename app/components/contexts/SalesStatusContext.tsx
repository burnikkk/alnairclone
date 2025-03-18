'use client';

import React, { createContext, ReactNode, useContext, useState } from "react";

interface SalesStatusContextType {
  statusType: string;
  setStatusType: (statusType: string) => void;
}

const statusTypeContext = createContext<SalesStatusContextType | undefined>(
  undefined
);

export const SalesStatusProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {

  const [statusType, setSalesStatusState] = useState<string>("");

  const setStatusType = (houseT: string) => {
    setSalesStatusState(statusType);
  };

  return (
    <statusTypeContext.Provider value={{ statusType, setStatusType }}>
      {children}
    </statusTypeContext.Provider>
  );
};

export const useStatusType = () => {
  const context = useContext(statusTypeContext);
  if (!context) {
    throw new Error('useHouseType must be used within a HouseTypeProvider');
  }
  return context;
};

