import { useEffect, useState } from "react";
import type { IPifyData } from "../types/ipify";

// Custom hook for IP location
export default function useIPLocation(search: string) {
  // Store API information
  const [data, setData] = useState<IPifyData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Do not fetch until user searches
    if (!search) return;

    // Track this request
    const controller = new AbortController();

    async function getLocation() {
      setLoading(true);
      setError("");

      try {
        // Call our secure API function
        const response = await fetch(
          `/api/lookup?search=${encodeURIComponent(search)}`,
          { signal: controller.signal }
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Search failed.");
        }

        // Save successful result
        setData(result as IPifyData);
      } catch (err) {
        if (controller.signal.aborted) return;

        setError(
          err instanceof Error ? err.message : "Search failed."
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    getLocation();

    // Cancel outdated requests
    return () => controller.abort();
  }, [search]);

  return { data, loading, error };
}
