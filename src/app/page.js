import Testimony from "../components/Home/testimony";
import Steps from "../components/Home/steps";
import Projects from "../components/Home/projects";
import NewServices from "../components/Home/new-services";
import { Navbarr } from "../components/Navbar/Navbarr";
import NewFooter from "../components/NewFooter";
import { FloatingWA } from "../components/FloatingWA";
// Case-sensitivity is turned on for vercel builds

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-black relative home-font gap-32 bg-[#FAFAFA]">
      {/* <div className="cursor" /> */}
      <div className="z-10 flex flex-col items-center">
        <Navbarr />
        <FloatingWA />
        <Testimony id="home" />
        <Projects id="our-works" />
        <NewServices id="services" />
        <Steps id="about-us" />
        {/* <KPIs id="new-services" /> */}
        {/* <OurServices id="our-services" /> */}
        {/* <ScalingSections /> */}
        {/* <Team id="about-us" /> */}
        {/* <Pricing id="pricing" /> */}
      </div>
      <div className="hidden md:flex min-h-screen w-full bg-transparent"></div>
      <NewFooter id="footer" />
    </main>
  );
}
