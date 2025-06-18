"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import Image from "next/image";
import Hamburger from "./Hamburger";

const links = [
  { title: "Home", link: "/" },
  { title: "Works", link: "/#our-works" },
  { title: "Services", link: "/services" },
  { title: "About Us", link: "/about-us" },
];

export const Navbarr = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", navbarScroll);
    var prevScrollpos = window.pageYOffset;
    function navbarScroll() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0px";
      } else {
        document.getElementById("navbar").style.top = "-80px";
      }
      prevScrollpos = currentScrollPos;
    }
  }, []);

  return (
    <div
      id="navbar"
      className="fixed top-0 left-0 z-50 md:h-[56px] py-2 px-8 transition-all duration-300 flex justify-center max-w-screen w-full"
      style={{
        background: "#FAFAFA",
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="w-full h-full flex items-center max-w-screen md:max-w-7xl">
        <div className="w-full flex items-center justify-between md:px-0">
          <div className="w-[140px] relative z-[1001]">
            <Link href="/">
              <Image
                src="/enclave-logo-with-text.svg"
                width={106}
                height={24}
                alt="Enclave Studios"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1 space-x-12 relative z-[1001]">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="text-black hover:text-[#FB4E29] transition-colors duration-200 font-medium"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex h-[40px] w-auto relative z-[1001]">
            <Link
              href="https://calendly.com/hello-enclave-studios/free-consult"
              className="bg-[#FB4E29] hover:bg-[#fb7429] flex items-center justify-center h-full w-full text-white px-4 py-2 rounded-full transition-colors duration-200 text-base font-medium"
            >
              Book Appointment
            </Link>
          </div>

          <div className="md:hidden relative z-[1001]">
            <Hamburger isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
          </div>
        </div>

        <div
          className={`md:hidden fixed top-[-20px] left-0 h-[105vh] bg-white w-screen  transition-all duration-300 ease-in-out ${
            isOpen ? "translate-x-0 " : "translate-x-full"
          }`}
          style={{
            zIndex: 999,
            backdropFilter: "blur(15px)",
          }}
        >
          <div className="h-full mt-16  flex flex-col p-6">
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
                  title="Get In Touch"
                  link="/contact"
                  rounded={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
