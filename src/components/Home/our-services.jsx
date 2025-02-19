import React from "react";
import { Button } from "../Button";
import Image from "next/image";

const ServiceCard = ({ title, services, image }) => (
  <div
    className="bg-white rounded-[8px] p-8 hover:translate-y-[-5px] transition-all duration-500"
    style={{
      background:
        "linear-gradient(113.44deg, rgba(255, 255, 255, 0.4) 22.6%, rgba(255, 255, 255, 0.1) 92.47%)",
      boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
      backdropFilter: "blur(15px)",
    }}
  >
    <h3 className="text-[32px] font-bold mb-6 text-[#100805] leading-[130%]">
      {title}
    </h3>
    <div className="grid grid-cols-2 gap-4 mb-6">
      {services.map((service, index) => (
        <div key={index} className="flex items-start gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-1 flex-shrink-0"
          >
            <path
              d="M22 11.5799V12.4999C21.9988 14.6563 21.3005 16.7545 20.0093 18.4817C18.7182 20.2088 16.9033 21.4723 14.8354 22.0838C12.7674 22.6952 10.5573 22.6218 8.53447 21.8744C6.51168 21.1271 4.78465 19.746 3.61096 17.9369C2.43727 16.1279 1.87979 13.9879 2.02168 11.8362C2.16356 9.68443 2.99721 7.63619 4.39828 5.99694C5.79935 4.35768 7.69279 3.21525 9.79619 2.74001C11.8996 2.26477 14.1003 2.4822 16.07 3.35986"
              stroke="#FB4E29"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 4.5L12 14.51L9 11.51"
              stroke="#FB4E29"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[#6E605D] text-sm">{service}</span>
        </div>
      ))}
    </div>
    <div className="w-full h-[120px]  overflow-hidden flex items-center justify-center mt-10">
      <Image
        src={image}
        width={120}
        height={120}
        alt={title}
        className="w-full h-full object-contain"
      />
    </div>
  </div>
);

const OurServices = ({ id }) => {
  const services = {
    digital: {
      title: "Data Analytics",
      services: [
        "Growth Insights",
        "Marketing Analytics",
        "Business Intelligence (BI)",
        "Custom Data Solutions",
      ],
      image: "/data-services.png",
    },
    seo: {
      title: "Search Engine Optimization",
      services: [
        "Search Engine Optimization (SRO)",
        "Blog Writing",
        "Seach Engine Marketing (SEM)",
        "Website Development",
      ],
      image: "/design-services.png",

    },
    development: {
      title: "AI Integration",
      services: [
        "Sales and Marketing Automations",
        "ML Deployment",
        "Process Automation",
        "AI Deployment",
      ],
      image: "/seo-services.png",
    },
  };

  return (
    <section
      id={id}
      className="relative  w-screen min-h-screen overflow-hidden py-32 px-4 md:px-10"
      style={{
        backgroundImage: "url('/testimonials-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute w-[784px] h-[274px] left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:pr-8 md:ml-0 ml-4">
            <h4 className="text-[#FB4E29] text-lg font-medium mb-4">
              Our Services
            </h4>
            <p className="text-4xl lg:text-5xl font-semibold mb-6 md:mb-8">
              We grow your business with data-backed solutions.
            </p>
            <div className="inline-block">
              <Button
                variant="secondary"
                title="Start Discussion"
                link="/contact"
              />
            </div>
          </div>

          <ServiceCard {...services.seo} />
          <ServiceCard {...services.digital} />
          <ServiceCard {...services.development} />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
