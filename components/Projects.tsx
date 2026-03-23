"use client";

import { Reveal } from "./Reveal";

const projects = [
  {
    id: "01",
    type: "Featured",
    category: "Web3 · Blockchain",
    title: "ReliefChain",
    desc: "A Web3-based disaster relief platform. Smart contracts handle fund distribution transparently on the Sepolia testnet, with full wallet integration and a polished frontend.",
    tags: ["Solidity", "Sepolia", "Web3.js", "JavaScript", "Smart Contracts"],
    link: "https://relief-test.vercel.app",
    visualIcon: "⛓️",
    visualLabel: "relief-test.vercel.app",
    featured: true,
  },
  {
    id: "02",
    category: "Full-Stack · Solo",
    title: "Napkin2",
    desc: "A full-stack web application built solo end-to-end — frontend UI, backend APIs, database design, and deployment — for a GDG College Hackathon.",
    tags: ["Node.js", "JavaScript", "REST API", "Database"],
    link: "https://napkin2-web-final.vercel.app",
    purple: true,
  },
  {
    id: "03",
    category: "Chrome Extension",
    title: "Browser Tools",
    desc: "Custom Chrome extensions that extend browser capabilities — demonstrating proficiency in browser APIs, content scripts, and background service workers.",
    tags: ["Chrome API", "JavaScript", "Manifest V3"],
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
              <div className="project-card interactive">
                {project.featured ? (
                  <>
                    <div>
                      <div className="project-num"><span></span>{project.id} / {project.type}</div>
                      <div className="project-badge">{project.category}</div>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-desc">{project.desc}</p>
                      <div className="project-tags">
                        {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                      </div>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                          Live Demo →
                        </a>
                      )}
                    </div>
                    <div className="project-visual">
                      <div className="project-visual-inner">
                        <div className="project-visual-icon">{project.visualIcon}</div>
                        <div className="project-visual-label">{project.visualLabel}</div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="project-num"><span></span>{project.id}</div>
                    <div className={`project-badge ${project.purple ? 'purple' : ''}`}>{project.category}</div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.desc}</p>
                    <div className="project-tags">
                      {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        Live Demo →
                      </a>
                    )}
                  </>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
