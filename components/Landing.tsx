"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Landing({ onEnter }: { onEnter: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [leaving, setLeaving] = useState(false);

  /* ── Starfield ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.2 + 0.2,
      speed: Math.random() * 0.25 + 0.05,
      opacity: Math.random(),
    }));

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        s.opacity += (Math.random() - 0.5) * 0.03;
        s.opacity = Math.max(0.05, Math.min(1, s.opacity));
        s.y += s.speed;
        if (s.y > canvas.height) { s.y = 0; s.x = Math.random() * canvas.width; }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(78,255,176,${s.opacity * 0.6})`;
        ctx.fill();
      }
      animationRef.current = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(animationRef.current!);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const handleEnter = () => {
    setLeaving(true);
    setTimeout(onEnter, 700);
  };

  return (
    <AnimatePresence>
      {!leaving && (
        <motion.div
          key="landing"
          className="landing"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <canvas ref={canvasRef} className="landing__canvas" />

          {/* Glow orbs */}
          <motion.div
            className="landing__orb landing__orb--green"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="landing__orb landing__orb--purple"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Content */}
          <div className="landing__content">
            {/* Logo */}
            <motion.div
              className="landing__logo"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              SM<span>.DEV</span>
            </motion.div>

            {/* Tag */}
            <motion.div
              className="landing__tag"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="landing__tag-dot" />
              Full-Stack &amp; Web3 Developer
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="landing__headline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              Welcome to <br />
              <span className="landing__headline-accent">Sayim&apos;s</span>{" "}
              Portfolio
            </motion.h1>

            {/* Sub */}
            <motion.p
              className="landing__sub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              B.Tech IT · BPPIMT Kolkata · SIH 2025 Top 6 · EIBS 2026 Top 10
            </motion.p>

            {/* CTA */}
            <motion.button
              id="landing-get-started"
              className="landing__cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleEnter}
            >
              Get Started
              <span className="landing__cta-arrow">→</span>
            </motion.button>

            {/* Floating chips */}
            <motion.div
              className="landing__chips"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
            >
              {["React", "Next.js", "TypeScript", "Solidity", "Web3"].map((t) => (
                <span key={t} className="landing__chip">{t}</span>
              ))}
            </motion.div>
          </div>

          {/* Bottom corner indicators */}
          <motion.div
            className="landing__corner landing__corner--bl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span>© 2026</span>
            <span className="landing__corner-line" />
            <span>Sayim Mullick</span>
          </motion.div>
          <motion.div
            className="landing__corner landing__corner--br"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="landing__corner-dot" />
            <span>Available for work</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
