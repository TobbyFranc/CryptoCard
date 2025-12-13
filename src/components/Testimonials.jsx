import React from "react";
import { FiStar } from "react-icons/fi";
import Slider from "react-slick"; // install with: npm install react-slick slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ada, Crypto Enthusiast",
      quote: "This dashboard makes tracking coins effortless. I love the clean design and live updates!",
      rating: 5,
    },
    {
      name: "James, Developer",
      quote: "The charts are smooth and responsive. It’s my go-to tool for quick market insights.",
      rating: 4,
    },
    {
      name: "Sophia, Investor",
      quote: "I can finally monitor my watchlist without stress. The auto-refresh feature is a lifesaver.",
      rating: 5,
    },
  ];

  // Slider settings for mobile
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section id="testimonials" className="relative z-20 bg-[var(--card-bg-color)] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="text-3xl font-bold mb-12 
                     bg-gradient-to-r from-[var(--accent)] via-purple-500 to-pink-500 
                     bg-clip-text text-transparent"
        >
          What People Are Saying
        </h2>

        {/* Mobile: Carousel */}
        <div className="block md:hidden">
          <Slider {...settings}>
            {testimonials.map((t, idx) => (
              <div key={idx} className="px-4">
                <div
                  className="p-6 rounded-xl shadow-lg backdrop-blur-md bg-white/10 border border-white/20 
                             transition transform hover:-translate-y-1 hover:scale-[1.02]"
                >
                  <p className="text-sm text-[var(--secondary-text-color)] italic mb-4">“{t.quote}”</p>
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`w-4 h-4 ${i < t.rating ? "text-yellow-400" : "text-gray-400"}`}
                      />
                    ))}
                  </div>
                  <h4 className="text-md font-semibold text-[var(--accent)]">{t.name}</h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl shadow-lg backdrop-blur-md bg-white/10 border border-white/20 
                         transition transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              <p className="text-sm text-[var(--secondary-text-color)] italic mb-4">“{t.quote}”</p>
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-4 h-4 ${i < t.rating ? "text-yellow-400" : "text-gray-400"}`}
                  />
                ))}
              </div>
              <h4 className="text-md font-semibold text-[var(--accent)]">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
