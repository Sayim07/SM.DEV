"use client";

import { useState } from "react";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered && <Landing onEnter={() => setEntered(true)} />}
      {entered && (
        <>
          <Navbar />
          <Hero />
          <div className="divider" />
          <About />
          <div className="divider" />
          <Skills />
          <div className="divider" />
          <Projects />
          <div className="divider" />
          <Achievements />
          <div className="divider" />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}
