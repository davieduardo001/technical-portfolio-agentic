import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsStrip from "@/components/SkillsStrip";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <SkillsStrip />
      <Achievements />
      <Projects />
      <Certifications />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
