import { useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div className="relative">
      <input
        className="w-40 lg:w-79.5 h-8.5 bg-background border border-gray-100 rounded-lg px-4 py-2.25 placeholder:text-secondary pl-10"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearch}
      />
      <img
        className="absolute left-4.5 top-2.5"
        src="/assets/icons/header/search.svg"
        alt="Search"
      />
    </div>
  );
};

export default Search;
