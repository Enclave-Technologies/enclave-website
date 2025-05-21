import React from "react";
import { Button } from "../Button";
import { motion } from "framer-motion";

const industries = [
  {
    title: "Fintech",
    description:
      "Innovative financial technology solutions for digital payments, banking, and investment platforms",
  },
  {
    title: "B2B & Enterprise Software",
    description:
      "Scalable business solutions and enterprise-grade software for operational excellence",
  },
  {
    title: "Crypto & Web3",
    description:
      "Blockchain technology, decentralized applications, and next-generation web solutions",
  },
  {
    title: "Technology",
    description:
      "Cutting-edge tech solutions across cloud computing, AI/ML, and digital transformation",
  },
  {
    title: "Ecommerce & Fashiontech",
    description:
      "Digital retail solutions and fashion technology platforms for modern commerce",
  },
  {
    title: "Electronics",
    description:
      "Smart hardware solutions and IoT devices for connected experiences",
  },
  {
    title: "Food & Beverage",
    description:
      "Digital solutions for restaurants, delivery services, and F&B operations",
  },
  {
    title: "Startups & VC",
    description:
      "Technology solutions and digital platforms for emerging businesses and investors",
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "Digital health solutions and platforms for medical services and research",
  },
  {
    title: "Telecommunications",
    description:
      "Advanced communication solutions and network infrastructure services",
  },
  {
    title: "Mobility",
    description:
      "Smart transportation solutions and mobility service platforms",
  },
  {
    title: "Logistics",
    description: "Supply chain optimization and logistics management solutions",
  },
];

const slideUpAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ServicesIndustry = () => {
  return (
    <section className="flex justify-center w-full bg-[#FAFAFA]">
      <div className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-[1440px]">
        <motion.div
          className="flex flex-col items-center w-full max-w-[1200px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUpAnimation}
        >
          <div className="flex flex-col items-center gap-1 w-full max-w-[782px]">
            <p className="font-onest font-bold text-[16px] md:text-[20px] leading-[140%] text-center text-[#FB4E29]">
              Our Works
            </p>
            <h2 className="font-onest font-bold text-[32px] md:text-[48px] leading-[120%] text-center text-[#100805] capitalize">
              Industries
            </h2>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-6 w-full max-w-[1200px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.title}
              className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-2 md:gap-12"
              variants={slideUpAnimation}
            >
              <h3 className="font-onest font-bold text-[24px] md:text-[28px] leading-[120%] text-black w-full md:w-[544px]">
                {industry.title}
              </h3>
              <p className="font-albert text-[16px] md:text-[18px] leading-[150%] text-[#121212] w-full md:w-[608px] text-left md:text-right">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-row justify-center md:justify-end items-center gap-4 md:gap-2.5 w-full max-w-[1200px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUpAnimation}
        >
          <Button
            variant="outline"
            title="Learn More"
            link="/about"
            rounded={true}
            className="w-full md:w-auto min-w-[149px] h-12 px-8 py-4 text-base font-bold font-albert"
          />
          <Button
            variant="black"
            title="Projects >"
            link="/works"
            rounded={true}
            className="w-full md:w-auto min-w-[139px] h-12 px-8 py-4 text-base font-bold font-albert"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesIndustry;
