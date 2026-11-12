import SearchForm from "./SearchForm";

// Define header props
interface HeaderProps {
  onSearch: (search: string) => void;
}

// Header component
export default function Header({ onSearch }: HeaderProps) {
  return (
    <header className="header">
      <h1>IP Address Tracker</h1>

      {/* Search component */}
      <SearchForm onSearch={onSearch} />
    </header>
  );
}