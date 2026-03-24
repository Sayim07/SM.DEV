"use client";

import { Reveal } from "./Reveal";

const links = [
  { icon: "✉️", label: "Email Me", href: "mailto:sayimmullick.it224068@bppimt.ac.in" },
  { icon: "💼", label: "LinkedIn", href: "https://www.linkedin.com/in/sayim-mullick-250722392/" },
  { icon: "⛓️", label: "ReliefChain", href: "https://relief-test.vercel.app" },
  { icon: "📝", label: "Napkin2", href: "https://napkin2-web-final.vercel.app" },
];

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <Reveal width="100%">
          <div className="section-label" style={{ justifyContent: "center" }}>Contact</div>
          <h2>Let&apos;s build something<br/><span>together.</span></h2>
          <p>Open to internships, hackathon teams, and developer collaborations. If you&apos;re working on something interesting, I&apos;d love to hear about it.</p>
        </Reveal>
        
        <div className="contact-links">
          {links.map((link, index) => (
            <Reveal key={link.label} delay={index * 0.1}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="contact-link interactive">
                <span>{link.icon}</span> {link.label}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
