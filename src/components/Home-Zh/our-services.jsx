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

const OurServices = ({ id }) => {
  const services = [
    {
      title: "Launch A Branded, Fully Optimised Website For Your Business",
      description:
        "Say goodbye to templated limitations. We craft bespoke websites from the ground up, ensuring an unparalleled, unique experience for your new-age business and its customers. Your site will be fully optimized with engaging graphics, fluid animations, and compelling copywriting—all custom-built to grab attention, foster deep engagement, and distinctly set you apart in the market.",
      features: [
        "A stunning, unique website tailored specifically to your brand",
        "Dynamic graphics and smooth animations",
        "Conversion-Focused Copywriting",
        "Peak Performance & Speed",
        "SEO-Ready Foundation",
      ],
      image: "/service11.png",
      kistHeader: "What you’ll get:",
      buttonText: "Request Quote",
    },
    {
      title: "Boost Your Website Performance with SEO/SEM",
      description:
        "Transform your online visibility with our advanced Search Engine Optimization (SEO). We don't just optimize; we build a rich, commanding online presence from the ground up. Each strategy is meticulously customized to your brand identity and business objectives, ensuring you not only rank higher but also genuinely engage your target audience and achieve lasting organic success.",
      features: [
        "Rank on page 1 of Google Search in your industry",
        "Higher on-site conversion rates",
        "Higher quantity & quality of traffic to your website",
        "Higher brand engagement",
      ],
      kistHeader: "What you’ll get:",
      image: "/service12.png",
      buttonText: "Request Quote",
    },
    {
      title: "Launch a Custom App For Your Business",
      description:
        "Craft a modern mobile applications for your new-age businesses, delivering a premium and rich experience to every user. Our mobile-first approach ensures optimal performance and seamless user journeys across all devices, starting with the smartphone in their hand.",
      features: [
        "Mobile Applications (React Native, iOS, Flutter)",
        "Web Applications (ReactJS)",
        "AI Applications",
        "Web3 Applications",
      ],
      image: "/service10.png",
      buttonText: "Request Quote",
    },
  ];

  return (
    <section
      id={id}
      className="flex flex-col justify-center items-center py-16 md:py-32 px-6 sm:px-[60px] lg:px-[120px] gap-8 md:gap-12"
    >
      <div className="flex flex-col items-center gap-6 w-full">
        <div className="flex flex-col items-center gap-2">
          <h4 className="text-[#FB4E29] text-[20px] md:text-[24px] lg:text-[28px] font-bold">
            Popular Packages
          </h4>
          <h2
            className="text-[32px] md:text-[40px] lg:text-[48px] font-bold capitalize text-center"
            style={{
              lineHeight: "1.3",
            }}
          >
            Providing Unmatched Value{" "}
          </h2>
        </div>
      </div>

      {/* Services */}
      <div className="flex flex-col gap-12 md:gap-16 w-full mt-2 md:mt-12">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 1 ? "lg:flex-row" : "lg:flex-row-reverse"
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

              <div>
                <Button
                  variant="filled"
                  title={service.buttonText}
                  rounded={true}
                  className="bg-[#FB4E29] text-white px-8 py-4 text-[18px] font-bold"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
