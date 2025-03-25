'use client';

import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useFilters } from '@/hooks/useFilters';
import { formatCurrency } from '@/lib/utils';
import { convertPrice } from '@/utils/price';
import { useSettings } from '@/hooks/useSettings';
import { Icon } from 'leaflet';
import { IProperty } from '@/types/property';
import Image from 'next/image';

const customIcon = new Icon({
  iconUrl: '/icons/square.png',
  iconSize: [38, 38],
});

const Map: React.FC = () => {
  const { filters } = useFilters();
  const { selectedCurrency } = useSettings();
  const [properties, setProperties] = useState<IProperty[]>([]);

  useEffect(() => {
    const query = new URLSearchParams({
      minPrice: filters.minPrice,
      maxPrice: filters.maxPrice,
    }).toString();

    fetch(`/api/properties?${query}`)
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error('Ошибка загрузки данных:', error));
  }, [filters.minPrice, filters.maxPrice]);

  return (
    <div className="w-svw h-svh hidden md:block">
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

        {properties.map((property) => {
          console.log('property.imageUrl', property.imageUrl);
          return (
            <Marker
              key={property.id}
              position={[property.latitude, property.longitude]}
              icon={customIcon}
            >
              <Popup>
                <div className="text-center">
                  <Image
                    width={100}
                    height={100}
                    src={'/icons/img.png'}
                    alt={property.title}
                    className="w-full h-[100px] rounded-lg"
                  />
                  <h3 className="text-lg font-semibold">{property.title}</h3>
                  <p className="text-sm text-gray-600">{property.city}</p>
                  <p className="text-md font-bold">
                    {formatCurrency(
                      convertPrice(property.price, selectedCurrency)
                    )}{' '}
                    {selectedCurrency}
                  </p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
