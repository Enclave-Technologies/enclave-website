"use client";

import React from "react";
import { Navbarr } from "../../components/Navbar/Navbarr";
import ServicesHero from "../../components/Services/ServicesHero";
import ContactForm from "../../components/Home/ContactForm";
import NewFooter from "../../components/NewFooter";
import Location from "../../components/Home/Location";
import AboutServices from "../../components/Home/about-services";

const AboutUs = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between text-black relative home-font gap-32 bg-[#FAFAFA] overflow-x-hidden">
    <div className="z-10 w-screen">
      <Navbarr />
      <ServicesHero title="About Us" subtitle="Enabling businesses to establish bold digital identities, and create impactful digital solutions Enabling businesses to establish bold digital identities, and create impactful digital solutions Enabling businesses to establish bold digital identities." />
      <AboutServices />
      <Location />
      <ContactForm id="contact-form" />
    </div>

    <div className="hidden md:flex min-h-screen w-full bg-transparent"></div>
    <NewFooter />
  </div>
  );
};

export default AboutUs;
