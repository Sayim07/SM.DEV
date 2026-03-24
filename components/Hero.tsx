"use client";

import { motion } from "framer-motion";

import { ParticleTextEffect } from "@/components/ui/particle-text-effect";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="hero-v2">
      {/* Ambient glow orbs */}
      <motion.div
        className="hero-orb hero-orb--green"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-orb hero-orb--purple"
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="hero-v2__inner">
        <div className="hero-v2__text">
          {/* Role badge */}
          <motion.div className="hero-role-badge hero-role-badge--top" {...fadeUp(0.1)}>
            <span className="hero-role-badge__line" />
            <span>Full-Stack &amp; Web3 Developer</span>
          </motion.div>

          {/* Name */}
          <h1 className="sr-only">Sayim Mullick</h1>
          <motion.div className="w-full mb-6" {...fadeUp(0.3)}>
            <ParticleTextEffect words={["SAYIM", "MULLICK"]} />
          </motion.div>

          {/* Bio */}
          <motion.p className="hero-v2__bio hero-v2__bio--v3" {...fadeUp(0.5)}>
            B.Tech IT student at <strong>BPPIMT, Kolkata</strong> — building across{" "}
            <strong>frontend</strong>, <strong>backend</strong>, and{" "}
            <strong>blockchain</strong>. Top 6 @ SIH 2025 · Top 10 @ EIBS 2026.
          </motion.p>

          {/* CTAs */}
          <motion.div className="hero-v2__ctas" {...fadeUp(0.7)}>
            <a href="#projects" className="btn-primary interactive">
              View Projects
              <span className="btn-arrow">→</span>
            </a>
            <a href="#contact" className="btn-ghost interactive">
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div className="hero-v2__image" {...fadeUp(0.5)}>
          <div className="hero-image-glow" />
          <div className="hero-image-mask">
            <img src="/sayim.jpg" alt="Sayim Mullick" />
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="hero-v3-decor">
        <motion.div 
          className="hero-v3-decor__dot"
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="hero-v3-decor__circle"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Scroll hint */}
      <motion.div
        className="hero-v2__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          className="hero-v2__scroll-line"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
