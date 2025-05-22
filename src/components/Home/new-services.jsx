import React from "react";
import Image from "next/image";
import { Button } from "../Button";
import { motion } from "framer-motion";

const services = [
  {
    title: "Website Design & Development",
    description:
      "Drive your online presence with our comprehensive digital marketing solutions. We combine data-driven strategies with creative excellence to increase your brand visibility, engage your target audience, and generate measurable results across all digital channels.",
    list: [
      "SEO Consulting",
      "Keyword Research",
      "Copywriting / Blog Writing",
      "Responsive Design",
    ],
    image: "/service9.png",
    imageAlt: "Website Design & Development",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Boost your online visibility and drive organic traffic with our expert SEO services. We optimize your website for search engines to improve your ranking, increase visibility, and attract more targeted visitors.",
    list: [
      "Keyword Research",
      "On-Page Optimization",
      "Technical SEO",
      "Content Strategy",
    ],
    image: "/service4.png",
    imageAlt: "Search Engine Optimization (SEO)",
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
    image: "/service2.png",
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
      className="flex flex-col items-center w-full bg-[#FAFAFA] px-6 md:px-[120px] py-6 gap-12 z-3"
    >
      <div className="flex flex-col items-center gap-6 w-full">
        <div className="flex flex-col items-center gap-2">
          <h4 className="text-[#FB4E29] text-[20px] md:text-[24px] lg:text-[28px] font-bold">
            Our Services
          </h4>
          <h2
            className="text-[32px] md:text-[40px] lg:text-[48px] font-bold capitalize text-center"
            style={{
              lineHeight: "1.3",
            }}
          >
            Impossible Redefined{" "}
          </h2>
        </div>
      </div>

      {services.map((service, idx) => (
        <motion.div
          key={service.title}
          className={`flex flex-col md:flex-row ${
            idx % 2 === 1 ? "" : "md:flex-row-reverse"
          } items-end justify-center gap-12 md:gap-[48px] w-full py-0 md:py-16 overflow-hidden`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideUpAnimation}
        >
          {/* Text Section */}
          <motion.div
            className="flex-1 flex flex-col gap-8 md:gap-12 w-full md:py-0 py-4"
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
              className="flex flex-row gap-3 md:gap-4 mt-4"
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
                className="px-8 py-3 text-[16px] font-bold font-albert ml-1"
              />
              {service.extraButtons && (
                <Button
                  variant="black navigation"
                  title="Project >"
                  link="/works"
                  rounded={true}
                  className="px-8 py-3 text-[16px] font-bold font-albert"
                />
              )}
            </motion.div>
          </motion.div>
          {/* Image Section */}
          <motion.div
            className="flex-1 flex items-center justify-center w-full h-[320px] md:h-[684px]"
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
