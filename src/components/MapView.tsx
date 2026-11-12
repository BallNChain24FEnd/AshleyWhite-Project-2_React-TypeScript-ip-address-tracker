import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  useMap,
} from "react-leaflet";
import L from "leaflet";

// Define map props
interface MapViewProps {
  lat: number;
  lng: number;
}

// Black location marker
const locationIcon = L.divIcon({
  className: "custom-marker",
  html: `
    <svg xmlns="http://www.w3.org/2000/svg"
      width="46" height="58" viewBox="0 0 46 58">
      <path
        d="M23 0C10.3 0 0 10.3 0 23c0 17 23 35 23 35s23-18 23-35C46 10.3 35.7 0 23 0Z"
        fill="#000000"
      />
      <circle cx="23" cy="23" r="9" fill="#FFFFFF"/>
    </svg>
  `,
  iconSize: [46, 58],
  iconAnchor: [23, 58],
  popupAnchor: [0, -58],
});

// Update existing map location
function MapUpdater({ lat, lng }: MapViewProps) {
  const map = useMap();

  useEffect(() => {
    // Move map without recreating it
    map.setView([lat, lng], 13, {
      animate: false,
    });
  }, [map, lat, lng]);

  return null;
}

// Map component
export default function MapView({ lat, lng }: MapViewProps) {
  const position: [number, number] = [lat, lng];

  return (
    <section className="map-section" aria-label="IP location map">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        dragging={false}
        doubleClickZoom={false}
        touchZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        {/* Update map when coordinates change */}
        <MapUpdater lat={lat} lng={lng} />

        {/* OpenStreetMap tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

                {/* Marker follows updated coordinates */}
        <Marker position={position} icon={locationIcon}>
          <Tooltip direction="top" offset={[0, -30]}>
            Approximate IP Location
          </Tooltip>
        </Marker>
      </MapContainer>
    </section>
  );
}