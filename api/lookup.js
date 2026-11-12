/* Secure IPify lookup */
export default async function handler(request, response) {
  // Allow GET requests only
  if (request.method !== "GET") {
    return response.status(405).json({
      error: "Method not allowed",
    });
  }

  // Get search value
  const search = String(request.query.search || "").trim();

  if (!search || search.length > 253) {
    return response.status(400).json({
      error: "Enter a valid IP address or domain.",
    });
  }

  // Check private API key
  const apiKey = process.env.IPIFY_API_KEY;

  if (!apiKey) {
    return response.status(500).json({
      error: "API key is not configured.",
    });
  }

  // Build secure IPify URL
  const url = new URL("https://geo.ipify.org/api/v2/country,city");
  url.searchParams.set("apiKey", apiKey);

  const isIP = /^[\d.]+$/.test(search);
  url.searchParams.set(isIP ? "ipAddress" : "domain", search);

  try {
    // Request location from IPify
    const result = await fetch(url);
    const data = await result.json();

    if (!result.ok) {
      return response.status(502).json({
        error: "IPify could not complete the lookup.",
      });
    }

    // Check required location data
    if (
      !data.ip ||
      !Number.isFinite(data.location?.lat) ||
      !Number.isFinite(data.location?.lng)
    ) {
      return response.status(502).json({
        error: "Location data is unavailable.",
      });
    }

    // Return safe location information
    response.setHeader("Cache-Control", "no-store");

    return response.status(200).json({
      ip: data.ip,
      location: {
        city: data.location.city || "",
        region: data.location.region || "",
        country: data.location.country || "",
        timezone: data.location.timezone || "",
        lat: data.location.lat,
        lng: data.location.lng,
      },
      isp: data.isp || "",
    });
  } catch {
    return response.status(502).json({
      error: "Unable to connect to IPify.",
    });
  }
}
