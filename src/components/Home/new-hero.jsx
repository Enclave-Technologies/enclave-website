"use client";
import { Navbarr } from "../Navbar/Navbarr";
import { Button } from "../Button";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NewHero = () => {
  const scrollTextRef = useRef(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const scrollText = scrollTextRef.current;
    if (scrollText) {
      const textWidth = scrollText.offsetWidth;
      scrollText.style.setProperty("--text-width", `${textWidth}px`);
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".services-section",
        start: "top bottom",
        end: "top center",
        scrub: 0.5,
        pin: false,
        anticipatePin: 1,
        onUpdate: (self) => {
          setIsCollapsed(self.progress > 0.5);
        },
      },
    });

    // Animate the hero section
    tl.to(contentRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.3,
      ease: "power2.inOut",
    }).to(
      heroRef.current,
      {
        height: "80px",
        duration: 0.7,
        ease: "power3.inOut",
      },
      "-=0.2"
    );

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className={`relative top-0 left-0 w-full z-50 bg-[#FFF2ED] transition-colors duration-300 ${
        isCollapsed ? "bg-white" : "bg-[#FFF2ED]"
      }`}
      style={{ height: "100vh", overflow: "hidden" }}
    >
      {!isCollapsed && (
        <div
          className="absolute inset-0 z-10 rounded-[48px] mx-6 my-4"
          style={{
            background:
              "linear-gradient(113.44deg, rgba(255, 255, 255, 0.4) 22.6%, rgba(255, 255, 255, 0.1) 92.47%)",
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(12px)",
          }}
        />
      )}

      {!isCollapsed && (
        <div className="absolute inset-0 -top-[200px] flex items-center pointer-events-none select-none">
          <div
            ref={scrollTextRef}
            className="whitespace-nowrap animate-scroll-text text-[160px] md:text-[200px] font-bold text-[#FB4E29] tracking-tight pl-4 md:pl-0"
          >
            • Design • Development • Analytics & Optimization&nbsp;
          </div>
        </div>
      )}

      <div className="relative z-20 w-full h-full flex flex-col">
        <div className="absolute top-3 left-0 right-0 bg-transparent">
          <Navbarr isCollapsed={isCollapsed} />
        </div>

        <div ref={contentRef} className="flex-1 flex items-end">
          <div className="px-6 md:px-16 lg:px-24 pb-24">
            <div className="max-w-[1920px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg md:text-xl font-medium mb-6 text-[#FB4E29] pl-4 md:pl-0"
                >
                  • Enclave Studios •
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-base md:text-lg font-normal leading-relaxed max-w-[420px] pl-4 md:pl-0"
                >
                  We are a web design & development studio helping businesses
                  launch and grow their digital presence.
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-8 max-w-[80%] md:max-w-xs pl-4 md:pl-0"
              >
                <Button
                  variant="primary navigation"
                  title="Book Consultation"
                  link="/contact"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHero;
