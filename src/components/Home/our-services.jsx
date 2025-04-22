import React, { useEffect } from "react";
import Image from "next/image";
import SectionHeader from "../SectionHeader";
import Link from "next/link";
import { Button } from "../Button";

import { GoPencil } from "react-icons/go";

const NumberCircle = ({ number }) => (
  <div className="flex flex-col justify-center items-center w-[60px] h-[60px] bg-[#E9E7E7] rounded-[48px]">
    <span className="font-bold text-[28px] leading-[130%] text-[#1B0D09]">
      {number}
    </span>
  </div>
);

const OurServices = ({ id }) => {
  // useEffect(() => {
  //   // Adding scroll event listener
  //   if (screen.width > 960) {
  //     document.addEventListener("scroll", horizontalScroll);
  //     //Selecting Elements
  //     let sticky = document.querySelector(".sticky");
  //     let horizontal = document.querySelector(".horizontal");
  //     let stickyParent = document.querySelector(".sticky-parent");

  //     let scrollWidth = sticky.scrollWidth;
  //     let verticalScrollHeight =
  //       stickyParent.getBoundingClientRect().height -
  //       sticky.getBoundingClientRect().height;

  //     //Scroll function
  //     function horizontalScroll() {
  //       //Checking whether the sticky element has entered into view or not
  //       let stickyPosition = sticky.getBoundingClientRect().top;
  //       if (stickyPosition > 1) {
  //         horizontal.style.transform = `translateX(${0}px)`;
  //       } else {
  //         let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
  //         horizontal.style.transform = `translateX(${
  //           (scrollWidth / verticalScrollHeight) * scrolled * 0.8
  //         }px)`;
  //       }
  //     }
  //   }
  // }, []);

  return (
    <section id={id}>
      <div className="max-w-7xl px-8 md:px-0 flex flex-col justify-center gap-12 md:gap-16 sticky top-0 h-full overflow-hidden">
        <SectionHeader
          tag={"Innovation"}
          title={"Transforming Ideas Into Digital Solutions"}
          description={
            "At Enclave Studios, we specialise in turning your vision into reality through cutting-edge technology. Our expertise spans app development, AI Solutions & Web3 Integration."
          }
        />
        {/* <div className="flex flex-col lg:flex-row overflow-visible justify-start md:gap-12 gap-6 max-w-7xl horizontal px-0 md:px-48 mt-4">
          {[
            {
              tag: "Brand Development",
              title: "Bring your brand story to life in your website",
              description:
                "We create unique brand identities that reflect your brand's true values, establish credibility, and leave a lasting impression.",
              image: "/service-images/001.png",
            },
            {
              tag: "Website Development",
              title: "Your website will become your best sales tool",
              description:
                "We combine web design strategy, UX design, visual design, and storytelling to deliver impactful and user-friendly websites.",
              image: "/service-images/002.png",
            },
            {
              tag: "App Development",
              title: "Build a modern & professional website",
              description:
                "We specialise in website development, providing a strong foundation and a scalable modern website that is secure and optimised.",
              image: "/service-images/003.png",
            },
            // {
            //   tag: "Digital Marketing",
            //   title: "Build a modern & professional website",
            //   description:
            //     "We specialise in website development, providing a strong foundation and a scalable modern website that is secure and optimised.",
            //   image: "/service-images/003.png",
            // },
          ].map((service, index) => (
            <div
              key={index}
              className="min-w-[72vw] bg-[#1C1C1C] box-border flex md:flex-row flex-col items-start md:p-[32px] p-8 md:gap-[48px] gap-6 max-w-[1440px] md:h-[608px] h-full backdrop-blur-[15px] rounded-[20px]"
            >
              <div className="flex md:flex-col flex-col-reverse justify-center items-center p-0 md:gap-[48px] gap-6 h-full flex-1">
                <div className="flex flex-col items-start p-0 md:gap-[16px] gap-4">
                  <div className="bg-[#3A3A3A] text-white px-4 py-2 rounded-full text-base shadow-sm">
                    <p>{service.tag}</p>
                  </div>
                  <h3 className="font-semibold md:font-bold text-[28px] md:text-[40px] lg:text-[40px] leading-[120%] text-white">
                    {service.title}
                  </h3>
                  <p className="text-[16px] md:text-[16px] leading-[150%] text-white font-light">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="w-full h-full flex-1">
                <Image
                  src={service.image}
                  alt="Solutions Development"
                  width={100}
                  height={100}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          ))}
        </div> */}
        <div className="flex flex-wrap items-center gap-12">
          {[
            {
              image: "/service-1.png",
              title: "Application Development Tailored for Your Business",
              description:
                "We create unique brand identities that reflect your brand's true values, establish credibility, and leave a lasting impression.",
            },
            {
              image: "/service-2.png",
              title: "Application Development Tailored for Your Business",
              description:
                "We create unique brand identities that reflect your brand's true values, establish credibility, and leave a lasting impression.",
            },
            {
              image: "/service-3.png",
              title: "Application Development Tailored for Your Business",
              description:
                "We create unique brand identities that reflect your brand's true values, establish credibility, and leave a lasting impression.",
            },
            // {
            //   image: "/service-4.png",
            //   title: "Application Development Tailored for Your Business",
            //   description:
            //     "We create unique brand identities that reflect your brand's true values, establish credibility, and leave a lasting impression.",
            // },
          ].map((serviceInfo, index) => (
            <ServiceCard serviceInfo={serviceInfo} key={index} />
          ))}
        </div>
        <div className="flex flex-wrap gap-4 justify-center  mx-auto">
          <Button variant="primary" title="Learn More" link="/contact" />
          <Button
            variant="secondary"
            title="Sign Up"
            link="/contact"
            className="hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ serviceInfo }) => {
  return (
    <div className="flex flex-col gap-8 min-w-[280px] flex-1 overflow-hidden">
      <div className="bg-red-400 min-w-[280px] aspect-[1.5/1] rounded-[48px] relative overflow-hidden">
        <Image src={serviceInfo.image} className="block" fill />
      </div>
      <div className="flex flex-col gap-2">
        <h4>{serviceInfo.title}</h4>
        <p>{serviceInfo.description}</p>
      </div>
    </div>
  );
};

export default OurServices;
