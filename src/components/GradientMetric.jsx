import React, { useState, useEffect, useRef } from "react";

const GradientMetric = ({
  value,
  description,
  gradient = "linear-gradient(107.56deg, #FBB729 2.2%, #FB296D 95.31%)",
  fontSize = "text-[36px] md:text-[56px]",
  maxWidth = "max-w-xs",
  duration = 2000, // Animation duration in ms
  symbol = "", // Symbol to append (%, +, etc.)
  upto = true,
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const metricRef = useRef(null);

  // Extract number and suffix (like 'M', 'K', etc.)
  const numericMatch = value.match(/^(\d+)(.*)/);
  const numericValue = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const valueSuffix = numericMatch ? numericMatch[2] : "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (metricRef.current) {
      observer.observe(metricRef.current);
    }

    return () => {
      if (metricRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    let animationFrameId;
    const startTime = Date.now();

    if (isVisible) {
      // Use a fixed duration regardless of number size for consistent speed
      const adjustedDuration = Math.min(duration, Math.max(1000, 1500));

      const updateCount = () => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / adjustedDuration, 1);

        // Use linear interpolation for consistent speed
        setCount(Math.round(progress * numericValue));

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(updateCount);
        }
      };

      updateCount();
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isVisible, numericValue, duration]);

  return (
    <div
      className="rounded-3xl flex flex-col items-start justify-end bg-white border-1 border-[#E9E7E7] border px-6 py-20 shadow-lg shadow-gray-200"
      ref={metricRef}
    >
      {upto && (
        <p
          className={`text-[#6E605D] text-[18px] md:text-[20px] leading-[150%] ${maxWidth}`}
        >
          Upto
        </p>
      )}
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
        {isVisible ? `${count}${valueSuffix}${symbol}` : `0${valueSuffix}`}
      </h3>
      <p
        className={`text-[#6E605D] text-[18px] md:text-[20px] leading-[150%] ${maxWidth}`}
      >
        {description}
      </p>
    </div>
  );
};

export default GradientMetric;
