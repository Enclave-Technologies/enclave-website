import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";
import Testimonial from "../Testimonial";
import GradientMetric from "../GradientMetric";

const NewServices = ({ id }) => {
  const services = {
    digital: {
      title: "Social Media Optimization",
      description:
        "We help you understand your audience and make data-driven decisions to grow your business.",
      services: [
        "LinkedIn Marketing",
        "Youtube Marketing",
        "Instagram Marketing",
        "Facebook Marketing",
      ],
      image: "/data-services.png",
    },
    seo: {
      title: "Search Engine Optimization",
      description:
        "Soluions to grow your visibility on Google and drive more organic traffic to your business.",
      services: [
        "Keyword Planning",
        "SEO strategization",
        "Content Creation",
        "Technical SEO",
      ],
      image: "/design-services.png",
    },
    development: {
      title: "Website Design & Development",
      description:
        "We help you integrate AI into your business to automate processes and grow your business.",
      services: [
        "Website Design",
        "Website Development",
        "Website Copywriting",
        "Deployment & Analytics",
      ],
      image: "/seo-services.png",
    },
  };

  return (
    <section
      id={id}
      className="w-full py-20 px-8 md:py-32 flex flex-col items-center justify-center overflow-hidden bg-[#FAFAFA]"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h4 className="text-[#FB4E29] text-[20px] md:text-[24px] lg:text-[28px] font-bold">
            Modular Solutions
          </h4>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold mt-2 mb-4 capitalize">
            Solidify Your Digital Presence
          </h2>
          <p className="text-[#26120D] max-w-3xl mx-auto text-[18px] md:text-[20px] leading-[150%]">
            Providing end-to-end solutions for brands in the ever evolving
            digital landscape
          </p>
        </div>

        <div className="flex items-center justify-center my-16">
          <Image
            src="/services-graphic.png"
            alt="Our Services"
            width={1000}
            height={1000}
            className="w-[90%] h-[90%] object-cover hidden sm:flex"
          />

          <Image
            src="/moble-graphic.png"
            alt="Our Services"
            width={500}
            height={500}
            className="w-[70%] h-[70%] object-cover sm:hidden flex"
          />
        </div>

        {/* <div className="flex items-center justify-center w-full">
          <div className="mb-12 flex items-center justify-center w-fit">
            <Button
              variant="primary"
              title="Book a Consultation"
              link="https://api.whatsapp.com/send/?phone=85259291909&text&type=phone_number&app_absent=0"
              rounded={true}
              target="_blank"
            />
          </div>
        </div> */}

        {/* <div className="flex flex-col items-center justify-center gap-6 w-full mt-24">
          <Testimonial
            quote="I'm so happy! Their solutions design process has tripled our online visibility, helped us rank #1 on Google and skyrocketed our website sales."
            name="Aman Selarka"
            title="Head of Product"
            companyLogo="/affiliate-logos/payphone.png"
            companyName="Payphone"
          />
        </div> */}
      </div>
    </section>
  );
};

export default NewServices;
