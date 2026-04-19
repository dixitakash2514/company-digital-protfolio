import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ProjectsShowcase from "../components/ProjectsShowcase";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const Home = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, []);

  return (
    <div className="bg-cream">
      <Header />
      <main>
        <Hero />
        <ProjectsShowcase />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
