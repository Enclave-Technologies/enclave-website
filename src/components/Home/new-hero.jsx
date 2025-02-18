"use client";
import { Navbarr } from "../Navbar/Navbarr";
import { Button } from "../Button";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NewHero = () => {
  const scrollTextRef = useRef(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const navContainerRef = useRef(null);

  useEffect(() => {
    const scrollText = scrollTextRef.current;
    if (scrollText) {
      const textWidth = scrollText.offsetWidth;
      scrollText.style.setProperty("--text-width", `${textWidth}px`);
    }

    // Create a single timeline for the collapse animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;

          const newHeight = gsap.utils.interpolate(
            window.innerHeight,
            80,
            progress
          );
          heroRef.current.style.height = `${newHeight}px`;
          heroRef.current.style.backgroundColor = `rgba(255, 242, 237, ${
            1 - progress
          })`;

          if (contentRef.current) {
            const contentOpacity = Math.max(0, 1 - progress * 1.5);
            contentRef.current.style.opacity = contentOpacity;
            contentRef.current.style.transform = `translateY(${
              -30 * progress
            }px)`;
          }

          if (navContainerRef.current) {
            navContainerRef.current.style.margin = `16px 24px`;
            navContainerRef.current.style.background = `linear-gradient(113.44deg, rgba(255, 255, 255, ${
              0.4 + progress * 0.2
            }) 22.6%, rgba(255, 255, 255, ${0.1 + progress * 0.15}) 92.47%)`;
            navContainerRef.current.style.backdropFilter = "blur(12px)";
            navContainerRef.current.style.boxShadow =
              "0px 0px 15px rgba(0, 0, 0, 0.2)";
          }

          if (scrollTextRef.current) {
            scrollTextRef.current.style.opacity = Math.max(
              0,
              1 - progress * 1.5
            );
          }
        },
      },
    });

    // Create a timeline to handle the navbar after the hero section
    gsap.timeline({
      scrollTrigger: {
        trigger: ".services-section",
        start: "top top",
        end: "bottom bottom",
        onEnter: () => {
          if (navContainerRef.current) {
            navContainerRef.current.style.position = "fixed";
            navContainerRef.current.style.top = "4px";
            navContainerRef.current.style.left = "0";
            navContainerRef.current.style.right = "0";
            navContainerRef.current.style.margin = "4px 6px";
          }
        },
        onLeaveBack: () => {
          if (navContainerRef.current) {
            navContainerRef.current.style.position = "absolute";
          }
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <div
        ref={heroRef}
        className="fixed top-0 left-0 w-full z-40 bg-[#FFF2ED]"
        style={{ height: "100vh" }}
      >
        <div
          ref={navContainerRef}
          className="absolute inset-0 z-50 rounded-[48px] mx-6 my-4 flex items-center transition-all duration-300"
          style={{
            background:
              "linear-gradient(113.44deg, rgba(255, 255, 255, 0.4) 22.6%, rgba(255, 255, 255, 0.1) 92.47%)",
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(12px)",
            height: "calc(100% - 32px)",
          }}
        >
          <div className="w-full h-[80px] absolute px-8 top-3 left-0 right-0">
            <Navbarr />
          </div>

          <div className="relative z-20 w-full h-full flex flex-col">
            <div
              ref={contentRef}
              className="hero-content flex-1 flex items-end"
            >
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
                      className="text-base text-[#121212] md:text-lg font-normal leading-relaxed max-w-[450px] pl-4 md:pl-0"
                    >
                      Technology consulting and implementation studio helping
                      businesses launch and grow their digital presence.
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

        <div
          ref={scrollTextRef}
          className="absolute inset-0 -top-[200px] flex items-center pointer-events-none select-none"
        >
          <div className="whitespace-nowrap animate-scroll-text text-[160px] md:text-[200px] font-bold text-[#FB4E29] tracking-tight pl-4 md:pl-0">
            • Design • Development • Analytics & Optimization&nbsp;
          </div>
        </div>
      </div>
      <div style={{ height: "10vh" }} />
    </>
  );
};

export default NewHero;
