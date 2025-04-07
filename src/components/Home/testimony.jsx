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
      className="relative w-full min-h-[100vh] flex flex-col gap-16 items-center justify-between overflow-hidden bg-[#FAFAFA]"
      id={id}
    >
      <div
        className="w-full flex flex-col items-center justify-center !px-0 md:px-8 py-16 md:py-16 !pb-0 mt-[80px]"
        style={{
          // backgroundImage: "url('/heroobg.png')",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          width: "100vw",
        }}
      >
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center justify-center gap-6 px-8">
            <h1
              className="text-[40px] md:text-[56px] lg:text-[72px] font-bold mb-6 text-[#121212] max-w-4xl text-center"
              style={{
                lineHeight: "1.2",
              }}
            >
              Award-Winning Website Development Studio
            </h1>
            <h2 className="text-[20px] md:text-[24px] lg:text-[28px] text-[#FB4E29] font-bold mb-4 normal-case text-center">
              Digital Marketing Solutions To Supercharge Your Business
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 justify-center  mx-auto">
            <Button
              variant="secondary"
              title="Get a Free Quote"
              link="/contact"
              rounded={true}
            />
          </div>
        </div>
      </div>
      <div className="w-screen bg-[#FAFAFA]">
        <LogoMarquee direction="left" />
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-6">
        {[
          // "google.png",
          // "aws.png",
          "payphone.png",
          "movement.png",
          // "meta.png",
          "figma.png",
          "webflow.png",
          // "semrush.png",
          // "wix.png",
          "xcelerate.png",
          // "first.png",
          // "accelrte.png",
          // "blogo.png",
          // "h.png",
          // "nju.png",
          // "para.png",
          // "roju.png",
          "atelier.png",
        ].map((logo, index) => (
          <div key={index} className="mx-2 md:mx-3 flex-shrink-0 opacity-70">
            <Image
              src={`/affiliate-logos/${logo}`}
              alt={`Partner ${index + 1}`}
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto object-contain grayscale"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimony;
