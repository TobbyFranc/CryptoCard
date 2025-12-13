import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative z-20 backdrop-blur-md bg-white/5 border-t border-white/10 py-16 text-[var(--secondary-text-color)]"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-[var(--accent)] mb-4">CryptoCard</h3>
          <p className="text-sm">
            Built by Tobi Francis © 2025.  
            Your gateway to live crypto insights.
          </p>
        </div>

        {/* Documentation & Engineering */}
        <div>
          <h4 className="font-semibold text-[var(--accent)] mb-3">For Engineers</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[var(--accent)]">Documentation</a></li>
            <li><a href="#" className="hover:text-[var(--accent)]">API Docs</a></li>
            <li><a href="#" className="hover:text-[var(--accent)]">Developer Tools</a></li>
            <li><a href="#" className="hover:text-[var(--accent)]">Open Source</a></li>
          </ul>
        </div>

        {/* Crypto Resources */}
        <div>
          <h4 className="font-semibold text-[var(--accent)] mb-3">Crypto Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[var(--accent)]">Markets</a></li>
            <li><a href="#" className="hover:text-[var(--accent)]">Exchanges</a></li>
            <li><a href="#" className="hover:text-[var(--accent)]">Wallets</a></li>
            <li><a href="#" className="hover:text-[var(--accent)]">NFTs</a></li>
          </ul>
        </div>

        {/* Community & Subscription */}
        <div>
          <h4 className="font-semibold text-[var(--accent)] mb-3">Community</h4>
          <ul className="space-y-2 text-sm mb-4">
            <li><a href="#" className="hover:text-[var(--accent)]">Blog</a></li>
            <li><a href="#" className="hover:text-[var(--accent)]">Support</a></li>
            <li><a href="#" className="hover:text-[var(--accent)]">Careers</a></li>
          </ul>

          {/* Subscription */}
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Subscribe with email"
              className="flex-1 p-2 rounded-md bg-[var(--card-bg-color)] text-[var(--secondary-text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] text-sm"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md font-semibold hover:bg-[var(--accent)]/80 transition text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 text-center text-xs text-[var(--secondary-text-color)]">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-[var(--accent)]">GitHub</a>
          <a href="#" className="hover:text-[var(--accent)]">Email</a>
          <a href="#" className="hover:text-[var(--accent)]">LinkedIn</a>
        </div>
        <p>All rights reserved. CryptoCard is for educational purposes only — not financial advice.</p>
      </div>
    </footer>
  );
};

export default Footer;
