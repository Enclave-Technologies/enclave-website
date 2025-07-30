"use client";

import React from "react";
import ContactForm from "../../../components/Home/ContactForm";
import Pricing from "../../../components/Home/Pricing";
import { Navbarr } from "../../../components/Navbar/Navbar";
import NewFooter from "../../../components/NewFooter";
import ServicesHero from "../../../components/Services/ServicesHero";
import ServicesIndustry from "../../../components/Services/ServicesIndustry";
import Projects from "../../../components/Home/projects";
import Steps from "../../../components/Home/steps";
import NewServices from "../../../components/Home/new-services";
import ServicesList from "../../../components/Services/ServicesList";

const WebDesign = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between text-black relative home-font gap-32 bg-[#FAFAFA] overflow-x-hidden">
      <div className="z-10 w-screen">
        <Navbarr />
        <ServicesHero
          title="Website Design & Development"
          subtitle="Enabling businesses to establish bold digital identities, and create impactful digital solutions Enabling businesses to establish bold digital identities, and create impactful digital solutions Enabling businesses to establish bold digital identities."
          btnText="Book Consultation"
        />
        <Projects fromServices={true} />
        <NewServices
          fromServices={true}
          title="Our Process"
          subtitle="Where Excellence Meets Passion"
          services={[
            {
              title: "Graphic Design",
              description:
                "We craft modern mobile applications for new-age businesses, delivering a premium and rich experiehand.",
              image: "/service14.png",
              imageAlt: "Graphic Design",
            },
            {
              title: "UI/UX Design",
              description:
                "We craft modern mobile applications for new-age businesses, delivering a premium and rich experiehand.",
              image: "/service15.png",
              imageAlt: "UI/UX Design",
            },
            {
              title: "Copywriting",
              description:
                "We craft modern mobile applications for new-age businesses, delivering a premium and rich experiehand.",
              image: "/service16.png",
              imageAlt: "Copywriting",
            },
            {
              title: "Website Development",
              description:
                "We craft modern mobile applications for new-age businesses, delivering a premium and rich experiehand.",
              image: "/service13.png",
              imageAlt: "Website Development",
            },
          ]}
        />
        <ServicesList
          chipText="Our Process"
          heading="Where Excellence Meets Passion"
          services={[
            {
              title: "Discovery & Wireframing",
              description:
                "Facilitates community of fitness enthusiasts via social media",
              image: "/service17.png",
              imageAlt: "Discovery & Wireframing",
            },
            {
              title: "Graphic & UI/UX Design",
              description:
                "Facilitates community of fitness enthusiasts via social media",
              image: "/service20.png",
              imageAlt: "Graphic & UI/UX Design",
            },
            {
              title: "Copywriting",
              description:
                "Facilitates community of fitness enthusiasts via social media",
              image: "/service19.png",
              imageAlt: "Copywriting",
            },
            {
              title: "Development & Launch",
              description:
                "Facilitates community of fitness enthusiasts via social media",
              image: "/service18.png",
              imageAlt: "Development & Launch",
            },
          ]}
        />
        <ServicesIndustry />
        <Pricing
          id="pricing"
          header="Pick Your Package Wisely"
          subtitle="Simple, transparent pricing for all your website needs."
        />
        <ContactForm id="contact-form" />
        <Steps id="about-us" fromServices={true} />
      </div>

      <div className="hidden md:flex min-h-screen w-full bg-transparent"></div>
      <NewFooter />
    </div>
  );
};

export default WebDesign;
