import Header from "./components/Header";
import "./App.css";

// Main application
export default function App() {
  // Handle search from child component
  function handleSearch(search: string) {
    console.log("Searching for:", search);
  }

  return (
    <main>
      <Header onSearch={handleSearch} />

      {/* Location information placeholder */}
      <section className="location-info" aria-label="IP location information">
        <div>
          <h2>IP Address</h2>
          <p>---</p>
        </div>

        <div>
          <h2>Location</h2>
          <p>---</p>
        </div>

        <div>
          <h2>Timezone</h2>
          <p>---</p>
        </div>

        <div>
          <h2>ISP</h2>
          <p>---</p>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="map-placeholder" aria-label="Location map">
        <p>Interactive map on the way soon!</p>
      </section>
    </main>
  );
}