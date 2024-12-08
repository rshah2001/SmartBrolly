import { Button } from "@/components/ui/button";
import { MapPin, Umbrella } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StationCardProps {
  id: string;
  name: string;
  distance: string;
  umbrellas: number;
  address: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export function StationCard({
  id,
  name,
  distance,
  umbrellas,
  address,
  isSelected,
  onSelect,
}: StationCardProps) {
  return (
    <Card
      className={`p-4 cursor-pointer transition-colors rounded-2xl ${
        isSelected ? "border-blue-500" : ""
      }`}
      onClick={() => onSelect(id)}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <MapPin className="h-4 w-4 mr-1" />
            {address}
          </div>
          <div className="text-sm text-gray-600 mt-1">
            {distance} from your location
          </div>
        </div>
        <div className="flex items-center">
          <Umbrella className="h-4 w-4 mr-1 text-blue-600" />
          <span className="font-medium">{umbrellas}</span>
        </div>
      </div>
      <Button className="w-full mt-3 rounded-full">
        Reserve Umbrella
      </Button>
    </Card>
  );
}