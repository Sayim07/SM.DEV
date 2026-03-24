"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
      <AnimatePresence>
        {!entered && (
          <Landing key="landing" onEnter={() => setEntered(true)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {entered && (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
