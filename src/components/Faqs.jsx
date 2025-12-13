import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const Faqs = () => {
  const faqs = [
    { q: "Is the data real‑time?", a: "Yes, prices are fetched live from the CoinGecko API every minute." },
    { q: "Do I need an account?", a: "No, you can use the dashboard freely without signing up." },
    { q: "Can I save coins?", a: "Yes, add coins to your watchlist and they’ll be stored locally in your browser." },
    { q: "Is dark mode supported?", a: "Absolutely. You can toggle between light and dark themes anytime." },
    { q: "Can I access on mobile?", a: "Yes, the dashboard is fully responsive and works smoothly on mobile devices." },
    { q: "How often is data refreshed?", a: "Data auto‑updates every 60 seconds without needing to reload the page." },
    { q: "Is my data secure?", a: "Yes, no personal data is collected. Watchlist is stored locally only." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faqs" className="relative z-20 bg-[var(--card-bg-color)] w-full py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 
                       bg-gradient-to-r from-[var(--accent)] via-purple-500 to-pink-500 
                       bg-clip-text text-transparent text-center">
          FAQs
        </h2>

        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="mb-4 border-b border-[var(--secondary-text-color)]/30 pb-3"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex justify-between items-center text-left font-medium text-[var(--secondary-text-color)] hover:text-[var(--accent)] transition-colors"
            >
              <span>{faq.q}</span>
              <span className="ml-2">
                {openIndex === idx ? <FiMinus /> : <FiPlus />}
              </span>
            </button>

            {/* Smooth animated answer */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === idx ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-[var(--secondary-text-color)]">
                {faq.a}
              </p>
            </div>
          </div>
        ))}

        {/* Extra section */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-[var(--accent)] mb-2">
            Have more questions?
          </h3>
          <p className="text-sm text-[var(--secondary-text-color)]">
            You can check our documentation, reach out via the contact form, or explore the dashboard for more tips.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
