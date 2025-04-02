import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ScalingSection = ({ sectionNumber, sectionInfo }) => {
  const sectionRef = useRef(null);
  const [widthPercentage, setWidthPercentage] = useState(100); // Start with 100vw

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const { top, bottom, height } =
        sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate the visible percentage of the section
      const visibleHeight = Math.min(bottom, windowHeight) - Math.max(top, 0);
      const visiblePercentage = Math.max(0, visibleHeight / height);

      // Map visible percentage to dynamic width
      if (visiblePercentage > 0.4) {
        const newWidth = 80 - visiblePercentage * 0; // Scale between 100vw and 150vw
        setWidthPercentage(newWidth);
      } else {
        const newWidth = 80;
        setWidthPercentage(newWidth);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        width: `${widthPercentage}vw`,
        transition: "width 0.1s ease-out", // Smooth width changes
        height: "80vh",
        margin: "0 auto",
      }}
      className={`overflow-hidden w-[80vw] h-[80vh] sticky flex flex-row items-center justify-center top-[10vh] transition-all duration-500 ease-out bg-[#1C1C1C] rounded-[24px] text-white`}
    >
      <div className="h-full flex flex-col md:flex-row items-center justify-center gap-0 md:gap-16 p-8">
        <div className="flex flex-col items-start justify-center gap-4 max-w-lg">
          <p className="leading-relaxed">Step {sectionNumber + 1}</p>
          <h1 className="text-4xl font-semibold">{sectionInfo.title}</h1>
          <p className="leading-relaxed">{sectionInfo.description}</p>
        </div>
        <div className="h-full flex items-center justify-center">
          <Image
            src={sectionInfo.image}
            alt="Solutions Development"
            height={540}
            width={540}
          />
        </div>
      </div>
    </div>
  );
};

const ScalingSections = () => {
  return (
    <section className="flex flex-col items-center py-16 md:py-32 px-0 md:px-8 w-full max-w-screen gap-12 bg-[#FAFAFA]">
      <div className="flex flex-col gap-16 items-center px-0 md:px-0">
        <div className="flex flex-col items-center gap-2 max-w-[782px] px-4">
          <h4 className="text-[#FB4E29] text-[20px] md:text-[24px] lg:text-[28px] font-bold">
            How we work
          </h4>
          <div className="flex flex-col items-center gap-0">
            <h2
              className="text-[32px] md:text-[40px] lg:text-[48px] font-bold capitalize max-w-3xl text-center"
              style={{
                lineHeight: "1.3",
              }}
            >
              What happens when you come onboard
            </h2>
            <p className="text-[18px] md:text-[20px] leading-[150%] text-[#26120D] text-center">
              Our design & development process when we start working together
            </p>
          </div>
        </div>
        {[
          {
            title: "Kickoff Meeting",
            description:
              "We initiate the process with a call to understand your business goals, target audience, and the specific outcomes you aim to achieve. You will join our slack channel, fill out a quick onboarding form and we are ready to start.",
            image: "/service-images/002.png",
          },
          {
            title: "Discovery & Wireframing",
            description:
              "We will collect initial ideas and concepts. This research forms the foundation to create a design that speaks directly to your audience, setting up the stage for high-conversions.",
            image: "/service-images/007.png",
          },
          {
            title: "Design",
            description:
              "We design a visually stunning, professional and user-friendly site that captures attention and keeps your visitors engaged.",
            image: "/service-images/001.png",
          },
          {
            title: "Development",
            description:
              "We build your site using Webflow or Wix, ensuring fast load times, seamless functionality, SEO-friendly and third-party integrations.",
            image: "/service-images/003.png",
          },
          {
            title: "Launch",
            description:
              "Launch fast, grow faster. In 4-8 weeks you will be ready to launch your brand new website. We will hand off designs to your team and provide you with support after the launch.",
            image: "/service-images/004.png",
          },
        ].map((sectionInfo, index) => (
          <ScalingSection
            key={index}
            sectionNumber={index}
            sectionInfo={sectionInfo}
          />
        ))}
      </div>
    </section>
  );
};

export default ScalingSections;
