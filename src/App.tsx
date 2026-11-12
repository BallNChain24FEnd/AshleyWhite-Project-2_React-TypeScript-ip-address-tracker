import { useState } from "react";
import Header from "./components/Header";
import LocationInfo from "./components/LocationInfo";
import MapView from "./components/MapView";
import type { IPifyData } from "./types/ipify";
import "./App.css";

// Mock location 1
const californiaData: IPifyData = {
  ip: "8.8.8.8",
  location: {
    city: "Mountain View",
    region: "California",
    country: "US",
    timezone: "-07:00",
    lat: 37.386,
    lng: -122.0838,
  },
  isp: "Google LLC",
};

// Mock location 2
const newYorkData: IPifyData = {
  ip: "192.0.2.1",
  location: {
    city: "New York",
    region: "New York",
    country: "US",
    timezone: "-05:00",
    lat: 40.7128,
    lng: -74.006,
  },
  isp: "Example ISP",
};

// Main application
export default function App() {
  // Store selected location
  const [locationData, setLocationData] =
    useState<IPifyData>(californiaData);

  // Handle search without API
  function handleSearch(search: string) {
    console.log("Searching for:", search);
  }

  return (
    <main>
      <Header onSearch={handleSearch} />

      {/* Temporary mock testing buttons */}
      <div className="mock-buttons">
        <button onClick={() => setLocationData(californiaData)}>
          California
        </button>

        <button onClick={() => setLocationData(newYorkData)}>
          New York
        </button>
      </div>

      {/* Display selected location */}
      <LocationInfo data={locationData} />

      {/* Update map coordinates */}
      <MapView
        lat={locationData.location.lat}
        lng={locationData.location.lng}
      />
    </main>
  );
}