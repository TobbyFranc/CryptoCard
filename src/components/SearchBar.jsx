import React, { useState } from "react";

const SearchBar = ({ setSelectedCoin }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${query.toLowerCase()}`);
    const data = await res.json();
    setSelectedCoin(data);
  };

  return (
    <div className="flex gap-2 mt-6">
      <input
        type="text"
        placeholder="Search coin (e.g. bitcoin)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow px-4 py-2 border rounded-md"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
