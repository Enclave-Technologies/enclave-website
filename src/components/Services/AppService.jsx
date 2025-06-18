import React from "react";
import { Button } from "../Button";

const WorkItem = ({ title, description }) => (
  <div className="flex flex-col justify-center items-start w-full gap-[18.59px]">
    {/* Image Placeholder */}
    <div className="w-full h-[300px] md:h-[500px] lg:h-[731px] bg-black" />

    {/* Content */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-6 md:gap-[9.29px]">
      <div className="flex flex-col items-start gap-[9.29px] flex-grow max-w-[1041px]">
        <h3 className="font-onest font-bold text-[24px] leading-[120%] text-[#121212] w-full">
          {title}
        </h3>
        <p className="font-albert text-[18px] md:text-[20px] leading-[150%] text-[#26120D] max-w-[743px]">
          {description}
        </p>
      </div>
      <Button
        title="Learn More"
        variant="primary"
        rounded={true}
        className="min-h-[40px] max-h-[48px] w-full md:w-auto mt-4 md:mt-0"
      />
    </div>
  </div>
);

const AppService = () => {
  const works = [
    {
      title: "GYM MANAGEMENT SOFTWARE",
      description:
        "We craft modern websites for new-age businesses, delivering a premium and rich experience to every visitor. Each site is hand-crafted and tailored to your.",
    },
    {
      title: "REAL-ESTATE MANAGEMENT SOFTWARE",
      description:
        "We craft modern websites for new-age businesses, delivering a premium and rich experience to every visitor. Each site is hand-crafted and tailored to your.",
    },
  ];

  return (
    <section className="flex flex-col items-center py-16 md:py-[64px] px-6 sm:px-[60px] lg:px-[120px] gap-12 w-full">
      {/* Keep existing header */}
      <div className="flex flex-col items-center gap-6 w-full">
        <div className="flex flex-col items-center gap-2">
          <h4 className="text-[#FB4E29] text-[20px] md:text-[24px] lg:text-[28px] font-bold">
            Featured Works
          </h4>
          <h2
            className="text-[32px] md:text-[40px] lg:text-[48px] font-bold capitalize text-center"
            style={{
              lineHeight: "1.3",
            }}
          >
            Impossible Redefined
          </h2>
        </div>
      </div>

      {/* Works Container */}
      <div className="flex flex-col items-center gap-12 w-full max-w-[1200px]">
        {works.map((work, index) => (
          <WorkItem
            key={index}
            title={work.title}
            description={work.description}
          />
        ))}
      </div>
    </section>
  );
};

export default AppService;
