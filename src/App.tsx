import Header from "./components/Header";
import LocationInfo from "./components/LocationInfo";
import MapView from "./components/MapView";
import type { IPifyData } from "./types/ipify";
import "./App.css";

// Temporary mock IPify data
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

// Main application
export default function App() {
  // Handle search from child component
  function handleSearch(search: string) {
    console.log("Searching for:", search);
  }

  return (
    <main>
      <Header onSearch={handleSearch} />

      {/* Display location information */}
      <LocationInfo data={mockData} />

      {/* Display Leaflet map */}
      <MapView
        lat={mockData.location.lat}
        lng={mockData.location.lng}
      />
    </main>
  );
}