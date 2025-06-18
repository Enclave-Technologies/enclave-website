import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
      className="w-full h-[300px] md:h-[500px] flex items-center justify-center overflow-hidden"
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
        height={500}
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

      {/* <motion.div
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
          title={service.btn1}
          link="https://calendly.com/hello-enclave-studios/free-consult"
          rounded={true}
          className="px-6 py-2 text-[14px] font-bold font-albert"
        />
      </motion.div> */}
    </motion.div>
  </motion.div>
);

const NewServices = ({ id, title, subtitle, services }) => {
  return (
    <section
      id={id}
      className="flex flex-col items-center w-full bg-[#FAFAFA] py-16 md:py-32 px-6 sm:px-[60px] lg:px-[120px] gap-12 z-3"
    >
      <div className="flex flex-col items-center gap-6 w-full">
        <div className="flex flex-col items-center gap-2">
          <h4 className="text-[#FB4E29] text-[20px] md:text-[24px] lg:text-[28px] font-bold">
            {title}
          </h4>
          <h2
            className="text-[32px] md:text-[40px] lg:text-[48px] font-bold capitalize text-center"
            style={{
              lineHeight: "1.3",
            }}
          >
            {subtitle}{" "}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mt-2 md:mt-12">
        {services?.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default NewServices;
