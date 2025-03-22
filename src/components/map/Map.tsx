'use client';

import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useFilters } from '@/hooks/useFilters';

const Map: React.FC = () => {
  const { filters } = useFilters();

  return (
    <div className={`w-svw h-svh hidden md:block`}>
      <MapContainer
        key={`${filters.latitude}-${filters.longitude}`}
        center={[Number(filters.latitude), Number(filters.longitude)]}
        zoom={11}
        className="relative w-full h-full z-0"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />
      </MapContainer>
    </div>
  );
};

export default Map;
