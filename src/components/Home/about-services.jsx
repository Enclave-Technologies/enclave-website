import React from "react";
import Image from "next/image";
import { Button } from "../Button";
import { motion } from "framer-motion";

const fadeInAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const AboutServices = () => {
  const services = [
    {
      title: "Hong Kong Based Digital Marketing Studio",
      description:
        "We design and refine conceptual blueprints that blend innovation with technical insight, transforming preliminary ideas into engaging, practical models. Our bespoke prototyping process captures the essence of your vision while setting the stage for scalable, future-ready solutions.",
      features: [
        "SEO Consulting",
        "Keyword Research",
        "Copywriting / Blog Writing",
      ],
      image: "/service9.png",
      buttonText: "Case Studies",
      buttonText2: "Start Consulting >",
    },
    {
      title: "Award Winning Product Designers",
      description:
        "We design and refine conceptual blueprints that blend innovation with technical insight, transforming preliminary ideas into engaging, practical models. Our bespoke prototyping process captures the essence of your vision while setting the stage for scalable, future-ready solutions.",
      features: [
        "UI/UX Design",
        "Search Engine Optimisation (SEO)",
        "Social Media Management (Instagram, LinkedIn, Youtube)",
        "Email Marketing",
      ],
      image: "/service1.png",
      buttonText: "Learn More",
      buttonText2: "Start Consulting >",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center py-16 md:py-32 px-6 sm:px-[60px] lg:px-[120px] gap-8 md:gap-12">
      <div className="flex flex-col gap-12 md:gap-16 w-full mt-2 md:mt-12">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-8 md:gap-12`}
          >
            {/* Image */}
            <motion.div
              className="flex-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInAnimation}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={548}
                height={740}
                className="w-full h-auto object-contain"
              />
            </motion.div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-8 md:gap-12">
              <div className="flex flex-col gap-4">
                <h3 className="text-[28px] md:text-[40px] font-bold text-[#100805] leading-[120%]">
                  {service.title}
                </h3>
                <p className="text-[18px] md:text-[20px] text-[#26120D] leading-[150%]">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[18px] md:text-[20px] text-[#26120D] leading-[150%] font-bold">
                  {service.kistHeader}
                </p>

                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`text-[18px] md:text-[20px] text-[#26120D] leading-[150%]`}
                  >
                    {feature}
                  </li>
                ))}
              </div>

              <div className="flex gap-2 md:gap-4 items-center">
                <Button
                  variant="outline"
                  title={service.buttonText}
                  link="/services"
                  rounded={true}
                  className="px-8 py-2"
                />

                <Button
                  variant="filled"
                  title={service.buttonText2}
                  link="/services"
                  rounded={true}
                  className="bg-[#000] text-white px-8 py-3"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutServices;
