'use client';

import React, { createContext, ReactNode, useContext, useState } from 'react';

interface LocationContextType {
  latitude: number;
  longitude: number;
  setCoordinates: (lat: number, lng: number) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(
  undefined
);

export const LocationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [latitude, setLatitude] = useState(25.276987);
  const [longitude, setLongitude] = useState(55.296249);

  const setCoordinates = (lat: number, lng: number) => {
    setLatitude(lat);
    setLongitude(lng);
  };

  return (
    <LocationContext.Provider value={{ latitude, longitude, setCoordinates }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
