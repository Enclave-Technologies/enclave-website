"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../Button";
import Image from "next/image";
import Hamburger from "./Hamburger";

const links = [
  { title: "Digital Marketing", link: "/#marketing" },
  { title: "Data Analytics", link: "/#data" },
  { title: "AI Integrations", link: "/#technology" },
  { title: "About Us", link: "/#team" },
  { title: "FAQs", link: "/#faqs" },
];

export const Navbarr = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full flex items-center justify-between px-0 md:px-10">
        <div className="w-[64px]">
          <Link href="/">
            <Image
              className="enclave-logo"
              src="/enclave-studios-logo.svg"
              width={64}
              height={64}
              alt="Enclave Studios"
              priority
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-center flex-1 space-x-12">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="text-black hover:text-[#FB4E29] transition-colors duration-200 text-sm font-medium"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="hidden md:block w-[140px]">
          <Button
            variant="primary navigation"
            title="Contact Us"
            link="/contact"
            rounded={true}
          />
        </div>

        <div className="md:hidden">
          <Hamburger isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
        </div>
      </div>

      <div
        className={`md:hidden fixed top-[-20px] left-[-24px] h-screen bg-white w-screen inset-0 transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          zIndex: 999,
          backdropFilter: "blur(15px)",
        }}
      >
        <div className="h-full mt-10  flex flex-col p-6">
          <div className="flex  w-full pb-8 px-8 flex-col items-center space-y-6 text-center pt-8">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-black hover:text-[#FB4E29] transition-colors duration-200"
              >
                {link.title}
              </Link>
            ))}
            <div className="w-full pt-4" onClick={() => setIsOpen(false)}>
              <Button
                variant="primary navigation"
                title="Contact Us"
                link="/contact"
                rounded={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
