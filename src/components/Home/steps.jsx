import React from "react";
import Image from "next/image";

const Steps = ({ id }) => (
  <section
    id={id}
    className="w-full py-16 md:py-32 bg-white"
    style={{ borderRadius: 0 }}
  >
    <div className="mx-auto flex flex-col lg:flex-row items-center gap-12 px-4 md:px-12">
      <div className="flex-shrink-0 w-full max-w-[350px] md:max-w-[400px] lg:max-w-[537px]">
        <Image
          src="/ketty.png"
          alt="Ketty Shan"
          width={537}
          height={642}
          className="rounded-none object-cover w-full h-auto"
          priority
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-6 w-full max-w-[40rem]">
        <div className="flex flex-row items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#000"
              stroke="#000"
              strokeWidth="2"
            >
              <polygon points="12,2 15,9 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,9" />
            </svg>
          ))}
        </div>
        <p className="font-normal text-base md:text-lg leading-relaxed text-[#100805] font-[Albert Sans]">
          “Enclave Studios transformed our vision into a functional prototype
          that exceeded our expectations. Their expertise in application
          development is unmatched!”
        </p>
        <div className="flex flex-col items-start">
          <span className="font-semibold text-sm md:text-base text-black font-[Albert Sans]">
            Ketty Shan
          </span>
          <span className="font-normal text-sm md:text-base text-black font-[Albert Sans]">
            CEO, Atelier Shan
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default Steps;
