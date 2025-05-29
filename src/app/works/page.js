"use client";

import { Navbarr } from "../../components/Navbar/Navbarr";
import NewFooter from "../../components/NewFooter";
import HeroSection from "../../components/Works/HeroSection";
import Projects from "../../components/Works/Projects";
import Contact from "../../components/Works/Contact";

export default function Works() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-black relative home-font gap-32 bg-[#FAFAFA] overflow-x-hidden">
      <div className="z-10 w-screen">
        <Navbarr />
        <HeroSection id="hero-section" />
        <Projects id="projects" />
        <Contact id="contact" />
      </div>

      <div className="hidden md:flex min-h-screen w-full bg-transparent"></div>
      <NewFooter id="footer" />
    </main>
  );
}
