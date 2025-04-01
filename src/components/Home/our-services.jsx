import React, { useEffect } from "react";
import Image from "next/image";
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
  useEffect(() => {
    // Adding scroll event listener
    if (screen.width > 960) {
      document.addEventListener("scroll", horizontalScroll);
      //Selecting Elements
      let sticky = document.querySelector(".sticky");
      let horizontal = document.querySelector(".horizontal");
      let stickyParent = document.querySelector(".sticky-parent");

      let scrollWidth = sticky.scrollWidth;
      let verticalScrollHeight =
        stickyParent.getBoundingClientRect().height -
        sticky.getBoundingClientRect().height;

      //Scroll function
      function horizontalScroll() {
        //Checking whether the sticky element has entered into view or not
        let stickyPosition = sticky.getBoundingClientRect().top;
        if (stickyPosition > 1) {
          horizontal.style.transform = `translateX(${0}px)`;
        } else {
          let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
          horizontal.style.transform = `translateX(${
            (scrollWidth / verticalScrollHeight) * scrolled * 0.8
          }px)`;
        }
      }
    }
  }, []);

  return (
    <section
      id={id}
      className="flex flex-col justify-start items-center py-16 px-8 w-full bg-[#FAFAFA] sticky-parent"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 md:gap-6 pt-[96px] sticky top-0 h-full md:max-h-screen overflow-hidden">
        <div className="flex flex-col items-center gap-2">
          <h4 className="text-[#FB4E29] text-[20px] md:text-[24px] lg:text-[24px] font-bold">
            First Impressions Matter
          </h4>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold mt-2 mb-4 capitalize text-center">
            Invest In Designs That Convert
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row overflow-visible justify-start md:gap-12 gap-6 max-w-7xl horizontal px-0 md:px-48">
          {[
            {
              tag: "Branding",
              title: "Bring your brand story to life in your website",
              description:
                "We create unique brand identities that reflect your brand's true values, establish credibility, and leave a lasting impression.",
              image: "/service-images/001.png",
            },
            {
              tag: "Website Design",
              title: "Your website will become your best sales tool",
              description:
                "We combine web design strategy, UX design, visual design, and storytelling to deliver impactful and user-friendly websites.",
              image: "/service-images/002.png",
            },
            {
              tag: "Website Development",
              title: "Build a modern & professional website",
              description:
                "We specialise in website development, providing a strong foundation and a scalable modern website that is secure and optimised.",
              image: "/service-images/003.png",
            },
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
        </div>
      </div>
    </section>
  );
};

export default OurServices;
