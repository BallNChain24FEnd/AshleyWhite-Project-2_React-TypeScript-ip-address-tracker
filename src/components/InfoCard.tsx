// Define card props
interface InfoCardProps {
  title: string;
  value: string;
}

// Reusable information card
export default function InfoCard({ title, value }: InfoCardProps) {
  return (
    <div className="info-card">
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  );
}