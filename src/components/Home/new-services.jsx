import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

const NewServices = ({ id }) => {
  const marketingRef = useRef(null);
  const dataRef = useRef(null);
  const techRef = useRef(null);
  const containerRef = useRef(null);

  const services = {
    digital: {
      title: "Social Media Optimization",
      description:
        "We help you understand your audience and make data-driven decisions to grow your business.",
      services: [
        "LinkedIn Marketing",
        "Youtube Marketing",
        "Instagram Marketing",
        "Facebook Marketing",
      ],
      image: "/data-services.png",
    },
    seo: {
      title: "Search Engine Optimization",
      description:
        "Soluions to grow your visibility on Google and drive more organic traffic to your business.",
      services: [
        "Keyword Planning",
        "SEO strategization",
        "Content Creation",
        "Technical SEO",
      ],
      image: "/design-services.png",
    },
    development: {
      title: "Website Design & Development",
      description:
        "We help you integrate AI into your business to automate processes and grow your business.",
      services: [
        "Website Design",
        "Website Development",
        "Website Copywriting",
        "Deployment & Analytics",
      ],
      image: "/seo-services.png",
    },
  };

  useEffect(() => {
    const sections = [
      { ref: marketingRef, delay: 0 },
      { ref: dataRef, delay: 0.2 },
      { ref: techRef, delay: 0.4 },
    ];

    sections.forEach(({ ref, delay }) => {
      gsap.set(ref.current, { opacity: 0, y: 50 });

      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "top 60%",
          toggleActions: "play none none reverse",
          markers: false,
        },
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: delay,
        ease: "power2.out",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id={id}
      ref={containerRef}
      className="relative w-full min-h-screen bg-white overflow-hidden py-20 px-4 md:px-10"
    >
      <div className="relative z-10 w-full px-4 md:px-8">
        <div className="flex gap-16 flex-col justify-center items-center w-full">
          <div className="mb-8 lg:mb-0">
            <h4 className="text-[#FB4E29] text-lg font-medium mb-2 md:mb-4 text-center">
              Our Services
            </h4>
            <p className="text-2xl lg:text-4xl font-bold mb-0 md:mb-6 text-center max-w-lg mx-auto">
              Because Your Business Deserves the Best
            </p>
          </div>

          <div className="w-[80vw]">
            <div
              ref={marketingRef}
              className="space-y-6 flex flex-col md:flex-row gap-4 items-center justify-between w-full"
              id="marketing"
            >
              <Image
                src={services.seo.image}
                width={120}
                height={120}
                alt={services.seo.title}
                className="w-[50vh] h-[50vh] flex-1 object-contain"
              />

              <div className="flex-1">
                <h4 className="text-2xl md:text-4xl font-semibold mb-2">
                  {services.seo.title}
                </h4>
                <p className="text-base text-[#6E605D] mb-6 max-w-[400px]">
                  {services.seo.description}
                </p>

                {services.seo.services.map((service, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <IoMdCheckmarkCircleOutline color="#FB4E29" size={18} />
                    <span className="text-[#6E605D] text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              ref={dataRef}
              className="space-y-6 flex flex-col-reverse md:flex-row gap-4 items-center justify-between w-full"
              id="data"
            >
              <div className="flex-1">
                <h4 className="text-2xl md:text-4xl font-semibold mb-2">
                  {services.digital.title}
                </h4>
                <p className="text-base text-[#6E605D] mb-6 max-w-[400px]">
                  {services.digital.description}
                </p>

                {services.digital.services.map((service, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <IoMdCheckmarkCircleOutline color="#FB4E29" size={18} />
                    <span className="text-[#6E605D] text-sm">{service}</span>
                  </div>
                ))}
              </div>

              <Image
                src={services.digital.image}
                width={120}
                height={120}
                alt={services.digital.title}
                className="w-[50vh] h-[50vh] flex-1 object-contain"
              />
            </div>

            <div
              ref={techRef}
              className="space-y-6 flex flex-col md:flex-row gap-4 items-center justify-between w-full"
              id="technology"
            >
              <Image
                src={services.development.image}
                width={120}
                height={120}
                alt={services.development.title}
                className="w-[50vh] h-[50vh] flex-1 object-contain"
              />

              <div className="flex-1">
                <h4 className="text-2xl md:text-4xl font-semibold mb-2">
                  {services.development.title}
                </h4>
                <p className="text-base text-[#6E605D] mb-6 max-w-[400px]">
                  {services.development.description}
                </p>

                {services.development.services.map((service, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <IoMdCheckmarkCircleOutline color="#FB4E29" size={18} />
                    <span className="text-[#6E605D] text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewServices;
