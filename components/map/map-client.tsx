"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { MapSkeleton } from "./map-skeleton";
import { StationList } from "./station-list";

// Dynamically import the Map component to avoid SSR issues
const Map = dynamic(() => import("./map"), {
  loading: () => <MapSkeleton />,
  ssr: false,
});

export function MapClient() {
  const [selectedStation, setSelectedStation] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex mt-20">
        <div className="w-1/3 p-4 overflow-y-auto border-r">
          <div className="mb-4">
            <h1 className="text-2xl font-bold mb-2">Find Umbrellas</h1>
            <p className="text-gray-600">Locate available SmartBrolly stations near USF Tampa</p>
          </div>
          <StationList onStationSelect={setSelectedStation} selectedStation={selectedStation} />
        </div>
        <div className="w-2/3 relative">
          <Map selectedStation={selectedStation} onStationSelect={setSelectedStation} />
        </div>
      </div>
    </div>
  );
}