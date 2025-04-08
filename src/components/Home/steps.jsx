import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    content:
      "Partnering with Enclave was a highly productive experience. Their deep technical expertise and meticulous approach to bespoke solutions significantly enhanced our digital presence. Their team combined professionalism with just the right touch of creativity to deliver impressive results.",
    author: "Harry Fung",
    company: "Movement Fitness Hong Kong",
    image: "/testimonials/harry.png",
  },
  {
    id: 2,
    content:
      "They provided a seamless integration of digital marketing and tailored technology solutions for our business. Their strategic insights and precise execution have been invaluable, ensuring our projects are both innovative and aligned with our business goals.",
    author: "Lin Xue (林雪)",
    company: "Regal Digital Enterprises",
    image: "/testimonials/linxue.png",
  },
  {
    id: 3,
    content:
      "Our collaboration with Enclave exceeded expectations. They delivered customised digital solutions with precision and clarity, ensuring our marketing initiatives were well supported by robust technology. Their balanced approach of professionalism and thoughtful innovation made a significant impact on our operations.",
    author: "Emily Spencer",
    company: "IvyBridge Solutions",
    image: "/testimonials/emily.png",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div
    className="p-8 rounded-3xl bg-white border border-gray-100 flex flex-col justify-between h-full transition-transform duration-300 hover:-translate-y-2 shadow-md"
    style={{
      background:
        "linear-gradient(113.44deg, rgba(255, 255, 255, 0.4) 22.6%, rgba(255, 255, 255, 0.1) 92.47%)",
      backdropFilter: "blur(15px)",
    }}
  >
    <p className="text-[#100805] mb-20 leading-relaxed">
      {testimonial.content}
    </p>
    <div className="flex flex-col gap-2">
      <Image
        alt={testimonial.author}
        src={testimonial.image}
        height={40}
        width={40}
      />
      <div>
        <h4 className="font-semibold text-base">{testimonial.author}</h4>
        <p className="text-[#9B9290] text-sm">{testimonial.company}</p>
      </div>
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
          <h4 className="text-[#FB4E29] text-[20px] md:text-[24px] lg:text-[28px] font-bold">
            Testimonials
          </h4>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold mt-2 mb-4 capitalize">
            What Our Partners Say
          </h2>
          <p className="text-[#26120D] max-w-3xl mx-auto text-[18px] md:text-[20px] leading-[150%]">
            Stories & results straight from the people who knows us best
          </p>
        </div>
        <div
          className={`grid ${
            isMobile
              ? "grid-cols-1"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          } gap-6 mb-8`}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={`${testimonial.id}-${testimonial.position}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
