"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../Button";
import Image from "next/image";
import Hamburger from "./Hamburger";

const links = [
  { title: "Digital Marketing", link: "/#marketing" },
  { title: "Website Design", link: "/#technology" },
  { title: "Data Analytics", link: "/#data" },
  { title: "About Us", link: "/#team" },
  { title: "FAQs", link: "/#faqs" },
];

export const Navbarr = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full flex items-center justify-between px-10">
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
        className={`md:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col p-6">
          <div className="flex justify-between items-center mb-12">
            <Image
              className="enclave-logo"
              src="/enclave-studios-logo.svg"
              width={64}
              height={64}
              alt="Enclave Studios"
            />
            <Hamburger isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
          </div>
          <div className="flex flex-col space-y-8">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-medium"
              >
                {link.title}
              </Link>
            ))}
            <div className="w-full max-w-[200px]">
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
