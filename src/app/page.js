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
    <main className="flex min-h-screen flex-col items-center justify-between text-black relative home-font gap-32 bg-[#FAFAFA]">
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
        {/* <OurServices id="our-services" /> */}
        {/* <NewServices
          id="services"
          title="Beyond the Basics"
          subtitle="Where Excellence Meets Passion"
          services={[
            {
              title: "Website Design & Development",
              description:
                "We craft modern websites for new-age businesses, delivering a premium and rich experience to every visitor. Each site is hand-crafted and tailored to your unique brand identity and business goals. Our mobile-first approach ensures optimal performance on all devices, starting with mobile.",
              image: "/service7.png",
              imageAlt: "Website Design & Development",
            },
            {
              title: "Search Engine Optimisation (SEO)",
              description:
                "We go beyond basic optimization, delivering a rich and prominent online presence that connects with your target audience. Each strategy is tailored to your unique brand identity and business goals, ensuring maximum visibility and organic growth. We prioritize a holistic, data-driven approach that secures top rankings starting with getting you found.",
              image: "/service4.png",
              imageAlt: "Search Engine Optimisation (SEO)",
            },
            {
              title: "Search Engine Marketing (SEM)",
              description:
                "We craft modern mobile applications for new-age businesses, delivering a premium and rich experience to every user. Our mobile-first approach ensures optimal performance and seamless user journeys across all devices, starting with the smartphone in their hand.",
              image: "/service6.png",
              imageAlt: "Search Engine Marketing (SEM)",
            },
            {
              title: "Application Development",
              description:
                "We craft modern mobile applications for new-age businesses, delivering a premium and rich experience to every user. Our mobile-first approach ensures optimal performance and seamless user journeys across all devices, starting with the smartphone in their hand.",
              image: "/service2.png",
              imageAlt: "Application Development",
            },
          ]}
        /> */}
        {/* <Location id="location" /> */}
        {/* <ContactForm id="contact-form" /> */}
        {/* <Team id="about-us" /> */}
      </div>
      <div className="hidden md:flex min-h-screen w-full bg-transparent"></div>
      <NewFooter id="footer" />
    </main>
  );
}
