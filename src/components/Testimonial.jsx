import React from "react";
import Image from "next/image";

const Testimonial = ({ quote, name, title, companyLogo, companyName }) => {
  return (
    <div className="testi-mega flex flex-col justify-center items-center w-screen h-[499px] bg-[#FB4E29] z-4">
      <div className="testi flex flex-col items-center w-full max-w-[1200px] h-[371px]">
        <div className="container flex flex-col justify-center items-center w-full h-[371px] rounded-[48px] px-[48px] py-0 gap-[24px] bg-white bg-opacity-10 backdrop-blur-[7.5px] isolation-auto">
          {/* Quote Row */}
          <div className="content flex flex-row justify-center items-center gap-[48px] w-full max-w-[1104px] h-[200px] z-0">
            <span className="quote-mark text-[200px] font-bold text-[#121212] leading-[1] font-onest">
              &ldquo;
            </span>
            <p className="quote-text font-onest font-bold text-[32px] leading-[1.3] text-center text-[#100805] max-w-[680px]">
              {quote}
            </p>
            <span className="quote-mark text-[200px] font-bold text-[#121212] leading-[1] font-onest rotate-180">
              &ldquo;
            </span>
          </div>
          {/* Client Row */}
          <div className="client flex flex-row justify-center items-center gap-[24px] w-full max-w-[1104px] h-[51px] z-1 mt-[24px]">
            <div className="name flex flex-col justify-center items-end w-[121px] h-[51px]">
              <span className="client-name font-albert font-bold text-[18px] leading-[1.5] text-[#1B0D09]">
                {name}
              </span>
              <span className="client-title font-albert text-[16px] leading-[1.5] text-[#26120D]">
                {title}
              </span>
            </div>
            <div className="divider w-px h-[51px] bg-[#121212] mx-[24px]" />
            <div className="company-logo w-[145px] h-[35px] flex items-center">
              {companyLogo ? (
                <Image
                  src={companyLogo}
                  alt={companyName || "Company logo"}
                  width={145}
                  height={35}
                  className="object-contain"
                />
              ) : (
                <span className="font-bold">{companyName}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
