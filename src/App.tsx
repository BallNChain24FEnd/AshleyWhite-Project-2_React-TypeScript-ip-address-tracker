import Header from "./components/Header";
import LocationInfo from "./components/LocationInfo";
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

      {/* Display mock location data */}
      <LocationInfo data={mockData} />

      {/* Map placeholder */}
      <section className="map-placeholder" aria-label="Location map">
        <p>Interactive map on the way soon!</p>
      </section>
    </main>
  );
}