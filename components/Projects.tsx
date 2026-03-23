"use client";

import { Reveal } from "./Reveal";

const projects = [
  {
    id: "01",
    category: "Web3 · Blockchain",
    title: "ReliefChain",
    desc: "A Web3-based disaster relief platform. Smart contracts handle fund distribution transparently on the Sepolia testnet, with full wallet integration and a polished frontend.",
    tags: ["Solidity", "Sepolia", "Web3.js", "JavaScript", "Smart Contracts"],
    link: "https://relief-test.vercel.app/",
  },
  {
    id: "02",
    category: "Full-Stack · Solo",
    title: "Napkin2",
    desc: "A full-stack web application built solo end-to-end — frontend UI, backend APIs, database design, and deployment — for a GDG College Hackathon.",
    tags: ["Node.js", "JavaScript", "REST API", "Database"],
    link: "https://napkin2-web-final.vercel.app/",
    purple: true,
  },
  {
    id: "03",
    category: "Chrome Extension",
    title: "Browser Tools",
    desc: "Custom Chrome extensions that extend browser capabilities — demonstrating proficiency in browser APIs, content scripts, and background service workers.",
    tags: ["Chrome API", "JavaScript", "Manifest V3"],
    link: "https://github.com/Sayim07/extension_DS",
    linkLabel: "GitHub Repository →",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-inner">
        <Reveal>
          <div className="projects-header">
            <div className="section-label">Projects</div>
            <h2 className="section-title">Things I&apos;ve built</h2>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} width="100%" delay={index * 0.1}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card interactive"
                style={{ textDecoration: "none", display: "block" }}
              >
                <div className="project-num">
                  <span></span>
                  {project.id}
                </div>
                <div
                  className={`project-badge ${project.purple ? "purple" : ""}`}
                >
                  {project.category}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-link">
                  {project.linkLabel || "Live Demo →"}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
