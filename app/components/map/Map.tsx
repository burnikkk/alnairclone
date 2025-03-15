'use client';

import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  latitude?: number;
  longitude?: number;
  zoom?: number;
}

export const Map: React.FC<MapProps> = ({
  latitude = 25.080033,
  longitude = 55.44259,
  zoom = 10,
}) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={zoom}
      className="relative w-full h-full z-0"
    >
      <>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />
        {/*<Marker position={[latitude, longitude]}>*/}
        {/*<Popup>Это ваша локация!</Popup>*/}
        {/*</Marker>*/}
      </>
    </MapContainer>
  );
};
