"use client";
import Link from "next/link";
import { useEffect } from "react";
import { calendlyBookingLink, contactLink } from "../utils/links";
import { Button } from "./Button";

const { default: Image } = require("next/image");

export const Navbar = () => {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const headerHeight = document.querySelector("nav").offsetHeight / 3;
      const nav = document.querySelector("nav");
      const scrollY = window.scrollY;
      if (scrollY > headerHeight) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });
  });

  const toggleNavMenu = () => {
    const linksContainer = document.getElementById(
      "mobile-nav-links-container"
    );
    linksContainer.classList.toggle("!hidden");
  };

  return (
    <nav className="nav-container z-50 md:px-24 ">
      <ul className="desktop-nav w-full flex flex-row items-center justify-between rounded-full nav-inner-container">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.svg"
            width={32}
            height={32}
            alt="Enclave_Logo_Light"
            className="mix-blend-exclusion"
          />
        </Link>
        {/* NavLinks */}
        <div className="w-auto flex flex-row items-center gap-2 justify-end flex-1">
          <Link href="/#services" className="hover:underline">
            Services
          </Link>
          <Link href="/works" className="hover:underline">
            Works
          </Link>
          {/* <Link href="#blog">Blog</Link> */}
          <Button
            variant="primary"
            link="/contact"
            title="Let's talk"
            onClick={() => {}}
          />
        </div>
        {/* Contact Us Button */}
      </ul>
      {/* <ul className="mobile-nav relative">
        <div className="w-48">
          <Image src="/logo.svg" width={32} height={32} alt="Logo" />
        </div>
        <div
          className="hamburger-container cursor-pointer"
          onClick={toggleNavMenu}
        >
          <button className="hamburger">
            <div className="hamburger-line-1" />
            <div className="hamburger-line-1" />
          </button>
          <div
            id="mobile-nav-links-container"
            className="!hidden mobile-nav-links-container"
          >
            <ul className="flex flex-col gap-4">
              <li className="text-white text-center">
                <Link href="#works">WORK</Link>
              </li>
              <li className="text-white text-center">
                <Link href="#services">SERVICES</Link>
              </li>
              <li className="text-white text-center">
                <Link href="#about">ABOUT</Link>
              </li>
              <li className="text-white text-center">
                <Link href="#faq">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
      </ul> */}
    </nav>
  );
};
