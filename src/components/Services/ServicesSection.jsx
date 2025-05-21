import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { Button } from "../Button";

const services = [
  {
    title: "Websites",
    description:
      "Transform your online presence with our custom website solutions. We create stunning, high-performance websites that drive engagement and convert visitors into customers. From responsive designs to seamless user experiences, we ensure your website stands out in today's digital landscape.",
    list: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Performance Optimization",
      "Mobile-First Design",
    ],
    image: "/service7.png",
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
      "Brand Voice Development",
    ],
    image: "/service6.png",
    imageAlt: "Branding",
    button: "Learn More",
  },
  {
    title: "Digital Products",
    description:
      "Create innovative digital solutions that solve real-world problems. From mobile apps to web platforms, we design and develop user-centric digital products that enhance user experience and drive business growth. Our focus is on creating scalable, future-proof solutions.",
    list: [
      "Mobile App Development",
      "Web Application Design",
      "UI/UX Design Systems",
      "Product Strategy",
    ],
    image: "/service3.png",
    imageAlt: "Digital Products",
    button: "Learn More",
    extraButtons: true,
  },
  {
    title: "Content",
    description:
      "Engage your audience with compelling content that drives results. Our content strategy and creation services help you tell your story, establish authority, and connect with your target audience. We create content that not only attracts but converts.",
    list: [
      "Content Strategy",
      "Copywriting & Messaging",
      "Social Media Content",
      "Video Production",
    ],
    image: "/service5.png",
    imageAlt: "Content",
    button: "Learn More",
    extraButtons: true,
  },
  {
    title: "Development",
    description:
      "Build robust, scalable solutions with our expert development services. We combine cutting-edge technology with industry best practices to create powerful digital solutions. From front-end interfaces to complex backend systems, we deliver quality code that performs.",
    list: [
      "Full-Stack Development",
      "API Integration",
      "Cloud Solutions",
      "Technical Consulting",
    ],
    image: "/service3.png",
    imageAlt: "Development",
    button: "Learn More",
    extraButtons: true,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const ServicesSection = ({}) => (
  <section className="flex flex-col items-center w-full bg-[#FAFAFA] px-2 md:px-8 py-6 gap-12 z-3">
    {services.map((service, idx) => (
      <motion.div
        key={service.title}
        className={`flex flex-col md:flex-row ${
          idx % 2 === 1 ? "md:flex-row-reverse" : ""
        } items-end justify-center gap-12 md:gap-[48px] w-full  py-6 md:py-16 px-4 md:px-[64px]`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        {/* Text Section */}
        <div className="flex-1 flex flex-col gap-8 md:gap-12 max-w-[605px] w-full md:py-0 py-4">
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
              <li
                key={i}
                className="font-albert text-[#26120D] text-[18px] md:text-[20px] leading-[150%]"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-row gap-4 mt-4">
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
          </div>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center w-full max-w-[547px] h-[320px] md:h-[684px]">
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <Image
              src={service.image}
              alt={service.imageAlt}
              width={547}
              height={684}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </motion.div>
    ))}
  </section>
);

export default ServicesSection;
