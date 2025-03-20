import React from "react";

const GradientMetric = ({
  value,
  description,
  gradient = "linear-gradient(107.56deg, #FBB729 2.2%, #FB296D 95.31%)",
  fontSize = "text-[36px] md:text-[56px]",
  maxWidth = "max-w-xs",
}) => {
  return (
    <div className="text-center">
      <h3
        className={`${fontSize} font-bold mb-2 leading-[120%]`}
        style={{
          background: gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
        }}
      >
        {value}
      </h3>
      <p className={`text-[#6E605D] text-[18px] md:text-[20px] leading-[150%] ${maxWidth} mx-auto`}>
        {description}
      </p>
    </div>
  );
};

export default GradientMetric;
