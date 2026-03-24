"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NEON = "#00ff88";

interface SplashScreenProps {
  onEnter: () => void;
}

const CHIPS = ["React", "Next.js", "TypeScript", "Solidity", "Web3"];

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  const [leaving, setLeaving] = useState(false);

  const handleEnter = () => {
    setLeaving(true);
    setTimeout(onEnter, 750);
  };

  // Prevent body scroll while splash is visible
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <AnimatePresence>
      {!leaving && (
        <motion.div
          key="splash"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#060d0a",
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Main viewport-filling container */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100vh",
              overflow: "hidden",
            }}
          >
            {/* Dark background base */}
            <div style={{ position: "absolute", inset: 0, zIndex: 0, background: "#060d0a" }} />

            {/* Vignette overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
                background:
                  "radial-gradient(ellipse at center, transparent 30%, #060d0a 100%)",
                opacity: 0.72,
                pointerEvents: "none",
              }}
            />

            {/* ── Logo + badge (top-left) ── */}
            <motion.div
              style={{
                position: "absolute",
                top: 32,
                left: 44,
                zIndex: 3,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "0.95rem",
                  fontWeight: 800,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: NEON,
                }}
              >
                SM<span style={{ color: "#5a6478" }}>.DEV</span>
              </div>

              <div
                style={{
                  marginTop: 10,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(0,255,136,0.07)",
                  border: "1px solid rgba(0,255,136,0.2)",
                  color: NEON,
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "0.68rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "6px 14px",
                  borderRadius: 100,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    background: NEON,
                    borderRadius: "50%",
                    boxShadow: `0 0 8px ${NEON}`,
                    animation: "spline-pulse 2s ease-in-out infinite",
                    flexShrink: 0,
                  }}
                />
                Full-Stack &amp; Web3 Developer
              </div>
            </motion.div>

            {/* ── Heading (centre) ── */}
            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "0 24px",
                pointerEvents: "none",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              <h1
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "clamp(2.6rem, 6.5vw, 5rem)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: "-0.04em",
                  color: "#ffffff",
                  marginBottom: 16,
                }}
              >
                Welcome to{" "}
                <span style={{ color: NEON }}>Sayim&apos;s</span>
                <br />Portfolio
              </h1>

              <p
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "clamp(0.78rem, 1.3vw, 0.9rem)",
                  color: "#5a6478",
                  letterSpacing: "0.06em",
                  lineHeight: 1.9,
                  maxWidth: 540,
                }}
              >
                B.Tech IT · BPPIMT Kolkata · SIH 2025 Top 6 · EIBS 2026 Top 10
              </p>
            </motion.div>

            {/* ── CTA + chips (bottom centre) ── */}
            <motion.div
              style={{
                position: "absolute",
                bottom: 90,
                left: 0,
                right: 0,
                zIndex: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 20,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <button
                id="splash-get-started"
                onClick={handleEnter}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: NEON,
                  color: "#060d0a",
                  padding: "14px 38px",
                  borderRadius: 4,
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: `0 0 24px ${NEON}, 0 0 60px rgba(0,255,136,0.25)`,
                  transition: "box-shadow 0.2s, transform 0.15s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    `0 0 40px ${NEON}, 0 0 80px rgba(0,255,136,0.4)`;
                  (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    `0 0 24px ${NEON}, 0 0 60px rgba(0,255,136,0.25)`;
                  (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
                }}
              >
                Get Started
                <span style={{ fontSize: "1.1rem", marginLeft: 2 }}>→</span>
              </button>

              {/* Tech chips */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", padding: "0 16px" }}>
                {CHIPS.map(chip => (
                  <span
                    key={chip}
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: "0.68rem",
                      letterSpacing: "0.08em",
                      color: "#5a6478",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid #1e2535",
                      padding: "4px 12px",
                      borderRadius: 3,
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* ── Corner labels ── */}
            <motion.div
              style={{
                position: "absolute",
                bottom: 28,
                left: 40,
                zIndex: 4,
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.62rem",
                color: "#5a6478",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <span>© 2026</span>
              <span style={{ width: 20, height: 1, background: "#1e2535", display: "block" }} />
              <span>Sayim Mullick</span>
            </motion.div>

            <motion.div
              style={{
                position: "absolute",
                bottom: 28,
                right: 40,
                zIndex: 4,
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.62rem",
                color: "#5a6478",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: NEON,
                  boxShadow: `0 0 8px ${NEON}`,
                  animation: "spline-pulse 2s ease-in-out infinite",
                }}
              />
              Available for work
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
