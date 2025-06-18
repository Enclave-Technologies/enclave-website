import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";

const ServicesList = ({
  chipText = "Our Process",
  heading = "Where Excellence Meets Passion",
  services = [],
  buttonText = "Get In Touch",
  buttonLink = "/contact",
}) => {
  return (
    <section className="flex flex-col justify-center items-center py-16 md:py-[64px] px-6 sm:px-[60px] lg:px-[64px] gap-12 bg-[#FAFAFA] z-[5]">
      {/* Content Container */}
      <div className="flex flex-col items-center gap-12 w-full max-w-[1312px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-[#FB4E29] text-[20px] md:text-[24px] lg:text-[28px] font-bold">
              {chipText}
            </h4>
            <h2
              className="text-[32px] md:text-[40px] lg:text-[48px] font-bold capitalize text-center"
              style={{
                lineHeight: "1.3",
              }}
            >
              {heading}{" "}
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex flex-row flex-wrap items-start content-start py-6 gap-2 w-full">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-3 w-full sm:w-[calc(50%-4px)] lg:w-[322px] flex-grow"
              >
                {/* Image Container */}
                <div className="flex flex-col items-start p-6 md:p-[64px] gap-[10px] w-full h-[322px] bg-white rounded-lg overflow-hidden group cursor-pointer">
                  <div className="relative w-full h-full flex-grow transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col items-start py-3 gap-1 w-full">
                  {/* Service Title */}
                  <h3 className="font-onest font-bold text-[24px] leading-[120%] text-center text-[#100805] w-full">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="font-albert text-[18px] leading-[150%] text-center text-[#121212] w-full">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex flex-row justify-center items-center gap-12 mt-8 w-full">
            <Button
              title={buttonText}
              link={buttonLink}
              rounded={true}
              variant="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
