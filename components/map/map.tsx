"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { TAMPA_CENTER, STATIONS } from "@/lib/constants/locations";
import { CustomMarker } from "./custom-marker";
import { MapControls } from "./map-controls";

interface MapProps {
  selectedStation: string | null;
  onStationSelect: (stationId: string) => void;
}

export default function Map({ selectedStation, onStationSelect }: MapProps) {
  return (
    <MapContainer
      center={[TAMPA_CENTER.lat, TAMPA_CENTER.lng]}
      zoom={TAMPA_CENTER.zoom}
      style={{ height: "100%", width: "100%" }}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {STATIONS.map((station) => (
        <CustomMarker
          key={station.id}
          id={station.id}
          position={[station.lat, station.lng]}
          name={station.name}
          address={station.address}
          umbrellas={station.umbrellas}
          isSelected={selectedStation === station.id}
          onSelect={onStationSelect}
        />
      ))}
      <MapControls selectedStation={selectedStation} stations={STATIONS} />
    </MapContainer>
  );
}