import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";

import { GoPencil } from "react-icons/go";

const NumberCircle = ({ number }) => (
  <div className="flex flex-col justify-center items-center w-[60px] h-[60px] bg-[#E9E7E7] rounded-[48px]">
    <span className="font-bold text-[28px] leading-[130%] text-[#1B0D09]">
      {number}
    </span>
  </div>
);

const OurServices = ({ id }) => {
  return (
    <section
      id={id}
      className="flex flex-col justify-center items-center py-16 px-8 w-full bg-[#FAFAFA]"
    >
      <div className="max-w-7xl w-full mx-auto">
        {/* <div className="text-center mb-14 mx-auto">
          <h4 className="text-[#FB4E29] text-lg font-bold mb-3 ">
            Our Services
          </h4>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 capitalize max-w-md mx-auto">
            Accelerate Growth With Our End-to-End Solutions
          </h2>
          <p className="text-[#26120D] max-w-sm mx-auto">
            Eliminate disconnected systems and scattered systems with our
            unified approach
          </p>
        </div> */}

        <div className="flex flex-col md:gap-12 gap-6">
          <div className="box-border flex md:flex-row flex-col items-start md:p-[32px] p-4 md:gap-[48px] gap-6 w-full max-w-[1440px] md:h-[500px] h-full bg-gradient-to-br from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.1)] shadow-[0px_0px_15px_rgba(0,0,0,0.2)] backdrop-blur-[15px] rounded-[20px]">
            <div className="flex md:flex-col flex-col-reverse justify-between items-start p-0 md:gap-[48px] gap-6 h-full flex-1">
              <div className="flex flex-col items-start p-0 md:gap-[16px] gap-4">
                <h3 className="font-bold text-[36px] md:text-[48px] lg:text-[56px] md:max-w-sm max-w-full leading-[120%] text-[#100805]">
                  Solutions Prototyping
                </h3>

                <p className="text-[18px] md:text-[20px] leading-[150%] text-[#26120D]">
                  We design and refine conceptual blueprints that blend
                  innovation with technical insight, transforming preliminary
                  ideas into engaging, practical models. Our bespoke prototyping
                  process captures the essence of your vision while setting the
                  stage for scalable, future-ready solutions.
                </p>
              </div>
            </div>

            <div className="w-full h-full flex-1">
              <Image
                src="/service-images/001.png"
                alt="Solutions Development"
                width={100}
                height={100}
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          <div className="box-border flex md:flex-row flex-col items-start md:p-[32px] p-4 md:gap-[48px] gap-6 w-full max-w-[1440px] md:h-[500px] h-full bg-gradient-to-br from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.1)] shadow-[0px_0px_15px_rgba(0,0,0,0.2)] backdrop-blur-[15px] rounded-[20px]">
            <div className="flex md:flex-col flex-col-reverse justify-between items-start p-0 md:gap-[48px] gap-6 h-full flex-1">
              <div className="flex flex-col items-start p-0 md:gap-[16px] gap-4">
                <h3 className="font-bold text-[36px] md:text-[48px] lg:text-[56px] md:max-w-sm max-w-full leading-[120%] text-[#100805]">
                  Software Development
                </h3>

                <p className="text-[18px] md:text-[20px] leading-[150%] text-[#26120D]">
                  We engineer robust, dynamic applications that combine
                  precision coding with creative design to produce intuitive,
                  scalable systems. Our approach merges rigorous methodology
                  with innovative thinking, ensuring each solution not only
                  meets your present needs but evolves seamlessly with your
                  business.
                </p>
              </div>
            </div>

            <div className="w-full h-full flex-1">
              <Image
                src="/service-images/002.png"
                alt="Solutions Development"
                width={100}
                height={100}
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          <div className="box-border flex md:flex-row flex-col items-start md:p-[32px] p-4 md:gap-[48px] gap-6 w-full max-w-[1440px] md:h-[500px] h-full bg-gradient-to-br from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.1)] shadow-[0px_0px_15px_rgba(0,0,0,0.2)] backdrop-blur-[15px] rounded-[20px]">
            <div className="flex md:flex-col flex-col-reverse justify-between items-start p-0 md:gap-[48px] gap-6 h-full flex-1">
              <div className="flex flex-col items-start p-0 md:gap-[16px] gap-4">
                <h3 className="font-bold text-[36px] md:text-[48px] lg:text-[56px] md:max-w-sm max-w-full leading-[120%] text-[#100805]">
                  Real-time Tech Support
                </h3>

                <p className="text-[18px] md:text-[20px] leading-[150%] text-[#26120D]">
                  Your website should be more than functional—it should
                  resonate. We craft bespoke digital experiences that merge
                  innovation with creativity, delivering intuitive, visually
                  stunning platforms that captivate audiences, reflect your
                  brand’s essence, and adapt to future opportunities.
                </p>
              </div>
            </div>

            <div className="w-full h-full flex-1">
              <Image
                src="/service-images/003.png"
                alt="Solutions Development"
                width={100}
                height={100}
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          <div className="box-border flex md:flex-row flex-col items-start md:p-[32px] p-4 md:gap-[48px] gap-6 w-full max-w-[1440px] md:h-[500px] h-full bg-gradient-to-br from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.1)] shadow-[0px_0px_15px_rgba(0,0,0,0.2)] backdrop-blur-[15px] rounded-[20px]">
            <div className="flex md:flex-col flex-col-reverse justify-between items-start p-0 md:gap-[48px] gap-6 h-full flex-1">
              <div className="flex flex-col items-start p-0 md:gap-[16px] gap-4">
                <h3 className="font-bold text-[36px] md:text-[48px] lg:text-[56px] md:max-w-sm max-w-full leading-[120%] text-[#100805]">
                  Digital Takeoff & Marketing
                </h3>

                <p className="text-[18px] md:text-[20px] leading-[150%] text-[#26120D]">
                  Impactful marketing goes beyond visibility—it creates
                  connections. We fuse creativity with analytics to craft
                  adaptive strategies that engage your audience authentically,
                  keeping your brand relevant and resonant while delivering
                  measurable results in an ever-evolving digital world.
                </p>
              </div>
            </div>

            <div className="w-full h-full flex-1">
              <Image
                src="/service-images/004.png"
                alt="Solutions Development"
                width={100}
                height={100}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
