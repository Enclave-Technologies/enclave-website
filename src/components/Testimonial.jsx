import React from "react";
import Image from "next/image";

const Testimonial = ({
  quote,
  name,
  title,
  companyLogo,
  companyName,
  gradientColors = "linear-gradient(106.81deg, rgba(41, 251, 78, 0.25) 0%, rgba(41, 214, 251, 0.25) 47.5%, rgba(78, 41, 251, 0.25) 100%)",
}) => {
  return (
    <div
      className="flex flex-col justify-center items-center p-6 md:p-14 gap-6 w-full max-w-[1200px] mx-auto h-auto md:rounded-[48px] rounded-[16px]"
      style={{
        background: gradientColors,
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-4 md:gap-6 w-full relative">
        <span className="font-bold text-[60px] md:text-[150px] leading-none text-[#121212] absolute md:-top-10 top-0 md:left-4 left-0 md:static">
          &ldquo;
        </span>
        <p className="font-bold text-xl md:text-2xl lg:text-[28px] text-center text-[#100805] max-w-[760px] mt-10 md:mt-6">
          {quote}
        </p>
        <span className="font-bold text-[60px] md:text-[150px] leading-none text-[#121212] absolute md:bottom-0 -bottom-12 md:right-4 right-0 md:static rotate-180">
          &ldquo;
        </span>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full mt-6 md:mt-0">
        <div className="flex flex-col justify-center items-center md:items-end order-3 md:order-1">
          <h4 className="font-bold text-lg text-[#1B0D09]">{name}</h4>
          <p className="font-normal text-base text-[#26120D]">{title}</p>
        </div>

        <div className=" md:block md:h-[40px] md:w-[1px] w-[60%] h-[1px] bg-[#121212] mx-6 order-2"></div>
        <div className="w-[160px] h-[40px] mt-2 md:mt-0 order-1 md:order-3">
          {companyLogo ? (
            <Image
              src={companyLogo}
              alt={companyName || "Company logo"}
              width={160}
              height={40}
              className="object-contain"
            />
          ) : (
            <span className="font-bold text-lg">{companyName}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
