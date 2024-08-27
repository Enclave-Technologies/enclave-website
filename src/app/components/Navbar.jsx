"use client";
import Link from "next/link";
import { useEffect } from "react";

const { default: Image } = require("next/image");

export const Navbar = () => {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const headerHeight = document.querySelector("nav").offsetHeight / 3;
      console.log(headerHeight);
      const nav = document.querySelector("nav");
      const scrollY = window.scrollY;
      console.log(scrollY > headerHeight);
      if (scrollY > headerHeight) {
        // nav.classList.add("scrolled");
      } else {
        // nav.classList.remove("scrolled");
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
    <nav className="nav-container z-50">
      <ul className="desktop-nav w-full flex flex-row items-center justify-between rounded-full nav-inner-container">
        {/* Logo */}
        <div className="w-48">
          <Image src="/logo.svg" width={32} height={32} alt="Logo" />
        </div>
        {/* NavLinks */}
        <li className="flex flex-row gap-8 items-center">
          <Link href="#works">WORK</Link>
          <Link href="#services">SERVICES</Link>
          <Link href="#about">ABOUT</Link>
          <Link href="#faq">FAQ</Link>
        </li>
        <div className="w-48 flex flex-row justify-end">
          <button className="cta-button-nav">CONTACT US</button>
        </div>
        {/* Contact Us Button */}
      </ul>
      <ul className="mobile-nav relative">
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
            className="mobile-nav-links-container"
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
      </ul>
    </nav>
  );
};
