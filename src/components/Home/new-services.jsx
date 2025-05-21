import React from "react";
import Image from "next/image";
import { Button } from "../Button";
import { motion } from "framer-motion";

const services = [
  {
    title: "Digital Marketing",
    description:
      "Drive your online presence with our comprehensive digital marketing solutions. We combine data-driven strategies with creative excellence to increase your brand visibility, engage your target audience, and generate measurable results across all digital channels.",
    list: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Pay-Per-Click Advertising",
      "Content Marketing Strategy",
    ],
    image: "/service1.png",
    imageAlt: "Digital Marketing",
  },
  {
    title: "Growth Consulting",
    description:
      "Transform your business potential into sustainable success with our strategic growth consulting services. We analyze your market position, identify opportunities, and develop actionable strategies to accelerate your business growth and maximize ROI.",
    list: [
      "Market Analysis & Strategy",
      "Business Model Optimization",
      "Revenue Growth Planning",
      "Performance Metrics & KPIs",
    ],
    image: "/service2.png",
    imageAlt: "Growth Consulting",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Turn data into actionable insights with our advanced analytics and reporting solutions. We help you track, measure, and understand your business performance through comprehensive data analysis, custom dashboards, and clear, actionable reports.",
    list: [
      "Custom Dashboard Development",
      "Performance Tracking",
      "Data Visualization",
      "Insight Generation & Reporting",
    ],
    image: "/service3.png",
    imageAlt: "Analytics & Reporting",
    extraButtons: true,
  },
  {
    title: "Branding",
    description:
      "Build a powerful and memorable brand identity that resonates with your audience. Our branding services help you create a distinctive voice, visual identity, and brand strategy that sets you apart from competitors and builds lasting connections with your customers.",
    list: [
      "Brand Strategy & Positioning",
      "Visual Identity Design",
      "Brand Guidelines",
      "Brand Voice Development",
    ],
    image: "/service4.png",
    imageAlt: "Branding",
    extraButtons: true,
  },
];

const slideUpAnimation = {
  hidden: {
    y: 40,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1], // custom cubic-bezier for smoother motion
    },
  },
};

const NewServices = ({ id }) => {
  return (
    <section
      id={id}
      className="flex flex-col items-center w-full bg-[#FAFAFA] px-2 md:px-8 py-6 gap-12 z-3"
    >
      {services.map((service, idx) => (
        <motion.div
          key={service.title}
          className={`flex flex-col md:flex-row ${
            idx % 2 === 1 ? "md:flex-row-reverse" : ""
          } items-end justify-center gap-12 md:gap-[48px] w-full py-6 md:py-16 px-4 md:px-[64px] overflow-hidden`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideUpAnimation}
        >
          {/* Text Section */}
          <motion.div
            className="flex-1 flex flex-col gap-8 md:gap-12 max-w-[605px] w-full md:py-0 py-4"
            variants={{
              hidden: { y: 30 },
              visible: {
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.33, 1, 0.68, 1],
                },
              },
            }}
          >
            <div className="flex flex-col gap-4">
              <h2 className="font-onest capitalize font-bold text-[#100805] text-[32px] md:text-[56px] leading-[120%]">
                {service.title}
              </h2>
              <p className="font-albert text-[#26120D] text-[18px] md:text-[20px] leading-[150%]">
                {service.description}
              </p>
            </div>
            <ul className="flex flex-col gap-2">
              {service.list.map((item, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { y: 20 },
                    visible: {
                      y: 0,
                      transition: {
                        duration: 0.5,
                        delay: 0.1 * i,
                        ease: [0.33, 1, 0.68, 1],
                      },
                    },
                  }}
                  className="font-albert text-[#26120D] text-[18px] md:text-[20px] leading-[150%]"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="flex flex-row gap-4 mt-4"
              variants={{
                hidden: { y: 15 },
                visible: {
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.4,
                    ease: [0.33, 1, 0.68, 1],
                  },
                },
              }}
            >
              <Button
                variant="outline"
                title="Learn More"
                link="/services"
                rounded={true}
                className="min-w-[120px] px-8 py-3 text-[16px] font-bold font-albert"
              />
              {service.extraButtons && (
                <Button
                  variant="black navigation"
                  title="Project >"
                  link="/works"
                  rounded={true}
                  className="min-w-[120px] px-8 py-3 text-[16px] font-bold font-albert"
                />
              )}
            </motion.div>
          </motion.div>
          {/* Image Section */}
          <motion.div
            className="flex-1 flex items-center justify-center w-full max-w-[547px] h-[320px] md:h-[684px]"
            variants={{
              hidden: { y: 35 },
              visible: {
                y: 0,
                transition: {
                  duration: 0.7,
                  ease: [0.33, 1, 0.68, 1],
                },
              },
            }}
          >
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              <Image
                src={service.image}
                alt={service.imageAlt}
                width={547}
                height={684}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
};

export default NewServices;
