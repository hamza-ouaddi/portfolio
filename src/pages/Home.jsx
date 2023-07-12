import React from "react";

import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <section className={` min-h-screen `}>
      <Sidebar />

      <Hero />

      <Skills />

      <Services />

      <Portfolio />

      <Contact />
    </section>
  );
};

export default Home;
