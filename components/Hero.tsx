"use client";

import { motion } from "framer-motion";

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

      {/* Centered content */}
      <div className="hero-v2__inner">

        {/* Welcome pill */}
        <motion.div className="hero-pill" {...fadeUp(0.1)}>
          <span className="hero-pill__dot" />
          Available for opportunities
        </motion.div>

        {/* Greeting */}
        <motion.p className="hero-greeting" {...fadeUp(0.25)}>
          &lt; Hello, World! /&gt;
        </motion.p>

        {/* Name */}
        <motion.h1 className="hero-v2__name" {...fadeUp(0.4)}>
          I&apos;m{" "}
          <span className="hero-v2__accent">
            Sayim
            <svg
              className="hero-underline"
              viewBox="0 0 220 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <motion.path
                d="M2 9 C50 3, 160 3, 218 9"
                stroke="var(--accent)"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
              />
            </svg>
          </span>{" "}
          Mullick
        </motion.h1>

        {/* Role badge */}
        <motion.div className="hero-role-badge" {...fadeUp(0.55)}>
          <span className="hero-role-badge__line" />
          <span>Full-Stack &amp; Web3 Developer</span>
          <span className="hero-role-badge__line" />
        </motion.div>

        {/* Bio */}
        <motion.p className="hero-v2__bio" {...fadeUp(0.7)}>
          B.Tech IT student at <strong>BPPIMT, Kolkata</strong> — crafting
          experiences across <strong>frontend</strong>,{" "}
          <strong>backend</strong>, and <strong>blockchain</strong>.
          <br />
          <span className="hero-v2__badges">
            <span className="hero-mini-badge">🏆 Top 6 · SIH 2025</span>
            <span className="hero-mini-badge">🥇 Top 10 · EIBS 2026</span>
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div className="hero-v2__ctas" {...fadeUp(0.85)}>
          <a href="#projects" className="btn-primary interactive">
            View Projects
            <span className="btn-arrow">→</span>
          </a>
          <a href="#contact" className="btn-ghost interactive">
            Get in Touch
          </a>
        </motion.div>

        {/* Tech stack pills */}
        <motion.div className="hero-stack" {...fadeUp(1.0)}>
          {["React", "Next.js", "Node.js", "Solidity", "TypeScript"].map(
            (tech, i) => (
              <motion.span
                key={tech}
                className="hero-stack__chip"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + i * 0.08, duration: 0.4 }}
              >
                {tech}
              </motion.span>
            )
          )}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="hero-v2__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
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
