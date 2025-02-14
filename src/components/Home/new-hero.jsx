"use client";
import Image from "next/image";
import { Navbarr } from "../Navbar/Navbarr";
import Link from "next/link";
import { Button } from "../Button";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const NewHero = () => {
  const scrollTextRef = useRef(null);

  useEffect(() => {
    const scrollText = scrollTextRef.current;
    if (scrollText) {
      const textWidth = scrollText.offsetWidth;
      scrollText.style.setProperty("--text-width", `${textWidth}px`);
    }
  }, []);

  return (
    <section className="relative w-screen min-h-screen bg-[#FFF2ED] overflow-hidden p-0">
      <div
        className="absolute inset-0 z-10 rounded-[48px] mx-6 my-4"
        style={{
          background:
            "linear-gradient(113.44deg, rgba(255, 255, 255, 0.4) 22.6%, rgba(255, 255, 255, 0.1) 92.47%)",
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(12px)",
        }}
      />

      <div className="absolute inset-0 -top-[200px] flex items-center pointer-events-none select-none">
        <div
          ref={scrollTextRef}
          className="whitespace-nowrap animate-scroll-text text-[160px] md:text-[200px] font-bold text-[#FB4E29] tracking-tight pl-4 md:pl-0"
        >
          • Design • Development • Analytics & Optimization&nbsp;
        </div>
      </div>

      <div className="relative z-20 w-full h-screen flex flex-col">
        <div className="absolute top-3 left-0 right-0 bg-transparent">
          <Navbarr />
        </div>

        <div className="flex-1 flex items-end">
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
                  className="text-base md:text-lg font-normal leading-relaxed max-w-[420px] px-4 md:pl-0"
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
    </section>
  );
};

export default NewHero;
