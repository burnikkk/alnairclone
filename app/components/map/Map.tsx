'use client';

import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLocation } from '@/app/components/contexts/LocationContext';

export const Map: React.FC = () => {
  const { latitude, longitude } = useLocation();

  return (
    <MapContainer
      key={`${latitude}-${longitude}`}
      center={[latitude, longitude]}
      zoom={10}
      className="relative w-full h-full z-0"
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
      />
    </MapContainer>
  );
};
