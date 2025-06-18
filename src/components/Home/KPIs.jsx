import React from "react";

const KPIs = ({ metrics }) => {
  return (
    <section className="flex flex-col justify-center items-center py-16 md:py-[64px] px-6 sm:px-[60px] lg:px-[64px] gap-12 bg-[#FAFAFA] z-[6]">
      {/* Content Container */}
      <div className="flex flex-col items-center gap-12 w-full max-w-[1312px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex flex-col items-center gap-2 max-w-[782px]">
            <h4 className="text-[#FB4E29] text-[20px] md:text-[24px] lg:text-[28px] font-bold">
              Our Process
            </h4>
            <h2
              className="text-[32px] md:text-[40px] lg:text-[48px] font-bold capitalize text-center text-[#100805]"
              style={{
                lineHeight: "1.3",
              }}
            >
              Where Excellence Meets Passion
            </h2>
            <p className="text-[18px] md:text-[20px] leading-[150%] text-[#26120D] text-center max-w-[782px]">
              We craft modern websites for new-age businesses, delivering a
              premium and rich experience to every visitor. Each site is
              hand-crafted and tailored to your.
            </p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex flex-row flex-wrap items-start content-start py-6 gap-6 w-full justify-center">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="flex flex-col justify-between items-center p-6 w-full sm:w-[calc(50%-12px)] lg:w-[421px] bg-white border border-[#FC7154] shadow-[8px_8px_8px_#FB4E29] min-h-[389px]"
              >
                <div className="flex-1 flex items-center">
                  <h3 className="font-onest font-bold text-[96px] md:text-[128px] leading-[120%] text-center text-[#FB4E29]">
                    {metric.value}
                  </h3>
                </div>
                <p className="font-onest font-bold text-[24px] leading-[120%] text-center text-[#100805] mt-auto">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KPIs;
