import React from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const Testimonial = ({
  quote,
  name,
  title,
  companyLogo,
  companyName,
  gradientColors = "linear-gradient(106.81deg, rgba(41, 251, 78, 0.25) 0%, rgba(41, 214, 251, 0.25) 47.5%, rgba(78, 41, 251, 0.25) 100%)",
}) => {
  return (
    <section className="">
      <div className="max-w-7xl px-8 flex flex-col items-center justify-center gap-4 md:gap-8 h-full overflow-hidden">
        <SectionHeader
          tag="Reliability"
          title={"Trusted By Industry Leaders and Innovators"}
        />
        <div className="flex flex-col gap-8">
          <div className="w-full hidden md:flex flex-wrap justify-center items-center gap-4 md:gap-12">
            {[1, 2, 3, 4, 5].map((partner, index) => (
              <div className="w-[140px] h-[40px] relative">
                <Image
                  key={index}
                  src={`partner-${partner}.png`}
                  fill
                  objectFit="contain"
                  className="mix-blend-luminosity"
                />
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16">
            <div className="w-full md:w-1/2 aspect-[1/1.4] relative">
              <Image src="/testimonial.png" fill objectFit="contain" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-row gap-0.5">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <svg
                    key={index}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="black"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ))}
              </div>
              <p>
                “Enclave Studios transformed our vision into a functional
                prototype that exceeded our expectations. Their expertise in
                application development is unmatched!”
              </p>
              <div>
                <p className="font-semibold">Ketty Shan</p>
                <p>CEO, Atelier Shan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
