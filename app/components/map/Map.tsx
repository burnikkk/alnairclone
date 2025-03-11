'use client';

import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from '@/app/page.module.css';

interface MapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
}

export const Map: React.FC<MapProps> = ({
  latitude = 48.8629,
  longitude = 2.64,
  zoom = 13,
}) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={zoom}
      className={styles['leaflet-container']}
    >
      <>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/*<Marker position={[latitude, longitude]}>*/}
        {/*<Popup>Это ваша локация!</Popup>*/}
        {/*</Marker>*/}
      </>
    </MapContainer>
  );
};
