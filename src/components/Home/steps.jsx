import { stepsData } from "../../data/steps";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const StepCard = ({ step, index }) => (
  <div className="flex flex-col md:flex-row items-start p-0 w-full h-auto md:h-[200px] bg-gradient-to-r from-white/40 to-white/10 backdrop-blur-[15px] shadow-[0px_0px_15px_rgba(0,0,0,0.2)] rounded-[12px] transition-transform duration-300 hover:scale-[1.02]">
    <div className="w-full md:w-[200px] h-[200px] bg-gray-100 rounded-t-[12px] md:rounded-l-[12px]">
      <Image
        src={step.image}
        width={200}
        height={200}
        alt={step.title}
        className="w-full h-full object-cover rounded-t-[12px] md:rounded-tr-none md:rounded-l-[12px]"
      />
    </div>
    <div className="flex-1 p-6">
      <h3 className="text-[22px] font-bold mb-3">{step.title}</h3>
      <p className="text-[#6E605D] text-sm leading-relaxed">
        {step.description}
      </p>
    </div>
  </div>
);

const BackgroundPattern = () => (
  <div className="absolute left-0 top-0 w-full md:w-2/5 h-full">
    <div className="absolute inset-0 bg-[linear-gradient(106.81deg,#29FB4E_0%,#29D6FB_47.5%,#4E29FB_100%)] opacity-10" />
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `url('/steps-bg.png')`,
        backgroundSize: "600px 600px",
        backgroundPosition: "left top",
        backgroundRepeat: "repeat",
      }}
    />
  </div>
);

const Steps = ({ id }) => {
  const stepsRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = stepsRef.current.querySelectorAll(".step-card");

    // Set initial state
    gsap.set(cards, { opacity: 0, y: 50 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 130%",
        end: "+=300",
        toggleActions: "play none none none",
      },
    });

    tl.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id={id}
      ref={containerRef}
      className="relative w-full min-h-screen bg-white overflow-hidden py-32 px-4 md:px-10"
    >
      <BackgroundPattern />

      <div className="relative z-10 mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-16">
          <div className="w-full lg:w-2/5 mb-8 lg:mb-0">
            <h4 className="text-[#FB4E29] text-lg font-medium mb-2 md:mb-4">
              Our Process
            </h4>
            <h2 className="text-4xl lg:text-5xl font-medium mb-0 md:mb-6 capitalize">
              The 3 Magic Steps
            </h2>
          </div>

          <div className="w-full lg:w-3/5">
            <p className="text-[#6E605D] text-lg leading-relaxed mb-12 md:mb-16 max-w-3xl">
              We employ a 3-step process led by strategy and design thinking
              followed by development and result measurement to continually
              refine your product and deliver the best possible experience to
              your end users.
            </p>

            <div ref={stepsRef} className="space-y-6">
              {stepsData.map((step, index) => (
                <div key={step.id} className="step-card">
                  <StepCard step={step} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
