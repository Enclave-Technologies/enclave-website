import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "../Button";

const LogoMarquee = ({ direction = "left" }) => {
  const rowRef = useRef(null);
  const scrollTween = useRef(null);

  const logos = [
    "google.png",
    "aws.png",
    "payphone.png",
    "movement.png",
    "meta.png",
    "figma.png",
    "webflow.png",
    "semrush.png",
    "wix.png",
    "xcelerate.png",
    "first.png",
    "accelrte.png",
    "blogo.png",
    "h.png",
    "nju.png",
    "para.png",
    "roju.png",
    "atelier.png",
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

    const handleMouseEnter = () => {
      if (scrollTween.current) {
        scrollTween.current.pause();
      }
    };

    const handleMouseLeave = () => {
      if (scrollTween.current) {
        scrollTween.current.play();
      }
    };

    const container = row.parentElement;
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (scrollTween.current) {
        scrollTween.current.kill();
      }
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [direction]);

  return (
    <div className="w-full overflow-hidden py-6 md:py-8">
      <div ref={rowRef} className="flex items-center gap-6">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="mx-2 md:mx-3 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            <Image
              src={`/affiliate-logos/${logo}`}
              alt={`Partner ${index + 1}`}
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto object-contain"
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
      className="relative w-full min-h-[100vh] flex flex-col items-center justify-between overflow-hidden bg-[#FAFAFA]"
      id={id}
    >
      <div
        className="w-full flex-1 flex flex-col items-center justify-center px-8 py-16 md:py-24 mt-[80px]"
        style={{
          backgroundImage: "url('/heroobg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#121212] max-w-lg text-center"
            style={{
              lineHeight: "1.2",
            }}
          >
            Crafting Bespoke Digital Solutions
          </h1>

          <h2 className="text-xl md:text-2xl text-[#FB4E29] font-bold mb-4 normal-case text-center">
            Empowering Businesses with Technology Integration
          </h2>

          <p className="text-base md:text-lg text-[#26120D] mb-10 text-center max-w-lg">
            Enabling businesses to establish bold digital identities, and create
            impactful digital solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center sm:min-w-[300px] min-w-full mx-auto">
            <Button
              variant="primary navigation"
              title="Get in Touch"
              link="/contact"
              rounded={true}
            />

            <Button
              variant="secondary navigation"
              title="See More"
              link="/#new-services"
              rounded={true}
            />
          </div>
        </div>
      </div>

      <div className="w-screen bg-[#FAFAFA] py-8 md:py-12">
        <LogoMarquee direction="left" />
      </div>
    </section>
  );
};

export default Testimony;
