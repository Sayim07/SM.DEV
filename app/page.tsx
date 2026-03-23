import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="divider"></div>
      <About />
      <div className="divider"></div>
      <Skills />
      <div className="divider"></div>
      <Projects />
      <div className="divider"></div>
      <Achievements />
      <div className="divider"></div>
      <Contact />
      <Footer />
    </>
  );
}
