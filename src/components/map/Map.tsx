'use client';

import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useFilters } from '@/hooks/useFilters';
import L from 'leaflet';
import { formatCurrency } from '@/lib/utils';
import { convertPrice } from '@/utils/price';
import { useSettings } from '@/hooks/useSettings';

const customIcon = new L.Icon({
  iconUrl: './marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

interface IProperty {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  latitude: number;
  longitude: number;
  city: string;
}

const Map: React.FC = () => {
  const { filters } = useFilters();
  const { selectedCurrency, selectedMeasure } = useSettings();
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

        {properties.map((property) => (
          <Marker
            key={property.id}
            position={[property.latitude, property.longitude]}
            icon={customIcon}
          >
            <Popup>
              <div className="text-center">
                <img
                  src={property.imageUrl || '/CardComponents/img.png'}
                  alt={property.title}
                  className="w-32 h-20 object-cover rounded"
                  referrerPolicy="no-referrer"
                />
                <h3 className="text-lg font-semibold">{property.title}</h3>
                <p className="text-sm text-gray-600">{property.city}</p>
                <p className="text-md font-bold">
                  {formatCurrency(
                    convertPrice(
                      property.price,
                      selectedCurrency,
                      selectedMeasure
                    )
                  )}{' '}
                  {selectedCurrency}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
