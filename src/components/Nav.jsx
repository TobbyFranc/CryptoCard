import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi"; // react-icons for sleek icons

const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[var(--main-bg-color)] shadow-md z-50">
      <div className="w-[90%] mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[var(--accent)] font-sans tracking-tight cursor-pointer">
  <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
    CryptoCard
  </span>
</h1>


        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-[var(--main-text-color)] font-medium">
         <a
  href="#hero"
  onClick={(e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
  className="relative group cursor-pointer"
>
  Home
  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--accent)] transition-all group-hover:w-full"></span>
</a>

          <a href="#about" className="relative group">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--accent)] transition-all group-hover:w-full"></span>
          </a>
          <a href="#explor" className="relative group">
            Explore
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--accent)] transition-all group-hover:w-full"></span>
          </a>
          <a href="#faqs" className="relative group">
            FAQs
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--accent)] transition-all group-hover:w-full"></span>
          </a>
        </div>

        {/* CTA + Dark Mode Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/dashboard"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md hover:bg-[var(--accent)]/80 transition"
          >
            Get Started
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-[var(--accent)] text-[var(--main-bg-color)] hover:bg-[var(--accent)]/80 transition"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md bg-[var(--accent)] text-[var(--main-bg-color)]"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--card-bg-color)] shadow-lg px-6 py-4 space-y-4">
            <a
  href="#hero"
  onClick={(e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
  className="relative group cursor-pointer"
>
  Home
  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--accent)] transition-all group-hover:w-full"></span>
</a>

          <a href="#about" className="block hover:text-[var(--accent)]">About</a>
          <a href="#explor" className="block hover:text-[var(--accent)]">Explore</a>
          <a href="#faqs" className="block hover:text-[var(--accent)]">FAQs</a>
          <Link
            to="/dashboard"
            className="block px-4 py-2 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md hover:bg-[var(--accent)]/80 transition"
          >
            Get Started
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-2 p-2 cursor-pointer rounded-full bg-[var(--accent)] text-[var(--main-bg-color)] hover:bg-[var(--accent)]/80 transition"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
