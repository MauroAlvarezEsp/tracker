'use client';
import React, { useMemo } from 'react';
import dynamic from "next/dynamic";
import { useMap } from 'react-leaflet';
import { Coodinates, TrackData } from '@/types/TrackData';
import { MapComponentProps } from '@/types/MapComponentProps';

//optimization for lazy load robust components and avoid unnecessary imports
const MapContainer = dynamic(() => import("react-leaflet").then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(mod => mod.Popup), { ssr: false });


//reusable component that receives data to print markers and position
const MapComponent = ({data, mapPosition}: MapComponentProps) => {
  const SetViewOnClick = ({ lat, lng }: Coodinates) => {
    const map = useMap();
    map.setView([lat, lng]);
    return null;
  }

   //optimization to avoid recalculations
  const markers = useMemo(() => {
    return data?.map((row: TrackData, index: number) => (
      <Marker key={index} position={[row.coordinates.lat, row.coordinates.lng]}>
          <Popup>{row.number}</Popup>
      </Marker>
    ))
  },[data])

    return (
        <div className="h-[510px] w-full bg-gray-400 dark:bg-gray-800 text-gray-800 dark:text-white rounded shadow-lg p-4 mb-5">
            <h2 className="text-xl mb-4">Location Map</h2>
            <div className="h-[400px] w-full overflow-hidden">
                <MapContainer center={mapPosition} zoom={15} className="h-full w-full rounded">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {markers}
                <SetViewOnClick lat={mapPosition.lat} lng={mapPosition.lng} />
                </MapContainer>
            </div>
        </div>
    );
};

export default MapComponent;
