"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "../Button";
import QuoteGenerator from "../quote-generator/quote-generator";

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
      className="relative min-h-[100vh] gap-2 md:gap-6 !justify-between overflow-hidden w-full px-3 md:px-16"
      id={id}
    >
      <div className="w-full flex flex-col items-center justify-center py-4 !pb-0 mt-[80px] mb:0 md:mb-[40px]">
        <div className="max-w-full flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="font-medium lg:text-[72px] md:text-[48px] text-[32px] leading-[120%] text-[#100805] max-w-7xl text-center capitalize">
              More than just websites
              <br />
              We craft digital experiences
            </h1>
          </div>
          <QuoteGenerator />
        </div>
      </div>
      <div className="aspect-video relative w-full flex flex-1 items-center justify-center h-full">
        <Image
          src="/hero-image-2.png"
          alt="testimony"
          fill={true}
          className="relative w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default Testimony;
