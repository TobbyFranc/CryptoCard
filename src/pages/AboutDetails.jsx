import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Nav from "../components/Nav";       // import your Nav component
import Footer from "../components/Footer"; // import your Footer component

const AboutDetails = () => {
  return (
    <>
      {/* Navigation */}
      <Nav />

      {/* Banner Header */}
      <section className="relative bg-gradient-to-r from-[var(--accent)] via-purple-600 to-pink-500 py-24 text-center text-[var(--main-bg-color)]">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          About CryptoCard
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-sm md:text-md max-w-lg mx-auto"
        >
          Your crypto companion for clear insights, smart tools, and sleek visualizations.
        </motion.p>
      </section>

      {/* Main Content */}
      <section className="min-h-screen bg-[var(--main-bg-color)] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md hover:bg-[var(--accent)]/80 transition font-semibold shadow"
          >
            <FiArrowLeft /> Back to Home
          </Link>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-lg text-[var(--secondary-text-color)] leading-relaxed mb-8"
          >
            CryptoCard is a modern crypto dashboard built to simplify the way you interact with digital assets. 
            It combines real‑time market data, interactive charts, and personalized tools into one sleek interface.
          </motion.p>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[var(--card-bg-color)] p-6 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold text-[var(--accent)] mb-4">Our Mission</h3>
              <p className="text-[var(--secondary-text-color)]">
                To empower investors with clarity and confidence by making crypto data approachable, trustworthy, and engaging.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[var(--card-bg-color)] p-6 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold text-[var(--accent)] mb-4">Our Vision</h3>
              <p className="text-[var(--secondary-text-color)]">
                To become the go‑to platform for crypto enthusiasts, traders, and investors seeking simplicity and insight in the blockchain space.
              </p>
            </motion.div>
          </div>

          {/* Why CoinVision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-12"
          >
            <h3 className="text-xl font-semibold text-[var(--accent)] mb-6">Why CryptoCard?</h3>
            
            {/* Sleek custom bullets */}
            <div className="space-y-4">
              {[
                "Unified dashboard for all your crypto needs",
                "Clean, modern UI with dark mode support",
                "Real‑time updates from trusted crypto APIs",
                "Interactive charts to visualize volatility and growth",
                "Personalized watchlist to track your favorite coins",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-r from-[var(--accent)] to-pink-500 shadow-md"></span>
                  <p className="text-[var(--secondary-text-color)]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default AboutDetails;
