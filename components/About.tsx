"use client";

import { Reveal } from "./Reveal";

export default function About() {
  return (
    <section className="about" id="about">
      <Reveal>
        <div className="about-text">
          <div className="section-label">About Me</div>
          <h2 className="section-title">
            Builder by nature,<br />learner by habit.
          </h2>
          <p>
            <strong>First-year B.Tech IT student at BPPIMT, Kolkata</strong> who believes in <strong>learning by shipping</strong>. From crafting pixel-perfect UIs to writing Solidity smart contracts on Sepolia, I explore the full spectrum of modern development — <strong>frontend, backend, Web3 infrastructure, Chrome extensions, and cybersecurity</strong>.
          </p>
          <p>
            A national hackathon competitor, I&apos;ve built solo full-stack apps and am always open to <strong>internships, collaborations,</strong> and the next interesting problem.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="about-stats">
          {/* Card 1 */}
          <div className="about-stat-card">
            <div className="about-stat-card__accent" />
            <div className="about-stat-card__num">6th</div>
            <div className="about-stat-card__label">Place @ SIH 2025</div>
            <div className="about-stat-card__sub">Live Projects</div>
          </div>

          {/* Card 2 */}
          <div className="about-stat-card">
            <div className="about-stat-card__accent about-stat-card__accent--purple" />
            <div className="about-stat-card__num about-stat-card__num--purple">Top 10</div>
            <div className="about-stat-card__label">EIBS 2026</div>
            <div className="about-stat-card__sub">Started B.Tech</div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
