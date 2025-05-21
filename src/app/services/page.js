"use client";

import React from "react";
import ServicesHero from "../../components/Services/ServicesHero";
import ServicesSection from "../../components/Services/ServicesSection";
import NewFooter from "../../components/NewFooter";
import { Navbarr } from "../../components/Navbar/Navbarr";
import ServicesTestimony from "../../components/Services/ServicesTestimony";
import ServicesIndustry from "../../components/Services/ServicesIndustry";

const ServicesPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between text-black relative home-font gap-32 bg-[#FAFAFA] overflow-x-hidden">
      <div className="z-10 w-screen">
        <Navbarr />
        <ServicesHero id="services-hero" />
        <ServicesSection id="services-section" />
        <ServicesIndustry id="services-industry" />
        <ServicesTestimony id="services-testimony" />
      </div>

      <div className="hidden md:flex min-h-screen w-full bg-transparent"></div>
      <NewFooter id="footer" />
    </div>
  );
};

export default ServicesPage;
