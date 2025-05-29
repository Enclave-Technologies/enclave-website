import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col p-0 w-full pt-[70px] pb-6 lg:pb-16">
      <div className="flex flex-col justify-start items-start lg:p-16 p-6 w-full">
        <h1 className="font-onest font-medium lg:text-[96px] md:text-[64px] text-[42px] leading-[100%] text-[#100805] mb-6 w-full lg:max-w-5xl">
          WORKS
        </h1>

        <p className="font-albert font-normal text-[20px] leading-[120%] text-[#26120D] w-full lg:max-w-5xl">
          Enabling businesses to establish bold digital identities, and create
          impactful digital solutions Enabling businesses to establish bold
          digital identities, and create impactful digital solutions Enabling
          businesses to establish bold digital identities,
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] w-full lg:px-16 px-6">
        <div className="w-full aspect-[4/3] relative">
          <Image src="/works2.png" alt="works" fill className="object-cover" />
        </div>
        <div className="w-full aspect-[4/3] relative">
          <Image src="/works1.png" alt="works" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
