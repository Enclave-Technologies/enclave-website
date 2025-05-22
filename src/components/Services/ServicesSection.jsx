import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { Button } from "../Button";

const services = [
  {
    title: "Website Design & Development",
    description:
      "Transform your online presence with our custom website solutions. We create stunning, high-performance websites that drive engagement and convert visitors into customers. From responsive designs to seamless user experiences, we ensure your website stands out in today's digital landscape.",
    list: [
      "Website Design",
      "Search Engine Optimisation",
      "Social Media Management",
    ],
    image: "/service9.png",
    imageAlt: "Websites",
    button: "View All Websites >",
  },
  {
    title: "Branding",
    description:
      "Build a memorable brand that resonates with your audience. Our branding expertise helps you craft a unique identity that tells your story and connects with your target market. We develop comprehensive brand strategies that set you apart and create lasting impressions.",
    list: [
      "Brand Strategy & Positioning",
      "Visual Identity Design",
      "Brand Guidelines & Assets",
    ],
    image: "/service5.png",
    imageAlt: "Branding",
    button: "Learn More",
  },
  {
    title: "Search Engine Optimisation (SEO)",
    description:
      "Boost your online visibility and drive organic traffic with our expert SEO services. We optimise your website to improve search engine rankings, increase visibility, and attract more targeted traffic. Our SEO strategies are designed to help you stand out in the competitive digital landscape.",
    list: ["Keyword Research & Strategy", "On-Page SEO", "Technical SEO"],
    image: "/service3.png",
    imageAlt: "Digital Products",
    button: "Learn More",
    extraButtons: true,
  },
  {
    title: "Social Media Optimisation (SMO)",
    description:
      "Enhance your online presence and engage your audience with our expert social media optimisation services. We optimise your social media platforms to improve visibility, increase engagement, and drive more traffic to your website. Our SMO strategies are designed to help you stand out in the competitive social media landscape.",
    list: [
      "Social Media Strategy",
      "Social Media Management",
      "Social Media Advertising",
    ],
    image: "/service6.png",
    imageAlt: "Content",
    button: "Learn More",
    extraButtons: true,
  },
  {
    title: "Newsletter and Blog Writing",
    description:
      "Create engaging content that drives results. Our newsletter and blog writing services help you tell your story, establish authority, and connect with your target audience. We create content that not only attracts but converts.",
    list: ["Newsletter Writing", "Blog Writing", "Content Strategy"],
    image: "/service3.png",
    imageAlt: "Development",
    button: "Learn More",
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

const ServicesSection = ({}) => (
  <section className="flex flex-col items-center w-full bg-[#FAFAFA] py-6 md:gap-12 gap-8 z-3 px-0">
    {services.map((service, idx) => (
      <motion.div
        key={service.title}
        className={`flex flex-col md:flex-row ${
          idx % 2 === 1 ? "md:flex-row-reverse" : ""
        } items-center justify-center gap-12 w-full  md:gap-[100px] py-6 md:py-14 px-6 md:px-16 overflow-hidden`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideUpAnimation}
      >
        {/* Text Section */}
        <motion.div
          className="flex-1 flex flex-col gap-8 md:gap-12 max-w-[800px] w-full md:py-0 py-4"
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

export default ServicesSection;
