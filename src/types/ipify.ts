// IPify API response structure
export interface IPifyData {
  ip: string;
  location: {
    city: string;
    region: string;
    country: string;
    timezone: string;
    lat: number;
    lng: number;
  };
  isp: string;
}