import React from "react";
import Image from "next/image";
import { Button } from "../Button";
import { motion } from "framer-motion";

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
    image: "/service9.png",
    imageAlt: "Website Design & Development",
    btn1: "Book Consultation",
    btn2: "View Gallery >",
  },
  {
    title: "Search Engine Marketing (SEM)",
    description:
      "We go beyond basic optimization, delivering a rich and prominent online presence that connects with your target audience. Each strategy is tailored to your unique brand identity and business goals, ensuring maximum visibility and organic growth. We prioritize a holistic, data-driven approach that secures top rankings and delivers a consistent stream of engaged visitors, starting with getting you found.",
    list: [
      "Search Engine Optimisation",
      "On-Page SEO",
      "Technical SEO",
      "Off-Page SEO",
      "Search Ads (SEA) / Pay-Per-Click (PPC)",
    ],
    image: "/service4.png",
    imageAlt: "Search Engine Marketing (SEM)",
    btn1: "Book SEO Audit Call",
    btn2: "Learn More >",
  },
  {
    title: "App Development",
    description:
      "We craft modern mobile applications for new-age businesses, delivering a premium and rich experience to every user. Our mobile-first approach ensures optimal performance and seamless user journeys across all devices, starting with the smartphone in their hand.",
    list: [
      "Mobile Applications (React Native, iOS, Flutter)",
      "Web Applications (ReactJS)",
      "AI Applications",
      "Web3 Applications",
    ],
    image: "/service2.png",
    imageAlt: "App Development",
    btn1: "Get A Quote",
    btn2: "Case Studies >",
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
            idx % 2 === 0 ? "" : "md:flex-row-reverse"
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
              <h2 className="font-onest capitalize font-bold text-[#100805] text-[24px] md:text-[40px] leading-[120%]">
                {service.title}
              </h2>
              <p className="font-albert text-[#26120D] text-[18px] md:text-[20px] leading-[150%]">
                {service.description}
              </p>
            </div>
            <ul className="flex flex-col gap-2 list-disc pl-5">
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
                  className="font-albert text-[#26120D] text-[18px] md:text-[20px] leading-[150%] marker:text-[#26120D]"
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
                title={service.btn1}
                link="https://calendly.com/hello-enclave-studios/free-consult"
                rounded={true}
                className="px-8 py-3 text-[16px] font-bold font-albert ml-1"
              />
              {/* <Button
                variant="black navigation"
                title={service.btn2}
                link="/works"
                rounded={true}
                className="px-8 py-3 text-[16px] font-bold font-albert"
              /> */}
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
