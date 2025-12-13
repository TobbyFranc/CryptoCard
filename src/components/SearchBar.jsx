import React, { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ setSelectedCoin, setSearchQuery }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const wrapperRef = useRef(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const fetchSuggestions = async (value) => {
    if (!value.trim()) {
      setSuggestions([]);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${value.toLowerCase()}`
      );
      const data = await res.json();
      setSuggestions(data.coins.slice(0, 5));
    } catch (err) {
      console.error("Error fetching suggestions:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim() === "") {
      setSearchQuery("");
    }
    fetchSuggestions(value);
  };

  const handleSelect = async (coinId) => {
    try {
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
      const coinData = await res.json();

      const formattedCoin = {
        id: coinData.id,
        name: coinData.name,
        symbol: coinData.symbol,
        image: coinData.image.small,
        current_price: coinData.market_data.current_price.usd,
        market_cap: coinData.market_data.market_cap.usd,
        ath: coinData.market_data.ath.usd,
        atl: coinData.market_data.atl.usd,
        total_volume: coinData.market_data.total_volume.usd,
        price_change_percentage_24h:
          coinData.market_data.price_change_percentage_24h,
      };

      setSelectedCoin(formattedCoin);
      localStorage.setItem("lastCoin", formattedCoin.id);
      setQuery("");
      setSuggestions([]); // clear suggestions after selection
      setSearchQuery(""); // reset search filter
    } catch (err) {
      console.error("Error selecting coin:", err);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(query);
    setSuggestions([]);
  };

  return (
    <div ref={wrapperRef} className="relative max-w-lg mx-auto">
      <form onSubmit={handleSearch} className="flex items-center gap-2">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search coin..."
            value={query}
            onChange={handleChange}
            onBlur={() => setTimeout(() => setSuggestions([]), 100)} // delay to allow click on suggestions
            className="w-full pl-10 pr-4 py-2 rounded-md bg-[var(--card-bg-color)] text-[var(--secondary-text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
          {loading && (
            <div className="absolute right-3 top-3 w-4 h-4 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin"></div>
          )}
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md font-semibold hover:bg-[var(--accent)]/80 transition cursor-pointer shadow"
        >
          Search
        </button>
      </form>

      {suggestions.length > 0 && (
        <ul className="absolute z-10 mt-2 w-full bg-[var(--card-bg-color)] rounded-md shadow-lg max-h-60 overflow-y-auto">
          {suggestions.map((coin) => (
            <li
              key={coin.id}
              onClick={() => handleSelect(coin.id)}
              className="px-4 py-2 cursor-pointer hover:bg-[var(--accent)]/20 flex items-center gap-2"
            >
              <img src={coin.thumb} alt={coin.name} className="w-5 h-5" />
              <span className="font-medium">{coin.name}</span>
              <span className="text-xs text-gray-400 uppercase">
                ({coin.symbol})
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
