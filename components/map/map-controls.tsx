"use client";

import { useMap } from "react-leaflet";
import { useEffect } from "react";

interface MapControlsProps {
  selectedStation: string | null;
  stations: Array<{
    id: string;
    lat: number;
    lng: number;
  }>;
}

export function MapControls({ selectedStation, stations }: MapControlsProps) {
  const map = useMap();

  useEffect(() => {
    if (selectedStation) {
      const station = stations.find((s) => s.id === selectedStation);
      if (station) {
        map.setView([station.lat, station.lng], 17, {
          animate: true,
          duration: 1
        });
      }
    }
  }, [selectedStation, stations, map]);

  return null;
}