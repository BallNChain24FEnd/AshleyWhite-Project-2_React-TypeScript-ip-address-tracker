import InfoCard from "./InfoCard";
import type { IPifyData } from "../types/ipify";

// Define location props
interface LocationInfoProps {
  data: IPifyData;
}

// Display location information
export default function LocationInfo({ data }: LocationInfoProps) {
  // Create information list
  const info = [
    { title: "IP Address", value: data.ip },
    {
      title: "Location",
      value: `${data.location.city}, ${data.location.region}`,
    },
    {
      title: "Timezone",
      value: `UTC ${data.location.timezone}`,
    },
    { title: "ISP", value: data.isp },
  ];

  return (
    <section className="location-info" aria-label="IP location information">
      {/* Render reusable cards */}
      {info.map((item) => (
        <InfoCard
          key={item.title}
          title={item.title}
          value={item.value}
        />
      ))}
    </section>
  );
}