'use client';

import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { IProperty } from '@/types/property';

const customIcon = new Icon({
  iconUrl: '/icons/square.png',
  iconSize: [18, 18],
  className: 'border-1 border-white rounded-lg',
});

interface MapCardProps {
  property: IProperty;
}

const MapCard: React.FC<MapCardProps> = ({ property }) => {
  const { latitude, longitude, title, city } = property;

  const position: [number, number] = [latitude, longitude];

  return (
    <div className="rounded-xl overflow-hidden shadow border w-full max-w-[700px]">
      <div className="relative h-[300px]">
        <MapContainer
          key={`${latitude}-${longitude}`}
          center={position}
          zoom={15}
          scrollWheelZoom={false}
          className="h-full w-full z-0"
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          />
          <Marker position={position} icon={customIcon}>
            <Popup>
              <strong>{title}</strong>
              <br />
              {city}
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="bg-gradient-to-t from-white via-white/80 to-transparent p-4">
        <p className="text-sm text-gray-500">Расположение</p>
        <p className="font-semibold">{`${city}`}</p>
      </div>
    </div>
  );
};

export default MapCard;
