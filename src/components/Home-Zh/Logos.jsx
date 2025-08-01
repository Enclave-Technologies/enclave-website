import React from "react";
import Image from "next/image";

const Logos = () => {
  const logos = [
    {
      src: "/company-logos/logo-pcl.png",
      alt: "ParallelChain Lab",
      width: 180,
      height: 48,
    },
    {
      src: "/company-logos/logo-xcc.png",
      alt: "Xccelerate",
      width: 150,
      height: 48,
    },
    {
      src: "/company-logos/logo-fca.png",
      alt: "Eterna Luxe",
      width: 140,
      height: 48,
    },
    {
      src: "/company-logos/logo-atelier-shan.png",
      alt: "Atelier Shan",
      width: 80,
      height: 48,
    },
    {
      src: "/company-logos/logo-mvmt.png",
      alt: "Movement",
      width: 200,
      height: 48,
    },
    {
      src: "/company-logos/logo-nbhd-light.png",
      alt: "NBHD",
      width: 100,
      height: 48,
    },
    {
      src: "/company-logos/logo-push-light.png",
      alt: "Push",
      width: 100,
      height: 48,
    },
  ];

  return (
    <section className="w-full bg-[#FB4E29] overflow-hidden py-8 md:py-12 px-0">
      <div className="w-full overflow-hidden">
        <div
          className="flex w-[calc(200%+4rem)]"
          style={{ animation: "scroll 30s linear infinite" }}
        >
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center justify-center mx-8 shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center justify-center mx-8 shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Logos;
