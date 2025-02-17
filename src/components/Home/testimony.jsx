"use client";
import { testimonials } from "../../data/testimonials";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "../Button";

const TestimonialCard = ({ text, author, company, image }) => (
  <div className="w-[400px] min-h-[250px] bg-white rounded-[8px] p-6 mx-3 flex flex-col justify-between shadow-lg hover:scale-[1.02] transition-transform duration-300">
    <p className="text-sm leading-relaxed mb-4 text-gray-600 flex flex-wrap whitespace-normal">
      {text}
    </p>
    <div className="flex items-center pt-4 border-t border-gray-100">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-[#FB4E29]">
        <Image
          src={image}
          width={48}
          height={48}
          alt={author}
          className="object-cover w-full h-full"
          unoptimized
        />
      </div>
      <div>
        <h4 className="font-medium text-sm">{author}</h4>
        <p className="text-xs text-gray-500">{company}</p>
      </div>
    </div>
  </div>
);

const ScrollingRow = ({ items, direction = "right" }) => {
  const rowRef = useRef(null);
  const scrollTween = useRef(null);

  useEffect(() => {
    const row = rowRef.current;
    const cards = row.children;
    const totalWidth = Array.from(cards).reduce(
      (width, card) => width + card.offsetWidth + 16,
      0
    );

    const clonedItems = Array.from(cards).map((card) => card.cloneNode(true));
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

    const handleMouseEnter = () => scrollTween.current.pause();
    const handleMouseLeave = () => scrollTween.current.play();

    row.addEventListener("mouseenter", handleMouseEnter);
    row.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (scrollTween.current) {
        scrollTween.current.kill();
      }
      row.removeEventListener("mouseenter", handleMouseEnter);
      row.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [direction]);

  return (
    <div className="w-full min-h-[250px] flex items-center overflow-hidden">
      <div ref={rowRef} className="flex">
        {items.map((item) => (
          <TestimonialCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

const Testimony = ({ id }) => {
  return (
    <section
      className="relative w-screen min-h-screen overflow-hidden mt-48 py-32 bg-white"
      id={id}
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "url('/testimonials-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-20 w-full flex flex-col items-center justify-center">
        <div className="max-w-2xl mx-auto text-center px-6 mb-20">
          <h2 className="text-4xl font-bold mb-8 capitalize">
            Why settle for generic?
          </h2>
          <p className="text-base mb-12 max-w-xl mx-auto">
            Develop your next project with an agency that works tirelessly with
            you to make sure your project is beneficial for your business.
            We&apos;ll unlock access to everything you need to know to build
            your next monumental custom project.
          </p>
          <div className="inline-block">
            <Button
              variant="primary navigation"
              title="Discover What's Next"
              link="/contact"
            />
          </div>
        </div>

        <div className="relative z-20 space-y-4 w-screen h-full">
          {testimonials.map((row) => (
            <ScrollingRow
              key={row.row}
              items={row.items}
              direction={row.row === 1 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimony;
