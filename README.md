# Project II — React TypeScript IP Address Tracker

A responsive IP Address Tracker built with React, TypeScript, Vite, and React Leaflet. Users can search for an IP address or domain name to view its approximate geographic location and related information on an interactive map.

**Live Website:** https://ip-address-tracker-project-2.vercel.app

**GitHub Repository:** https://github.com/BallNChain24FEnd/AshleyWhite-Project-2_React-TypeScript-ip-address-tracker

## What This Project Features

- Search for IP addresses and domain names.
- Display IP address, location, timezone, and ISP information.
- Show approximate locations on an interactive Leaflet map with a custom marker.
- Display loading, success, and error messages.
- Provide a responsive layout for mobile, tablet, and desktop screens.

## The Technologies

- React and TypeScript
- Vite
- HTML and CSS
- React Leaflet and OpenStreetMap
- IPify Geolocation API
- Vercel
- Git and GitHub

## React Development Requirements

**1. Component Architecture**

The application uses reusable components, including `SearchForm`, `LocationInfo`, `InfoCard`, `StatusMessage`, and the map components. TypeScript defines the expected props, and the `children` prop allows components to display reusable content.

**2. State Management**

React's `useState` manages search input, location information, loading status, and error messages. State updates allow the interface to respond to user interactions without directly changing the page.

**3. Side Effects and Data Fetching**

The application uses `useEffect` and `fetch()` to retrieve location information and update the map. Loading and error handling help users understand what happens during a search.

**4. Core React Features**

The application demonstrates controlled inputs, conditional rendering, props, reusable components, and React hooks. Where lists are rendered, stable keys help React identify individual elements.

**5. Code Reusability**

The custom `useIPLocation` hook organizes location requests and related state. Reusable components reduce repeated code.

**6. Responsive Design**

CSS media queries adjust the layout for mobile phones, tablets, and desktop screens. The search bar, information cards, and map adapt to different screen sizes.

**7. Best Practices**

The project uses TypeScript, readable code, short comments, Git commits, error handling, a production build, and Vercel deployment. The IPify API key is kept outside the public frontend code.

## Additional Concepts Used and Learned

Some features required additional research beyond the React lessons:

- **`useMap()` and `MapUpdater`:** React Leaflet tools used to reposition the map when new location coordinates are received.
- **Vercel Serverless Functions:** The `api/lookup.js` endpoint requests location data from IPify on the server rather than exposing the API key in the browser.
- **Environment Variables:** `IPIFY_API_KEY` is stored in an ignored local environment file and configured securely in Vercel.
- **`encodeURIComponent()`:** A built-in JavaScript function that safely formats search values for use in a URL.
- **`AbortController`:** Helps cancel outdated API requests when searches change or a component cleans up.
- **React `children`:** Allows a component such as `StatusMessage` to display different content between its opening and closing tags.
- **TypeScript Interfaces:** Describe the expected structure of component props and location data, helping identify mistakes during development.

## Getting Started

1. Clone the GitHub repository.
2. Open the project folder in VS Code.
3. Install dependencies:

   `npm install`

4. Start the Vite development server:

   `npm run dev`

5. Open the local address displayed in the terminal.

**API Setup:** Live IP lookups use the Vercel serverless endpoint. Configure an `IPIFY_API_KEY` environment variable privately, then use `npx vercel dev` for local testing of the complete application. Running Vite alone does not provide the Vercel API endpoint.

**Production Build:**

`npm run build`

## Notes

IP geolocation provides an approximate location, not an exact physical address. Results can vary depending on the IP address and the information returned by IPify.

## Resources

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vite.dev/guide/)
- [React Leaflet Documentation](https://react-leaflet.js.org/)
- [Leaflet Documentation](https://leafletjs.com/)
- [OpenStreetMap](https://www.openstreetmap.org/)
- [IPify](https://www.ipify.org/)
- [Vercel Documentation](https://vercel.com/docs)
- [Frontend Mentor](https://www.frontendmentor.io/)
- [Google Search](https://www.google.com/)

## Reflection

This project helped me practice React components, TypeScript, state management, data fetching, and responsive design. I also learned how to connect a React application to an external API securely and deploy a working website through Vercel.

See `reflection.md` for my full project reflection.