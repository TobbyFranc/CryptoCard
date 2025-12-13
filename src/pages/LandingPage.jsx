import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Explor from "../components/Explor";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";

const LandingPage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Explor />
      {/* <span className="flex flex-col md:flex-row"> */}
        <Faqs />
        <Contact />
      {/* </span> */}
      <Testimonials />
      <Footer />
    </>
  );
};

export default LandingPage;
