'use client';

import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { Icon } from 'leaflet';
import Image from 'next/image';
import { useProperties } from '@/hooks/useProperties';
import { Link } from '@/i18n/navigation';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { useFilters } from '@/hooks/useFilters';

const customIcon = new Icon({
  iconUrl: '/icons/square.png',
  iconSize: [18, 18],
  className: 'border-1 border-white rounded-lg',
});

const Map: React.FC = () => {
  const { filters } = useFilters();
  const { data: properties } = useProperties();

  return (
    <div className="w-svw h-svh">
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

        <MarkerClusterGroup chunkedLoading>
          {properties?.map((property) => {
            return (
              <Marker
                key={property.id}
                position={[property.latitude, property.longitude]}
                icon={customIcon}
              >
                <Popup>
                  <Link href={`/property_page/${property.id}`}>
                    <div className="flex gap-2 w-[300px] bg-white rounded-lg overflow-hidden">
                      <div className="relative">
                        <Image
                          src={'/icons/img.png'}
                          alt={property.title}
                          width={100}
                          height={75}
                          objectFit="contain"
                          className="rounded-lg w-[100px] h-[75px]"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center">
                        <h3 className="text-sm font-semibold">
                          {property.title}
                        </h3>
                        <p className="text-xs text-gray-600">
                          {property.developer}
                        </p>
                      </div>
                    </div>
                  </Link>
                </Popup>
              </Marker>
            );
          })}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default Map;
