import React from "react";
import Image from "next/image";

const Location = () => {
  return (
    <section className="flex flex-col items-center py-16 md:py-[64px] px-6 md:px-[60px] lg:px-[120px] gap-8 md:gap-[32px] w-full bg-[#FAFAFA]">
      <div className="flex flex-col items-center gap-12 md:gap-[48px] w-full">
        <div className="flex flex-col items-start gap-5 w-full">
          <div className="flex flex-col justify-center items-center gap-1 w-full">
            <p className="font-onest font-bold text-[16px] md:text-[20px] leading-[140%] text-center text-[#FB4E29] w-full">
              Visit Us
            </p>
            <h2 className="font-onest capitalize font-bold text-[32px] md:text-[48px] leading-[120%] text-center text-[#100805] w-full">
              Our Locations
            </h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-14 w-full">
          <div className="w-full md:h-[573px] h-[400px] relative">
            <Image
              src="/locations.png"
              alt="Hong Kong Office Location"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-between items-start w-full md:h-[573px]">
            <div className="flex flex-col items-start gap-3 md:gap-[12px] w-full">
              <h3 className="font-onest font-bold text-[24px] md:text-[32px] leading-[150%] text-black">
                🇭🇰 Hong Kong
              </h3>
              <p className="font-onest text-[18px] md:text-[24px] leading-[150%] text-black">
                39/F, Dah Sing Financial Building, Wan Chai
              </p>
              <p className="font-onest text-[18px] md:text-[24px] leading-[150%] text-black">
                灣仔大新金融中心39樓
              </p>
            </div>

            <div className="flex flex-col items-start gap-6 md:gap-[24px] w-full">
              <div className="flex flex-col items-start gap-3 md:gap-[12px] w-full">
                <h4 className="font-onest font-bold text-[20px] md:text-[24px] leading-[150%] text-black">
                  Phone
                </h4>
                <a
                  href="tel:+85259291909"
                  className="font-onest text-[18px] md:text-[24px] leading-[150%] text-black hover:text-[#FB4E29] transition-colors"
                >
                  +852 5929 1909
                </a>
              </div>

              <div className="flex flex-col items-start gap-3 md:gap-[12px] w-full">
                <h4 className="font-onest font-bold text-[20px] md:text-[24px] leading-[150%] text-black">
                  Email
                </h4>
                <a
                  href="mailto:hello@enclave-studios.com"
                  className="font-onest text-[18px] md:text-[24px] leading-[150%] text-black hover:text-[#FB4E29] transition-colors"
                >
                  hello@enclave-studios.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
