import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { Button } from "../Button";

const services = [
  {
    title: "Website Design & Development",
    description:
      "We craft modern websites for new-age businesses, delivering a premium and rich experience to every visitor. Each site is hand-crafted and tailored to your unique brand identity and business goals. Our mobile-first approach ensures optimal performance on all devices, starting with mobile.",
    list: [
      "Web Design",
      "Web Development",
      "Hosting & Maintenance",
      "Responsive Design (Mobile-First)",
    ],
    image: "/service7.png",
    imageAlt: "Website Design & Development",
    btn1: "Request Pricing",
    btn2: "Learn More",
    link: "/services/web-design",
    link2: "/services/web-design/#pricing",
  },
  {
    title: "Search Engine Optimisation (SEO)",
    description:
      "We go beyond basic optimization, delivering a rich and prominent online presence that connects with your target audience. Each strategy is tailored to your unique brand identity and business goals, ensuring maximum visibility and organic growth. We prioritize a holistic, data-driven approach that secures top rankings starting with getting you found.",
    list: [
      "Search Engine Optimisation",
      "On-Page SEO",
      "Technical SEO",
      "Off-Page SEO",
    ],
    image: "/service4.png",
    imageAlt: "Search Engine Optimisation (SEO)",
    btn1: "View Pricing",
    btn2: "Learn More",
    link: "/services/seo",
    link2: "/services/seo/#pricing",
  },
  {
    title: "Search Engine Marketing (SEM)",
    description:
      "We craft modern mobile applications for new-age businesses, delivering a premium and rich experience to every user. Our mobile-first approach ensures optimal performance and seamless user journeys across all devices, starting with the smartphone in their hand.",
    list: [
      "Search Ads (SEA)",
      "Pay-Per-Click (PPC)",
      "Campaign Management",
      "Analytics & Reporting",
    ],
    image: "/service6.png",
    imageAlt: "Search Engine Marketing (SEM)",
    btn1: "Request Pricing",
    btn2: "Learn More",
    link: "/services/sem",
    link2: "/services/sem/#pricing",
  },
  {
    title: "Application Development",
    description:
      "We craft modern mobile applications for new-age businesses, delivering a premium and rich experience to every user. Our mobile-first approach ensures optimal performance and seamless user journeys across all devices, starting with the smartphone in their hand.",
    list: [
      "Mobile Applications",
      "Web Applications",
      "AI Applications",
      "Custom Solutions",
    ],
    image: "/service2.png",
    imageAlt: "Application Development",
    btn1: "View Pricing",
    btn2: "Learn More",
    link: "/services/app-development",
    link2: "/services/app-development/#pricing",
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
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const ServiceCard = ({ service, index }) => (
  <motion.div
    className="flex flex-col gap-6 w-full"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={slideUpAnimation}
  >
    {/* Image */}
    <motion.div
      className="w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden"
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
      <Image
        src={service.image}
        alt={service.imageAlt}
        width={600}
        height={400}
        className="object-cover w-full h-full"
      />
    </motion.div>

    {/* Content */}
    <motion.div
      className="flex flex-col gap-4"
      variants={{
        hidden: { y: 30 },
        visible: {
          y: 0,
          transition: {
            duration: 0.6,
            delay: 0.2,
            ease: [0.33, 1, 0.68, 1],
          },
        },
      }}
    >
      <h3 className="font-onest font-bold text-[#100805] text-[20px] md:text-[28px] leading-[120%] capitalize text-left md:text-center">
        {service.title}
      </h3>
      <p className="font-albert text-[#26120D] text-[16px] md:text-[18px] leading-[150%] text-left md:text-center">
        {service.description}
      </p>

      <motion.div
        className="flex flex-row gap-4 w-full md:justify-center justify-start"
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
          variant="primary"
          title={service.btn1}
          link={service.link2}
          rounded={true}
          className="px-6 py-2 text-[14px] font-bold font-albert"
        />

        <Button
          variant="secondary"
          title={service.btn2}
          link={service.link}
          rounded={true}
          className="px-6 py-2 text-[14px] font-bold font-albert"
        />
      </motion.div>
    </motion.div>
  </motion.div>
);

const ServicesSection = ({}) => (
  <section className="flex flex-col items-center w-full bg-[#FAFAFA] py-16 md:py-32 px-6 sm:px-[60px] lg:px-[120px] gap-12 z-3">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mt-2 md:mt-12">
      {services.map((service, index) => (
        <ServiceCard key={service.title} service={service} index={index} />
      ))}
    </div>
  </section>
);

export default ServicesSection;
