"use client";

import { UmbrellaIcon } from "lucide-react";

export function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="animate-bounce">
        <UmbrellaIcon className="h-16 w-16 text-blue-600" />
      </div>
      <div className="mt-4">
        <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="w-full h-full bg-blue-600 rounded-full animate-loading-bar" />
        </div>
      </div>
    </div>
  );
}