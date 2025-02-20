import { Navbarr } from "../Navbar/Navbarr";
import { Button } from "../Button";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const NewHero = () => {
  const scrollTextRef = useRef(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const navContainerRef = useRef(null);
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [isFooter, setIsFooter] = useState(false);

  useEffect(() => {
    const scrollText = scrollTextRef.current;
    if (scrollText) {
      const textWidth = scrollText.offsetWidth;
      scrollText.style.setProperty("--text-width", `${textWidth}px`);
    }

    // Create the collapse timeline
    const collapseTl = gsap.timeline({
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
          heroRef.current.style.opacity = "100";
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
          }

          if (scrollTextRef.current) {
            scrollTextRef.current.style.opacity = Math.max(
              0,
              1 - progress * 1.5
            );
          }

          setShowStickyNav(progress >= 0.99);
        },
      },
    });

    // Create the expand timeline for the footer
    const expandTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#footer",
        start: "top bottom",
        end: "top top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          if (progress > 0) {
            // Make hero visible again at footer
            heroRef.current.style.position = "fixed";
            heroRef.current.style.top = "auto";
            heroRef.current.style.bottom = "0";
            heroRef.current.style.transform = "none";
            heroRef.current.style.zIndex = "40";
            heroRef.current.style.opacity = "100";

            setIsFooter(true);

            // Expand from 80px to full height
            const newHeight = gsap.utils.interpolate(
              80,
              window.innerHeight,
              progress
            );
            heroRef.current.style.height = `${newHeight}px`;
            heroRef.current.style.backgroundColor = `rgba(255, 242, 237, ${progress})`;
            heroRef.current.style.opacity = "100";

            if (contentRef.current) {
              contentRef.current.style.opacity = progress;
              contentRef.current.style.transform = `translateY(${
                30 - progress * 30
              }px)`;
            }

            if (navContainerRef.current) {
              navContainerRef.current.style.background = `linear-gradient(113.44deg, rgba(255, 255, 255, ${
                0.4 + progress * 0.2
              }) 22.6%, rgba(255, 255, 255, ${0.1 + progress * 0.15}) 92.47%)`;
            }

            if (scrollTextRef.current) {
              scrollTextRef.current.style.opacity = progress;
            }

            setShowStickyNav(false);
          } else {
            // When scrolling back up from footer
            heroRef.current.style.position = "fixed";
            heroRef.current.style.top = "0";
            heroRef.current.style.bottom = "auto";
            heroRef.current.style.height = "80px";
            heroRef.current.style.zIndex = "40";
            heroRef.current.style.opacity = "0";

            setIsFooter(false);

            if (contentRef.current) {
              contentRef.current.style.opacity = 0;
            }
            if (scrollTextRef.current) {
              scrollTextRef.current.style.opacity = 0;
            }

            setShowStickyNav(true);
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
        className="fixed top-0 left-0 w-full"
        style={{
          height: "100vh",
          zIndex: isFooter ? 40 : showStickyNav ? -1 : 40,
          opacity: showStickyNav && !isFooter ? 0 : 100,
          pointerEvents: showStickyNav && !isFooter ? "none" : "auto",
          visibility: showStickyNav && !isFooter ? "hidden" : "visible",
          backgroundColor: "rgb(255, 242, 237)",
        }}
      >
        <div
          ref={navContainerRef}
          className="absolute inset-0 z-[40] rounded-[48px] mx-6 my-4 flex items-center"
          style={{
            background:
              "linear-gradient(113.44deg, rgba(255, 255, 255, 0.4) 22.6%, rgba(255, 255, 255, 0.1) 92.47%)",
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(12px)",
            height: "calc(100% - 32px)",
          }}
        >
          <div className="w-full h-[80px] absolute px-8 top-4 left-0 right-0 z-[45]">
            <Navbarr />
          </div>

          <div className="relative z-[41] w-full h-full flex flex-col pointer-events-auto">
            <div
              ref={contentRef}
              className="hero-content flex-1 flex items-end pointer-events-auto"
            >
              {!isFooter ? (
                <div className="px-6 md:px-16 lg:px-24 pb-8 md:pb-24 flex w-full justify-between items-end pointer-events-auto">
                  <div className="max-w-[1920px] pointer-events-auto">
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
                        Digital Marketing and Data Consulting studio helping
                        business grow with data-backed solutions.
                      </motion.p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="mt-8 max-w-[80%] md:max-w-xs pl-4 md:pl-0 z-[42] relative pointer-events-auto"
                    >
                      <Button
                        variant="primary navigation"
                        title="Book Consultation"
                        link="/contact"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="z-[42] relative pointer-events-auto"
                  >
                    <Link
                      href="/#testimony"
                      className="flex justify-center items-center hover:scale-110 transition-transform duration-300 w-8 md:w-12"
                    >
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="46"
                          height="46"
                          rx="23"
                          stroke="#FB4E29"
                          strokeWidth="2"
                        />
                        <path
                          d="M24 19.3333V28.6666"
                          stroke="#FB4E29"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M28.6673 24L24.0007 28.6667L19.334 24"
                          stroke="#FB4E29"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              ) : (
                <div className="px-6 md:px-16 lg:px-24  pb-8 md:pb-24 flex flex-col w-full justify-center items-center gap-8">
                  <div className="flex w-full justify-between items-end">
                    <div className="md:max-w-[1920px] max-w-full flex-1 flex flex-col">
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
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mt-0 md:mt-8 max-w-[80%] md:max-w-xs pl-4 md:pl-0"
                      >
                        <Button
                          variant="primary navigation"
                          title="Book Consultation"
                          link="/contact"
                        />
                      </motion.div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                      <Link
                        target="_blank"
                        href="https://www.instagram.com/enclave_studios_/"
                      >
                        <GrInstagram size={30} />
                      </Link>
                      <Link
                        target="_blank"
                        href="https://hk.linkedin.com/company/enclave-live"
                      >
                        <FaLinkedin size={30} />
                      </Link>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-[#121212]" />

                  <div className="flex w-full justify-between items-center flex-col md:flex-row">
                    <p className="text-sm text-[#121212] flex gap-4 items-center">
                      <a href="mailto:hello@enclave.live">hello@enclave.live</a>
                      <a href="tel:+85259291909">+852 5929 1909</a>
                    </p>
                    <p className="text-sm text-[#121212] text-center">
                      © {new Date().getFullYear()} Enclave Technologies Ltd. All
                      rights reserved.
                    </p>
                  </div>
                </div>
              )}
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

      {showStickyNav && !isFooter && (
        <div
          className="fixed top-4 left-0 right-0 z-50 mx-6 rounded-[48px] h-[80px] transition-all duration-300"
          style={{
            background:
              "linear-gradient(113.44deg, rgba(255, 255, 255, 0.6) 22.6%, rgba(255, 255, 255, 0.25) 92.47%)",
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="w-full h-full px-8 flex items-center">
            <Navbarr />
          </div>
        </div>
      )}
    </>
  );
};

export default NewHero;
