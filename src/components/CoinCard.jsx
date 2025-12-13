import React from "react";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import { Sparklines, SparklinesLine } from "react-sparklines"; // install: npm install react-sparklines

const CoinCard = ({ coin, onSelect }) => {
  const isPositive = coin.price_change_percentage_24h > 0;

  return (
    <div
      onClick={onSelect}
      className="cursor-pointer p-6 rounded-lg bg-[var(--card-bg-color)] shadow hover:shadow-lg transition w-full"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <img src={coin.image} alt={coin.name} className="w-8 h-8" />
        <div>
          <h3 className="font-semibold text-[var(--accent)]">{coin.name}</h3>
          <p className="text-xs text-[var(--secondary-text-color)] uppercase">
            {coin.symbol}
          </p>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-bold text-[var(--secondary-text-color)]">
          ${coin.current_price.toLocaleString()}
        </p>
        <div
          className={`flex items-center gap-1 font-semibold ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPositive ? <FiTrendingUp /> : <FiTrendingDown />}
          <span>{coin.price_change_percentage_24h.toFixed(2)}%</span>
        </div>
      </div>

      {/* Sparkline */}
      {coin.sparkline_in_7d && (
        <div className="h-16">
          <Sparklines data={coin.sparkline_in_7d.price} limit={30}>
            <SparklinesLine
              color={isPositive ? "green" : "red"}
              style={{ fill: "none" }}
            />
          </Sparklines>
        </div>
      )}
    </div>
  );
};

export default CoinCard;
