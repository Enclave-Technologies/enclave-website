import React from "react";
import { Button } from "../Button";

const Contact = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-start lg:p-16 p-6 gap-12 lg:pb-24">
      {/* Left Column */}
      <div className="flex flex-col items-start gap-8 flex-1">
        {/* Text Content */}
        <div className="flex flex-col items-start gap-4 w-full">
          <h2 className="font-onest font-bold lg:text-[48px] text-[32px] leading-[120%] text-black w-full capitalize">
            Launch your next project with confidence
          </h2>
          <p className="font-albert font-normal text-[18px] leading-[150%] text-[#121212] w-full">
            Facilitates community of fitness enthusiasts via social media
            Facilitates community of fitness enthusiasts via social media
            Facilitates community of fitness enthusiasts via social media
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-row items-start lg:gap-8 gap-4">
          <Button
            variant="primary"
            title="Contact Us"
            link="/contact"
            rounded={true}
          />
          <Button
            variant="secondary"
            title="Contact Us"
            link="/contact"
            rounded={true}
          />
        </div>

        {/* Bottom Image */}
        <div
          className="w-full h-[499px]"
          style={{
            backgroundImage: 'url("/works4.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Right Column - Large Image */}
      <div
        className="lg:w-[541px] w-full lg:h-[824px] h-[400px]"
        style={{
          backgroundImage: 'url("/works3.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </section>
  );
};

export default Contact;
