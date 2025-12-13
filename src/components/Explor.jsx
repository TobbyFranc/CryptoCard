import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

const Explor = () => {
  const [coins, setCoins] = useState([]);

  // Fetch live coin data
  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,cardano,solana&sparkline=true"
      );
      const data = await res.json();
      setCoins(data);
    } catch (err) {
      console.error("Error fetching coin data:", err);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000); // auto-refresh every 60s
    return () => clearInterval(interval);
  }, []);

  // Feature cards
  const features = [
    { title: "Live Prices", desc: "Stay updated with real‑time crypto data." },
    { title: "Charts", desc: "Visualize trends with interactive graphs." },
    { title: "Watchlist", desc: "Save your favorite coins for quick access." },
    { title: "Dark Mode", desc: "Switch themes for comfort and style." },
  ];

  return (
    <section id="explor" className="relative z-20 bg-[var(--main-bg-color)] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header + Tagline */}
        <h2
          className="text-3xl font-bold mb-4 
                     bg-gradient-to-r from-[var(--accent)] via-purple-500 to-pink-500 
                     bg-clip-text text-transparent"
        >
          Explore Features
        </h2>
        <p className="text-md md:text-lg text-[var(--secondary-text-color)] mb-12">
          Discover powerful tools and insights that make crypto simple, visual, and actionable.
        </p>

        {/* Sleek Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="p-6 bg-[var(--card-bg-color)] rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-2 text-[var(--accent)]">{f.title}</h3>
              <p className="text-sm text-[var(--secondary-text-color)]">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Responsive Coins Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[300px] w-full border-collapse rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-[var(--card-bg-color)] sticky top-0 z-10">
              <tr className="text-[var(--accent)]">
                <th className="p-2 text-left">Coin</th>
                <th className="p-2 text-left hidden md:table-cell">All‑Time Low</th>
                <th className="p-2 text-left hidden md:table-cell">All‑Time High</th>
                <th className="p-2 text-left">Trend</th>
                {/* Extra columns only on md+ */}
              </tr>
            </thead>
            <tbody>
              {coins.map((coin) => {
                const isUp = coin.price_change_percentage_24h >= 0;
                return (
                  <tr
                    key={coin.id}
                    className="border-t border-[var(--secondary-text-color)]/20 hover:bg-[var(--card-bg-color)] transition"
                  >
                    {/* Coin column: logo, name, and value stacked */}
                    <td className="p-2 text-left align-top">
                      <div className="flex items-center gap-2">
                        <img src={coin.image} alt={coin.name} className="w-6 h-6 rounded-full" />
                        <span className="text-[var(--secondary-text-color)] font-medium text-sm">{coin.name}</span>
                      </div>
                      <div
                        className={`mt-1 text-sm font-semibold flex items-center gap-1 ${
                          isUp ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {isUp ? <FiArrowUp size={12} /> : <FiArrowDown size={12} />}
                        ${coin.current_price.toLocaleString()}
                      </div>
                    </td>

                    {/* Trend column: tiny chart */}

                    {/*  */}

                                        {/* Extra columns only visible on md+ screens */}
                    <td className="p-2 text-left text-[var(--secondary-text-color)] hidden md:table-cell">
                      ${coin.atl.toLocaleString()}
                    </td>
                    <td className="p-2 text-left text-[var(--secondary-text-color)] hidden md:table-cell">
                      ${coin.ath.toLocaleString()}
                    </td>

                    {/*  */}

{/* Sparkline Trend Chart (smaller height, responsive) */}
<td className="p-3 text-left ">
  <div className="w-20 h-10 md:w-28 md:h-12">
    <Line
      data={{
        labels: coin.sparkline_in_7d.price.map((_, i) => i),
        datasets: [
          {
            data: coin.sparkline_in_7d.price,
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.2)",
            fill: true,
            tension: 0.3,
          },
        ],
      }}
      options={{
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { display: false } },
        elements: { point: { radius: 0 } },
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  </div>
</td>

{/*  */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Link
            to="/dashboard"
            className="inline-block px-6 py-3 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md hover:bg-[var(--accent)]/80 transition font-semibold shadow-lg"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Explor;
