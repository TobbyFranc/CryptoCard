import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import cryptoF from "../assets/CryptoF.png";
import Bitcoin from "../assets/bitco.png";
import Ether from "../assets/ethere.png";
import Ada from "../assets/carda.png";
import Sol from "../assets/sola.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative z-20 bg-[var(--main-bg-color)] py-20"
    >
      {/* Header + Subheader */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2
          className="text-3xl md:text-4xl font-bold 
                       bg-gradient-to-r from-[var(--accent)] via-purple-500 to-pink-500 
                       bg-clip-text text-transparent mb-4"
        >
          About CryptoCard
        </h2>
        <p className="text-md md:text-lg text-[var(--secondary-text-color)] max-w-2xl mx-auto">
          Simplifying blockchain with clarity, confidence, and sleek design.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text + Features */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-[var(--secondary-text-color)] leading-relaxed">
            CryptoCard is more than a dashboard, it’s your personal crypto
            companion. We simplify blockchain markets by offering clear
            insights, sleek visualizations, and tools that help you make smarter
            investment decisions.
          </p>
          <p
            className="bg-gradient-to-r from-[var(--accent)] via-purple-500 to-pink-500 
                       bg-clip-text text-transparent mb-4 leading-relaxed"
          >
            With CryptoCard, you get access to:
          </p>

          <div className="space-y-4">
            {[
              "Real‑time price tracking across Bitcoin, Ethereum, and hundreds of altcoins",
              "Interactive charts that visualize market trends, volatility, and growth potential",
              "Personalized watchlists to monitor your favorite coins and set alerts",
              "Sleek design with dark mode support for a distraction‑free experience",
              "Educational insights and curated news to keep you ahead of the market",
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 py-2">
                {/* Sleek custom bullet */}
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-r from-[var(--accent)] to-pink-500 shadow-md"></span>
                <p className="text-[var(--secondary-text-color)]">{feature}</p>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <Link
            to="/about-details"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md hover:bg-[var(--accent)]/80 transition font-semibold shadow-lg"
          >
            Learn More <FiArrowRight />
          </Link>
        </motion.div>

        {/* Phone Mockup with Orbiting Coin Logos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full h-[500px]">
            <img
              src={cryptoF}
              alt="Crypto tracking chart on phone"
              onError={(e) => {
                e.target.src = "/fallback-phone.png";
              }}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Orbiting coin logos */}
          <motion.img
            src={Bitcoin}
            alt="BTC"
            className="absolute -top-6 left-1/2 w-10 h-10 bg-gray-500 rounded-full p-1"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          />
          <motion.img
            src={Ether}
            alt="ETH"
            className="absolute top-1/3 -left-6 w-10 h-10 bg-gray-500 rounded-full p-1"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          />
          <motion.img
            src={Ada}
            alt="ADA"
            className="absolute bottom-1/3 -right-6 w-10 h-10 bg-gray-500 rounded-full p-1"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          />
          <motion.img
            src={Sol}
            alt="SOL"
            className="absolute -bottom-6 left-1/2 w-10 h-10 bg-gray-500 rounded-full p-1"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
