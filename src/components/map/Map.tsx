'use client';

import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useFilters } from '@/hooks/useFilters';
import { useSettings } from '@/hooks/useSettings';
import { Icon } from 'leaflet';
import Image from 'next/image';
import { convertPrice } from '@/utils/convertPrice';
import { formatCurrency } from '@/lib/utils';
import { useProperties } from '@/hooks/useProperties';
import { useCurrencyRates } from '@/hooks/useCurrencyRates';

const customIcon = new Icon({
  iconUrl: '/icons/square.png',
  iconSize: [18, 18],
  className: 'border-1 border-white rounded-lg',
});

const Map: React.FC = () => {
  const { filters } = useFilters();
  const { selectedCurrency } = useSettings();
  const { data: properties } = useProperties();
  const { rates: exchangeRates } = useCurrencyRates(selectedCurrency);

  return (
    <div className="pl-8 md:pl-0 w-svw h-svh">
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

        {properties?.map((property) => {
          return (
            <Marker
              key={property.id}
              position={[property.latitude, property.longitude]}
              icon={customIcon}
            >
              <Popup>
                <div className="flex w-[250px] p-0 bg-white rounded-2xl overflow-hidden">
                  <div className="relative w-1/2 h-[100px]">
                    <Image
                      src={'/icons/img.png'}
                      alt={property.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-2xl"
                    />
                  </div>

                  <div className="w-1/2 flex flex-col justify-center px-4">
                    <h3 className="text-sm font-semibold !m-0">
                      {property.title}
                    </h3>
                    <p className="text-sm text-gray-600 !m-0">
                      {property.city}
                    </p>
                    <p className="text-md font-bold !m-0">
                      {formatCurrency(
                        convertPrice(
                          property.price,
                          selectedCurrency,
                          exchangeRates
                        )
                      )}{' '}
                      {selectedCurrency}
                    </p>
                  </div>
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
