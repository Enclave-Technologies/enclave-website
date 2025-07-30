"use client";

import React from "react";
import ContactForm from "../../../components/Home/ContactForm";
import Pricing from "../../../components/Home/Pricing";
import { Navbarr } from "../../../components/Navbar/Navbar";
import NewFooter from "../../../components/NewFooter";
import ServicesHero from "../../../components/Services/ServicesHero";
import Steps from "../../../components/Home/steps";
import NewServices from "../../../components/Home/new-services";
import ServicesList from "../../../components/Services/ServicesList";
import AppService from "../../../components/Services/AppService";

const AppDevelopment = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between text-black relative home-font gap-32 bg-[#FAFAFA] overflow-x-hidden">
      <div className="z-10 w-screen">
        <Navbarr />
          <ServicesHero
            title="Application Development"
            subtitle="Enabling businesses to establish bold digital identities, and create impactful digital solutions Enabling businesses to establish bold digital identities, and create impactful digital solutions Enabling businesses to establish bold digital identities."
            btnText="Book Consultation"
          />
        <AppService />
        <NewServices
          fromServices={true}
          title="Our Process"
          subtitle="Where Excellence Meets Passion"
          services={[
            {
              title: "Project Management",
              description:
                "We craft modern websites for new-age businesses, delivering a premium and rich experience to every visitor. Each site is hand-crafted and tailored to your unique brand identity and business goals. Our mobile-first approach ensures optimal performance on all devices, starting with mobile.",
              image: "/service30.png",
              imageAlt: "Project Management",
            },
            {
              title: "UI/UX Design",
              description:
                "We go beyond basic optimization, delivering a rich and prominent online presence that connects with your target audience. Each strategy is tailored to your unique brand identity and business goals, ensuring maximum visibility and organic growth. We prioritize a holistic, data-driven approach that secures top rankings starting with getting you found.",
              image: "/service15.png",
              imageAlt: "UI/UX Design",
            },
            {
              title: "Web Development",
              description:
                "We craft modern mobile applications for new-age businesses, delivering a premium and rich experience to every user. Our mobile-first approach ensures optimal performance and seamless user journeys across all devices, starting with the smartphone in their hand.",
              image: "/service13.png",
              imageAlt: "Web Development",
            },
            {
              title: "Mobile Development",
              description:
                "We craft modern mobile applications for new-age businesses, delivering a premium and rich experience to every user. Our mobile-first approach ensures optimal performance and seamless user journeys across all devices, starting with the smartphone in their hand.",
              image: "/service2.png",
              imageAlt: "Mobile Development",
            },
          ]}
        />
        <ServicesList
          chipText="Our Process"
          heading="Where Excellence Meets Passion"
          services={[
            {
              title: "Discovery & Research",
              description:
                "Facilitates community of fitness enthusiasts via social media.",
              image: "/service17.png",
              imageAlt: "Discovery & Research",
            },
            {
              title: "UI/UX Design",
              description:
                "Facilitates community of fitness enthusiasts via social media.",
              image: "/service21.png",
              imageAlt: "UI/UX Design",
            },
            {
              title: "Software Development",
              description:
                "Facilitates community of fitness enthusiasts via social media.",
              image: "/service29.png",
              imageAlt: "Software Development",
            },
            {
              title: "Launch & Maintenance",
              description:
                "Facilitates community of fitness enthusiasts via social media.",
              image: "/service23.png",
              imageAlt: "Launch & Maintenance",
            },
          ]}
        />
        <Pricing
          id="pricing"
          fromServices={true}
          header="Solutions Tailored To Your Preference"
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

export default AppDevelopment;
