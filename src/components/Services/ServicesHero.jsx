import React from "react";
import { Button } from "../Button";

const ServicesHero = ({ title, subtitle, btnText = "Book Consultation" }) => (
  <section className="flex flex-col p-0 w-full pt-[70px]">
    <div className="flex flex-col justify-center items-center pt-16 px-6 sm:px-[60px] lg:px-[120px] w-full">
      <h1 className="font-onest font-medium lg:text-[96px] md:text-[64px] text-[42px] leading-[100%] text-[#100805] mb-6 w-full text-center">
        {title}
      </h1>

      <p className="font-albert font-normal text-[20px] leading-[120%] text-[#26120D] text-center">
        {subtitle}
      </p>

      {btnText && (
        <Button
          variant="filled"
          title={btnText}
          link="/contact"
          rounded={true}
          className="bg-[#FB4E29] text-white px-8 py-3 mt-10"
        />
      )}
    </div>
  </section>
);

export default ServicesHero;
