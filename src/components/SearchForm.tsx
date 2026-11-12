import { useState } from "react";
import type { FormEvent } from "react";
import arrowIcon from "../assets/icon-arrow.svg";

// Define component props
interface SearchFormProps {
  onSearch: (search: string) => void;
}

// Search form component
export default function SearchForm({ onSearch }: SearchFormProps) {
  // Store search input
  const [search, setSearch] = useState("");

  // Handle form submission
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const value = search.trim();

    if (!value) return;

    onSearch(value);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label htmlFor="ip-search" className="sr-only">
        Search for an IP address or domain
      </label>

      <input
        id="ip-search"
        type="text"
        placeholder="Search for any IP address or domain"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button type="submit" aria-label="Search">
        <img src={arrowIcon} alt="" />
      </button>
    </form>
  );
}