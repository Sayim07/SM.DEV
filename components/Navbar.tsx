"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-logo">SM.dev</div>
      <ul className="nav-links">
        <li><Link href="#about" className="interactive">About</Link></li>
        <li><Link href="#skills" className="interactive">Skills</Link></li>
        <li><Link href="#projects" className="interactive">Projects</Link></li>
        <li><Link href="#achievements" className="interactive">Awards</Link></li>
        <li><Link href="#contact" className="interactive">Contact</Link></li>
      </ul>
    </motion.nav>
  );
}
