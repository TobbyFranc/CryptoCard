import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import AboutDetails from "./pages/AboutDetails";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); // 2s splash
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[var(--main-bg-color)] text-[var(--accent)]">
       {/* car svg */}
       <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 animate-spin"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v1m0 14v1m8.485-8.485l-.707.707M4.222 4.222l-.707.707M20 12h1M3 12H2m15.778 6.778l-.707-.707M6.343 6.343l-.707-.707"
          />
        </svg>
       </div>


        <p className="animate-pulse text-xl font-bold 
                       bg-gradient-to-r from-[var(--accent)] via-purple-500 to-pink-500 
                       bg-clip-text text-transparent">Loading CryptoCard...</p>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about-details" element={<AboutDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
