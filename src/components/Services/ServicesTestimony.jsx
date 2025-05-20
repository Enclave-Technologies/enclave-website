import React from "react";

const ServicesTestimony = () => {
  return (
    <section className="w-full min-h-fit">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row justify-center items-center px-0 md:px-[120px] py-4 md:py-16 gap-6 md:gap-12">
        <div
          className="w-full md:w-[748px] h-[300px] md:h-[647px] bg-cover bg-center flex-none order-0"
          style={{ backgroundImage: 'url("/service8.png")' }}
        />

        <div className="flex flex-col justify-center items-center py-4 md:py-6 gap-4 md:gap-6 w-full md:w-[404px] h-auto md:h-[318px] flex-1">
          <div className="flex flex-row items-center w-full md:w-[404px] h-auto md:h-[195px]">
            <p className="font-onest font-bold text-xl md:text-[28px] leading-[140%] text-[#100805] flex-grow text-center md:text-left">
              &quot;Their sophisticated setup process has helped our team get up
              and running quickly. Webflow helped us reach 2x Google and
              SKDrop&apos;s old website sales.&quot;
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-[404px] h-auto md:h-[51px] mt-2 md:mt-6">
            <div className="flex flex-col justify-center items-center md:items-end w-full md:w-[121px] h-auto md:h-[51px]">
              <p className="font-albert-sans font-bold text-lg leading-[150%] text-[#1B0D09] m-0">
                Aman Selarka
              </p>
              <p className="font-albert-sans font-normal text-base leading-[150%] text-[#26120D] m-0">
                Head of Product
              </p>
            </div>

            <div className="hidden md:block w-0 h-[51px] border border-[#121212]" />

            <div
              className="w-[145px] h-[35px] bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: 'url("/company-logos/logo-payphone.png")',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTestimony;
