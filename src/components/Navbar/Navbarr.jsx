"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import Image from "next/image";
import Hamburger from "./Hamburger";

const links = [
  { title: "WORK", link: "/#works" },
  { title: "SERVICES", link: "/#services" },
  { title: "ABOUT", link: "/#about" },
  { title: "INSIGHTS", link: "/insights" },
];

export const Navbarr = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-6 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between">
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

        <div className="hidden md:flex items-center space-x-12">
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
            title="CONTACT US"
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
                title="CONTACT US"
                link="/contact"
                rounded={true}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
