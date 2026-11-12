import { useState } from "react";
import type { SyntheticEvent } from "react";
import arrowIcon from "../assets/icon-arrow.svg";

// Define component props
interface SearchFormProps {
  onSearch: (search: string) => void;
}

// Search form component
export default function SearchForm({ onSearch }: SearchFormProps) {
  // Store input and error
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  // Validate IP address or domain
  function isValidSearch(value: string) {
    // IPv4 address pattern
    const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;

    // Domain pattern
    const domainPattern =
      /^(?!-)[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;

    if (ipPattern.test(value)) {
      // Check each IP number (0-255)
      return value.split(".").every(num => Number(num) <= 255);
    }

    return domainPattern.test(value);
  }

  // Handle form submission
  function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const value = search.trim();

    if (!value || !isValidSearch(value)) {
      setError("Please enter a valid IP address or domain.");
      return;
    }

    // Clear error and send search
    setError("");
    onSearch(value);
  }

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <label htmlFor="ip-search" className="sr-only">
          Search for an IP address or domain
        </label>

        <input
          id="ip-search"
          type="text"
          placeholder="Search for any IP address or domain"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setError("");
          }}
          aria-invalid={error ? true : false}
          aria-describedby={error ? "search-error" : undefined}
        />

        <button type="submit" aria-label="Search">
          <img src={arrowIcon} alt="" />
        </button>
      </form>

      {/* Display validation error */}
      {error && (
        <p id="search-error" className="error-message" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}