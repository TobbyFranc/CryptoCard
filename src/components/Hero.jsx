import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="sticky top-0 min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      
      {/* Blockchain grid background */}
      <div className="absolute inset-0 hero-grid opacity-40 pointer-events-none"></div>

      {/* Hero Content */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="uppercase tracking-widest mb-4 text-sm text-[var(--main-text-color)] z-10"
      >
        Welcome to <span className="font-bold text-[var(--accent)] font-sans tracking-tight">CryptoCard</span>
      </motion.p>

      <motion.h1
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-3xl md:text-6xl font-bold mb-6 z-10 
             bg-gradient-to-r from-[var(--accent)] via-purple-500 to-pink-500 
             bg-clip-text text-transparent"
>
  Track Crypto Prices in Real Time
</motion.h1>


      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-md md:text-lg mb-10 text-[var(--secondary-text-color)] max-w-2xl z-10"
      >
        Stay ahead of the market with live charts, instant updates, and a personalized watchlist.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <Link
          to="/dashboard"
          className="px-6 py-3 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md hover:bg-[var(--accent)]/80 transition font-semibold shadow-lg"
        >
          Get Started
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
