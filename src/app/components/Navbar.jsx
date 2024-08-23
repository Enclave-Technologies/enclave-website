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

  return (
    <nav className="w-full px-48 h-28 sticky top-0 flex flex-row justify-center items-center">
      <ul className="w-full flex flex-row items-center justify-between rounded-full nav-inner-container">
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
    </nav>
  );
};
