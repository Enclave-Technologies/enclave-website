import React from "react";

const Steps = () => {
  return (
    <section className="w-full min-h-fit px-0">
      <div className="w-full mx-auto flex flex-col md:flex-row-reverse justify-center items-center px-12 md:px-20 py-4 md:py-16 gap-6 md:gap-12">
        <div
          className="w-full md:w-[748px] h-[300px] md:h-[647px] bg-cover bg-center flex-none order-0"
          style={{ backgroundImage: 'url("/service8.png")' }}
        />

        <div className="flex flex-col justify-center items-start py-4 md:py-6 gap-4 md:gap-6 w-full h-auto md:h-[318px] flex-1">
          <div className="flex flex-row items-center w-full h-auto md:h-[195px]">
            <p className="font-onest font-bold text-xl md:text-[28px] leading-[140%] text-[#100805] flex-grow text-center md:text-left">
              Their solutions design process has tripled our online visibility,
              helped us rank #1 on Google and skyrocketed our website sales.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full h-auto md:h-[51px] mt-2 md:mt-6">
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

export default Steps;
