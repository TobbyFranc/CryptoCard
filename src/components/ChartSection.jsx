import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const ChartSection = ({ coin }) => {
  const [chartData, setChartData] = useState(null);
  const [range, setRange] = useState("7"); // default 7 days

  const fetchChartData = async () => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=${range}`
      );
      const data = await res.json();
      const prices = data.prices.map((p) => ({ x: new Date(p[0]), y: p[1] }));

      setChartData({
        labels: prices.map((p) => p.x.toLocaleDateString()),
        datasets: [
          {
            label: `${coin.name} Price (USD)`,
            data: prices.map((p) => p.y),
            borderColor: "rgba(99, 102, 241, 1)", // accent color
            backgroundColor: "rgba(99, 102, 241, 0.2)",
            tension: 0.3,
            fill: true,
          },
        ],
      });
    } catch (err) {
      console.error("Error fetching chart data:", err);
    }
  };

  useEffect(() => {
    fetchChartData();
  }, [coin, range]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Coin header */}
      <div className="flex items-center gap-4 mb-6">
        <img src={coin.image} alt={coin.name} className="w-10 h-10" />
        <div>
          <h2 className="text-xl font-bold text-[var(--accent)]">{coin.name}</h2>
          <p className="text-sm text-[var(--secondary-text-color)]">
            ${coin.current_price.toLocaleString()}{" "}
            <span
              className={
                coin.price_change_percentage_24h > 0
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {coin.price_change_percentage_24h.toFixed(2)}%
            </span>
          </p>
        </div>
      </div>

      {/* Chart container with responsive height */}
      <div className="h-[250px] sm:h-[350px] lg:h-[450px]">
        {chartData ? (
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: {
                  callbacks: {
                    label: (context) => `$${context.raw.toLocaleString()}`,
                  },
                },
              },
              scales: {
                x: { ticks: { color: "var(--secondary-text-color)" } },
                y: { ticks: { color: "var(--secondary-text-color)" } },
              },
            }}
          />
        ) : (
          <p className="text-center text-[var(--secondary-text-color)]">
            Loading chart...
          </p>
        )}
      </div>

      {/* Range selector */}
      <div className="flex justify-center gap-4 mt-6">
        {["1", "7", "30", "365"].map((r) => (
          <button
            key={r}
            onClick={() => setRange(r)}
            className={`px-4 py-2 rounded-md font-semibold cursor-pointer ${
              range === r
                ? "bg-[var(--accent)] text-[var(--main-bg-color)]"
                : "bg-[var(--card-bg-color)] text-[var(--secondary-text-color)] hover:bg-[var(--accent)]/20"
            }`}
          >
            {r === "1" && "24h"}
            {r === "7" && "7d"}
            {r === "30" && "30d"}
            {r === "365" && "1y"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChartSection;
