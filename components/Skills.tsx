"use client";

import { Reveal } from "./Reveal";

const skills = [
  { name: "JavaScript", icon: "⚡" },
  { name: "Node.js", icon: "🟢" },
  { name: "Redis", icon: "🔴" },
  { name: "React", icon: "⚛️" },
  { name: "Solidity", icon: "🔷" },
  { name: "Web3.js", icon: "🌐" },
  { name: "REST APIs", icon: "🔌" },
  { name: "Databases", icon: "🗄️" },
  { name: "UI Design", icon: "🎨" },
  { name: "Chrome Ext.", icon: "🧩" },
  { name: "Blockchain", icon: "🔗" },
  { name: "Cybersecurity", icon: "🔐" },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <Reveal>
        <div className="skills-header">
          <div className="section-label">Skills</div>
          <h2 className="section-title">Technologies I work with</h2>
        </div>
      </Reveal>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <Reveal key={skill.name} delay={index * 0.05}>
            <div className="skill-chip">
              <div className="skill-icon">{skill.icon}</div>
              {skill.name}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
