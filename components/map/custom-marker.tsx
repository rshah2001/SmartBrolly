"use client";

import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { Button } from "@/components/ui/button";

// Custom marker icons
const defaultIcon = new Icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const selectedIcon = new Icon({
  iconUrl: "/marker-selected.png",
  iconSize: [35, 51],
  iconAnchor: [17, 51],
  popupAnchor: [1, -34],
});

interface CustomMarkerProps {
  id: string;
  position: [number, number];
  name: string;
  address: string;
  umbrellas: number;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export function CustomMarker({
  id,
  position,
  name,
  address,
  umbrellas,
  isSelected,
  onSelect,
}: CustomMarkerProps) {
  return (
    <Marker
      position={position}
      icon={isSelected ? selectedIcon : defaultIcon}
      eventHandlers={{
        click: () => onSelect(id),
      }}
    >
      <Popup>
        <div className="p-2 min-w-[200px]">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-600 mt-1">{address}</p>
          <p className="text-sm font-medium text-blue-600 mt-2">
            {umbrellas} umbrellas available
          </p>
          <Button 
            className="w-full mt-3 rounded-full text-sm"
            onClick={() => onSelect(id)}
          >
            Reserve Here
          </Button>
        </div>
      </Popup>
    </Marker>
  );
}