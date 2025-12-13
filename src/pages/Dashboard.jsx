import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LandingNavbar from "../components/Nav";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import CoinCard from "../components/CoinCard";
import ChartSection from "../components/ChartSection";
import { FiArrowLeft } from "react-icons/fi";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true"
      );
      const data = await res.json();
      setCoins(data);

      const lastCoin = localStorage.getItem("lastCoin");
      if (lastCoin) {
        const found = data.find((c) => c.id === lastCoin);
        if (found) setSelectedCoin(found);
      } else {
        const btc = data.find((c) => c.id === "bitcoin");
        setSelectedCoin(btc);
      }
    } catch (err) {
      console.error("Error fetching coin data:", err);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleSelectCoin = (coin) => {
    setSelectedCoin(coin);
    localStorage.setItem("lastCoin", coin.id);
  };

  // Filter coins
  const filteredCoins = coins.filter((coin) => {
    if (filter === "gainers") return coin.price_change_percentage_24h > 0;
    if (filter === "losers") return coin.price_change_percentage_24h < 0;
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[var(--main-bg-color)]">
      <LandingNavbar />

      <main className="flex-grow w-full px-6 py-8">
        {/* Back button at edge */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-24 inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md hover:bg-[var(--accent)]/80 transition font-semibold shadow"
        >
          <FiArrowLeft /> Back
        </button>

        {/* Wide Chart Section */}
        {selectedCoin && (
          <div className="mt-24 w-full px-4">
            <ChartSection coin={selectedCoin} large />

            {/* Coin details */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-[var(--secondary-text-color)]">
              <div className="p-4 rounded-lg bg-[var(--card-bg-color)] shadow">
                <h4 className="font-semibold text-[var(--accent)]">Market Cap</h4>
                <p>${selectedCoin.market_cap.toLocaleString()}</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--card-bg-color)] shadow">
                <h4 className="font-semibold text-[var(--accent)]">All Time High</h4>
                <p>${selectedCoin.ath.toLocaleString()}</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--card-bg-color)] shadow">
                <h4 className="font-semibold text-[var(--accent)]">All Time Low</h4>
                <p>${selectedCoin.atl.toLocaleString()}</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--card-bg-color)] shadow">
                <h4 className="font-semibold text-[var(--accent)]">Current Price</h4>
                <p>${selectedCoin.current_price.toLocaleString()}</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--card-bg-color)] shadow">
                <h4 className="font-semibold text-[var(--accent)]">24h Volume</h4>
                <p>${selectedCoin.total_volume.toLocaleString()}</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--card-bg-color)] shadow">
                <h4 className="font-semibold text-[var(--accent)]">Performance Prediction</h4>
                <p className="flex items-center gap-2">
  {selectedCoin.price_change_percentage_24h > 0 ? (
    <>
      {/* Bullish SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-green-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
      <span>Likely bullish trend</span>
    </>
  ) : (
    <>
      {/* Bearish SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
      <span>Possible bearish trend</span>
    </>
  )}
</p>

              </div>
            </div>
          </div>
        )}

        {/* Search Section */}
        <div className="mt-12 max-w-2xl mx-auto">
          <SearchBar setSelectedCoin={handleSelectCoin} />
        </div>

        {/* Filter Card */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-md font-semibold shadow cursor-pointer ${
              filter === "all"
                ? "bg-[var(--accent)] text-[var(--main-bg-color)]"
                : "bg-[var(--card-bg-color)] text-[var(--secondary-text-color)] hover:bg-[var(--accent)]/20"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("gainers")}
            className={`px-4 py-2 rounded-md font-semibold shadow cursor-pointer ${
              filter === "gainers"
                ? "bg-green-500 text-white"
                : "bg-[var(--card-bg-color)] text-[var(--secondary-text-color)] hover:bg-green-200/20"
            }`}
          >
            Gainers
          </button>
          <button
            onClick={() => setFilter("losers")}
            className={`px-4 py-2 rounded-md font-semibold shadow cursor-pointer ${
              filter === "losers"
                ? "bg-red-500 text-white"
                : "bg-[var(--card-bg-color)] text-[var(--secondary-text-color)] hover:bg-red-200/20"
            }`}
          >
            Losers
          </button>
        </div>

        {/* Coin Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
          {filteredCoins.map((coin) => (
            <CoinCard key={coin.id} coin={coin} onSelect={() => handleSelectCoin(coin)} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
