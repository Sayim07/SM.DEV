"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { DesertDrift } from "@/components/ui/desert-drift";

const NEON = "#00ff88";

interface SplashScreenProps {
  onEnter: () => void;
}

const CHIPS = ["React", "Next.js", "TypeScript", "Solidity", "Web3"];

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [leaving, setLeaving] = useState(false);

  // Track scroll progress over the tall wrapper
  const { scrollYProgress } = useScroll({ container: scrollRef });

  /* ── Derived opacities / transforms from scroll ── */
  // Logo + badge: fade in 0→0.08, stay visible
  const logoOpacity    = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  // Heading: appears 0.65→0.75
  const headingOpacity = useTransform(scrollYProgress, [0.60, 0.78], [0, 1]);
  const headingY       = useTransform(scrollYProgress, [0.60, 0.78], [40, 0]);

  // Button + chips: appears 0.85→0.95
  const ctaOpacity     = useTransform(scrollYProgress, [0.82, 0.96], [0, 1]);

  // Vignette: darkens 0.7→1
  const vignetteOpacity = useTransform(scrollYProgress, [0.65, 1], [0, 0.72]);

  // Corner labels: fade in subtle at 0→0.15, full at 0.88
  const cornerOpacity   = useTransform(scrollYProgress, [0.05, 0.2, 0.85, 1], [0.18, 0.35, 0.35, 1]);

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
          {/* ── Scrollable tall wrapper ── */}
          <div
            ref={scrollRef}
            style={{
              position: "absolute",
              inset: 0,
              overflowY: "scroll",
              scrollbarWidth: "none",
            }}
          >
            {/* Spacer that makes the scroll track long */}
            <div style={{ height: "300vh", position: "relative" }}>

              {/* Sticky viewport-filling scene */}
              <div
                style={{
                  position: "sticky",
                  top: 0,
                  height: "100vh",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                {/* Spline fills the viewport */}
                <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                  <DesertDrift />
                </div>

                {/* Vignette overlay */}
                <motion.div
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background:
                      "radial-gradient(ellipse at center, transparent 30%, #060d0a 100%)",
                    opacity: vignetteOpacity,
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
                    opacity: logoOpacity,
                  }}
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
                    opacity: headingOpacity,
                    y: headingY,
                    pointerEvents: "none",
                  }}
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
                    opacity: ctaOpacity,
                  }}
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
                    opacity: cornerOpacity,
                  }}
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
                    opacity: cornerOpacity,
                  }}
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

                {/* Scroll hint (visible at start) */}
                <motion.div
                  style={{
                    position: "absolute",
                    bottom: 28,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "0.6rem",
                    color: "#5a6478",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    opacity: useTransform(scrollYProgress, [0, 0.12, 0.2], [1, 1, 0]),
                    pointerEvents: "none",
                  }}
                >
                  <motion.div
                    style={{
                      width: 1,
                      height: 36,
                      background: `linear-gradient(to bottom, ${NEON}, transparent)`,
                      transformOrigin: "top",
                    }}
                    animate={{ scaleY: [0, 1, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span>Scroll</span>
                </motion.div>

              </div>{/* /sticky */}
            </div>{/* /spacer */}
          </div>{/* /scrollRef */}

        </motion.div>
      )}
    </AnimatePresence>
  );
}
