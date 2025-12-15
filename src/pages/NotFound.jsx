import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import bitcard from '../assets/bitcard.png'

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[var(--main-bg-color)] text-[var(--secondary-text-color)] px-6">
      {/* Logo / Brand */}
      <div className="flex items-center gap-2 mb-6">
                <img src={bitcard} className="w-12 h-12" alt="" />
        <h1 className="text-3xl font-bold text-[var(--accent)]">CryptoCard</h1>
      </div>

      {/* Error Code */}
      <h1 className="text-8xl font-extrabold text-[var(--accent)] mb-4">404</h1>

      {/* Message */}
      <p className="text-lg md:text-xl mb-6 text-center max-w-md">
        Oops! Nothing to see here.
        The page you’re searching for doesn’t exist. Not yet!
      </p>

      {/* Call to Action */}
      <Link
        to="/"
        className="flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md hover:bg-[var(--accent)]/80 transition"
      >
        <FaHome /> Back to Home
      </Link>

      {/* Decorative Illustration */}

    </section>
  );
};

export default NotFound;
