"use client";

import { Reveal } from "./Reveal";

const achievements = [
  {
    icon: "🏆",
    title: "6th Place — Smart India Hackathon 2025",
    desc: "National-level government hackathon. Competed against thousands of teams across India.",
    badge: "SIH 2025",
  },
  {
    icon: "🚀",
    title: "Top 10 — EIBS 2026 (NextLevel by Bybit)",
    desc: "ReliefChain placed in the top 10 at EIBS 2026, a prominent startup & blockchain event.",
    badge: "EIBS 2026",
    purple: true,
  },
  {
    icon: "🎓",
    title: "B.Tech — Information Technology",
    desc: "B.P. Poddar Institute of Management and Technology, Kolkata (2024 – 2028).",
    badge: "BPPIMT",
  },
];

export default function Achievements() {
  return (
    <section className="achievements-section" id="achievements">
      <Reveal>
        <div className="achievements-header">
          <div className="section-label">Achievements</div>
          <h2 className="section-title">Milestones &amp; Recognition</h2>
        </div>
      </Reveal>
      
      <div className="achievements-list">
        {achievements.map((achievement, index) => (
          <Reveal key={achievement.title} width="100%" delay={index * 0.1}>
            <div className="achievement-item interactive">
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-content">
                <div className="achievement-title">{achievement.title}</div>
                <div className="achievement-desc">{achievement.desc}</div>
              </div>
              <div className={`achievement-badge ${achievement.purple ? 'purple' : ''}`}>
                {achievement.badge}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
