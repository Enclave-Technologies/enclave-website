"use client";
import Testimony from "../components/Home/testimony";
import Steps from "../components/Home/steps";
import Projects from "../components/Home/projects";
import NewServices from "../components/Home/new-services";
import { Navbar } from "../components/Navbar/Navbar";
import NewFooter from "../components/NewFooter";
import { FloatingWA } from "../components/FloatingWA";
import Location from "../components/Home/Location";
import ContactForm from "../components/Home/ContactForm";
import OurServices from "../components/Home/our-services";
import Logos from "../components/Home/Logos";
import AdditionalServices from "../components/Home/additional_services";
import About from "../components/Home/about";
// Case-sensitivity is turned on for vercel builds

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between text-black relative home-font gap-32 bg-[#FAFAFA]">
      {/* <div className="cursor" /> */}
      <div className="z-10 flex flex-col items-center">
        <Navbar />
        <FloatingWA />
        <Testimony id="home" />
        <Logos id="logos" />
        <Projects id="our-works" />
        <Steps />
        <AdditionalServices id="services"/>
        <About id="about-us"/>
      </div>
      <div className="hidden md:flex min-h-screen w-full bg-transparent"></div>
      <NewFooter id="footer" />
    </main>
  );
}
