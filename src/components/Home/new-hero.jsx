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
    <section className="relative min-h-screen bg-[#FFF2ED] overflow-hidden">
      {/* Background Text Animation */}
      <div className="absolute inset-0 flex items-center pointer-events-none select-none">
        <div
          ref={scrollTextRef}
          className="whitespace-nowrap animate-scroll-text text-[200px] font-bold text-[#FF634733] tracking-tight"
        >
          • Design • Development • Analytics & Optimization&nbsp;
        </div>
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16">
        <Navbarr />

        <div className="mt-32 md:mt-40 flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl font-medium mb-6"
            >
              • Enclave Studios •
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight"
            >
              We are a web design & development studio helping businesses launch
              and grow their digital presence.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              variant="primary navigation"
              title="Book Consultation"
              link="/contact"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
