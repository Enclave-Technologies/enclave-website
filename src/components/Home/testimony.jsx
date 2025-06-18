"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "../Button";

const LogoMarquee = ({ direction = "left" }) => {
  const rowRef = useRef(null);
  const scrollTween = useRef(null);

  const projects = [
    "image",
    "image-1",
    "image-2",
    // "movement.png",
    // "meta.png",
    // "figma.png",
    // "webflow.png",
    // "semrush.png",
    // "wix.png",
    // "xcelerate.png",
    // "first.png",
    // "accelrte.png",
    // "blogo.png",
    // "h.png",
    // "nju.png",
    // "para.png",
    // "roju.png",
    // "atelier.png",
  ];

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const items = row.children;
    const totalWidth = Array.from(items).reduce(
      (width, item) => width + item.offsetWidth + 30,
      0
    );

    const clonedItems = Array.from(items).map((item) => item.cloneNode(true));
    clonedItems.forEach((clone) => row.appendChild(clone));

    const startPosition = direction === "left" ? 0 : -totalWidth;
    const endPosition = direction === "left" ? -totalWidth : 0;

    gsap.set(row, { x: startPosition });

    scrollTween.current = gsap.to(row, {
      x: endPosition,
      duration: 50,
      ease: "none",
      repeat: -1,
      onRepeat: () => {
        gsap.set(row, { x: startPosition });
      },
    });

    return () => {
      if (scrollTween.current) {
        scrollTween.current.kill();
      }
    };
  }, [direction]);

  return (
    <div className="w-full overflow-hidden">
      <div ref={rowRef} className="flex items-center gap-6">
        {projects.map((project, index) => (
          <div key={index} className="mx-2 md:mx-3 flex-shrink-0">
            <Image
              src={`/hero/${project}.png`}
              alt={`Partner 1`}
              width={120}
              height={40}
              className="h-60 md:h-72 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Testimony = ({ id }) => {
  return (
    <section
      className="relative min-h-[100vh] gap-6 !justify-between overflow-hidden w-full px-6 md:px-16"
      id={id}
    >
      <div className="w-full flex flex-col items-center justify-center py-4 !pb-0 mt-[80px] mb-[40px]">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="font-medium lg:text-[64px] md:text-[48px] text-[32px] leading-[120%] text-[#100805] max-w-7xl text-center">
              Website & Digital Marketing Solutions To Boost Your Digital
              Presence
            </h1>

            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#121212] font-normal normal-case text-center w-full lg:max-w-3xl mx-auto">
              Enclave Studios is a growth marketing agency helping startups and
              businesses grow their online visibility with unique branding and
              marketing solutions.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mx-auto mt-2">
            <Button
              variant="primary"
              title="Get In Touch"
              link="/contact"
              rounded={true}
              className="px-16"
            />

            <Button
              variant="secondary"
              title="Learn More"
              link="/works"
              rounded={true}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center h-full">
        <Image
          src="/hero-image-2.png"
          alt="testimony"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Testimony;
