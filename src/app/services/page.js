"use client";

import React from "react";
import ServicesHero from "../../components/Services/ServicesHero";
import ServicesSection from "../../components/Services/ServicesSection";
import NewFooter from "../../components/NewFooter";
import { Navbarr } from "../../components/Navbar/Navbarr";
import ContactForm from "../../components/Home/ContactForm";

const ServicesPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between text-black relative home-font gap-32 bg-[#FAFAFA] overflow-x-hidden">
      <div className="z-10 w-screen">
        <Navbarr />
        <ServicesHero
          title="Services"
          subtitle="We provide full-service digital marketing services to our clients helping them launch and grow their digital presence with ease. We partner up with startups and businesses alike to bring their solutions to market and position their brand for maximum impact."
        />
        <ServicesSection />
        <ContactForm id="contact-form" />
      </div>

      <div className="hidden md:flex min-h-screen w-full bg-transparent"></div>
      <NewFooter />
    </div>
  );
};

export default ServicesPage;
