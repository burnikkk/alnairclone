'use client';

import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { useProperty } from '@/hooks/useProperty';

const customIcon = new Icon({
  iconUrl: '/icons/square.png',
  iconSize: [18, 18],
  className: 'border-1 border-white rounded-lg',
});

const MapCard = () => {
  const { property, setProperty } = useProperty();

  const position: [number, number] = [property.longitude, property.latitude];

  return (
    <div className="rounded-xl overflow-hidden shadow border w-full">
      <div className="relative h-[300px]">
        <MapContainer
          key={`${property.latitude}-${property.longitude}`}
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
              <h2>{property.title}</h2>
              {property.city}
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="bg-gradient-to-t from-white via-white/80 to-transparent p-4">
        <p className="text-sm text-gray-500">Расположение</p>
        <p className="font-semibold">{`${property.city}`}</p>
      </div>
    </div>
  );
};

export default MapCard;
