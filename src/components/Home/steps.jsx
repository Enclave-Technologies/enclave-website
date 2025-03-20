import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    content:
      "Partnering with Enclave was a highly productive experience. Their deep technical expertise and meticulous approach to bespoke solutions significantly enhanced our digital presence. Their team combined professionalism with just the right touch of creativity to deliver impressive results.",
    author: "Oliver Thompson",
    company: "ThamesTech Innovations",
  },
  {
    id: 2,
    content:
      "They provided a seamless integration of digital marketing and tailored technology solutions for our business. Their strategic insights and precise execution have been invaluable, ensuring our projects are both innovative and aligned with our business goals.",
    author: "Raj Patel",
    company: "Regal Digital Enterprises",
  },
  {
    id: 3,
    content:
      "Our collaboration with Enclave exceeded expectations. They delivered customised digital solutions with precision and clarity, ensuring our marketing initiatives were well supported by robust technology. Their balanced approach of professionalism and thoughtful innovation made a significant impact on our operations.",
    author: "Emily Spencer",
    company: "IvyBridge Solutions",
  },
  {
    id: 4,
    content:
      "The digital studio's expertise in crafting bespoke digital strategies and solutions has transformed our business. They managed to combine sound technical advice with a well-rounded understanding of digital marketing, delivering a professional, efficient, and forward-thinking service.",
    author: "Sneha Kapoor",
    company: "SparkEdge Innovations",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div
    className="p-8 shadow-sm rounded-lg bg-white border border-gray-100 flex flex-col justify-between h-full transition-transform duration-300 hover:-translate-y-2"
    style={{
      background:
        "linear-gradient(113.44deg, rgba(255, 255, 255, 0.4) 22.6%, rgba(255, 255, 255, 0.1) 92.47%)",
      boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(15px)",
    }}
  >
    <p className="text-[#100805] mb-20 leading-relaxed">
      {testimonial.content}
    </p>
    <div>
      <h4 className="font-semibold text-base">{testimonial.author}</h4>
      <p className="text-[#9B9290] text-sm">{testimonial.company}</p>
    </div>
  </div>
);

const Steps = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const totalSlides = testimonials.length;
  const maxVisibleSlides = 3;

  // Check if the screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonials[currentSlide]];
    } else {
      const visibleTestimonials = [];
      for (let i = 0; i < Math.min(maxVisibleSlides, totalSlides); i++) {
        const index = (currentSlide + i) % totalSlides;
        visibleTestimonials.push({
          ...testimonials[index],
          position: i,
        });
      }
      return visibleTestimonials;
    }
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section id={id} className="py-24 md:py-36 px-8 w-full bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h4 className="text-[#FB4E29] text-lg font-bold mb-3">
            Testimonials
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 capitalize">
            What Our Partners Say
          </h2>
          <p className="text-[#26120D] max-w-2xl mx-auto">
            Real stories. Real results. Straight from the people who knows us
            best
          </p>
        </div>

        <div
          className={`grid ${
            isMobile
              ? "grid-cols-1"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          } gap-6 mb-8`}
        >
          {isMobile ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                <TestimonialCard testimonial={testimonials[currentSlide]} />
              </motion.div>
            </AnimatePresence>
          ) : (
            visibleTestimonials.map((testimonial) => (
              <motion.div
                key={`${testimonial.id}-${testimonial.position}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))
          )}
        </div>

        <div className="flex justify-end gap-6 mt-10">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center text-[#FB4E29]"
            aria-label="Previous testimonial"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center text-[#FB4E29]"
            aria-label="Next testimonial"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Steps;
