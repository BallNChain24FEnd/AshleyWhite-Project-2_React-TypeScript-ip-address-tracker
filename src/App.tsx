import { useState } from "react";
import Header from "./components/Header";
import LocationInfo from "./components/LocationInfo";
import MapView from "./components/MapView";
import useIPLocation from "./hooks/useIPLocation";
import type { IPifyData } from "./types/ipify";
import "./App.css";

// Starting location for preview
const mockData: IPifyData = {
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

export default function App() {
  // Store submitted search
  const [search, setSearch] = useState("");

  // Get location from custom hook
  const { data, loading, error } = useIPLocation(search);

  // Use API result or starting location
  const locationData = data || mockData;

  // Search only when submitted
  function handleSearch(value: string) {
    setSearch(value);
  }

  return (
    <main>
      <Header onSearch={handleSearch} />

      {/* Show search progress */}
      {loading && (
        <p className="search-status" role="status">
          Searching for location...
        </p>
      )}

      {/* Show search errors */}
      {error && (
        <p className="search-status" role="alert">
          {error}
        </p>
      )}

      {/* Display location information */}
      <LocationInfo data={locationData} />

      {/* Update map automatically */}
      <MapView
        lat={locationData.location.lat}
        lng={locationData.location.lng}
      />
    </main>
  );
}
