import React from "react";
import GradientMetric from "../GradientMetric";

const Metrics = () => {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h4 className="text-[#FB4E29] text-lg font-bold mb-3">
            By the Numbers
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#100805] mb-4">
            Our Impact
          </h2>
          <p className="text-[#6E605D] max-w-2xl mx-auto text-lg">
            We&apos;ve delivered tangible results for businesses across the
            globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <GradientMetric
            value="150"
            description="Projects Successfully Delivered"
            gradient="linear-gradient(107.56deg, #FB4E29 2.2%, #FF9B2F 95.31%)"
            symbol="+"
          />

          <GradientMetric
            value="20M"
            description="Lines of Code Written"
            gradient="linear-gradient(107.56deg, #8A2BE2 2.2%, #FF1493 95.31%)"
            symbol=""
          />

          <GradientMetric
            value="30"
            description="Global Team Members"
            gradient="linear-gradient(107.56deg, #00CED1 2.2%, #1E90FF 95.31%)"
            symbol="+"
          />

          <GradientMetric
            value="5K"
            description="Hours of Technical Support"
            gradient="linear-gradient(107.56deg, #32CD32 2.2%, #008000 95.31%)"
            symbol="+"
          />
        </div>
      </div>
    </section>
  );
};

export default Metrics;
