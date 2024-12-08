"use client";

import { STATIONS } from "@/lib/constants/locations";
import { StationCard } from "./station-card";

interface StationListProps {
  selectedStation: string | null;
  onStationSelect: (stationId: string) => void;
}

// Mock distances - in a real app, these would be calculated based on user's location
const MOCK_DISTANCES = {
  "1": "0.1 mi",
  "2": "0.3 mi",
  "3": "0.4 mi",
  "4": "0.2 mi"
};

export function StationList({ selectedStation, onStationSelect }: StationListProps) {
  return (
    <div className="space-y-4">
      {STATIONS.map((station) => (
        <StationCard
          key={station.id}
          id={station.id}
          name={station.name}
          distance={MOCK_DISTANCES[station.id as keyof typeof MOCK_DISTANCES]}
          umbrellas={station.umbrellas}
          address={station.address}
          isSelected={selectedStation === station.id}
          onSelect={onStationSelect}
        />
      ))}
    </div>
  );
}