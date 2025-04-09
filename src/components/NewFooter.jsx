import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

import { Button } from "./Button";

const NewFooter = () => {
  return (
    <footer
      className="w-screen bg-[#FB4E29] relative md:fixed top-0 z-0 min-h-screen"
      id="footer"
    >
      <div className="max-w-7xl flex flex-col justify-center mx-auto px-8 py-12 min-h-screen">
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          <Link href="/" className="mb-4">
            <Image
              src="/enclave-studios-logo-white.svg"
              alt="Enclave Studios"
              width={60}
              height={60}
              className="mb-4"
            />
          </Link>
          <h3
            className="text-white text-[32px] md:text-[40px] lg:text-[48px] font-bold mt-2 mb-4 capitalize"
            style={{
              lineHeight: 1.2,
            }}
          >
            Start Building Magic Today
          </h3>
          <div className="flex flex-col md:flex-row gap-4 w-full items-start md:items-center justify-center">
            <Button
              variant="secondary footer-secondary"
              title="Reach us on Whatsapp"
              target="_blank"
              link="https://wa.me/85264006201"
              rounded={true}
            />
            <Button
              variant="primary footer-primary"
              title="Book Consultation"
              target="_blank"
              link="https://calendly.com/hello-enclave-studios/30min"
              rounded={true}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-0 md:gap-8">
          {/* Enclave Studios section */}
          <div className="col-span-1 lg:col-span-4 md:mt-0 mt-8">
            <h3 className="text-[#FFF] font-bold mb-6">Enclave Studios</h3>
            <ul className="md:space-y-5 space-y-3">
              <li>
                <Link
                  href="/works"
                  className="text-[#FFF] text-sm hover:text-[#FB4E29]"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#our-services"
                  className="text-[#FFF] text-sm hover:text-[#FB4E29]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#team"
                  className="text-[#FFF] text-sm hover:text-[#FB4E29]"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 lg:col-span-4 md:mt-0 mt-8">
            <h3 className="text-[#FFF] font-bold mb-6">Services</h3>
            <ul className="md:space-y-5 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-[#FFF] text-sm hover:text-[#FB4E29]"
                >
                  Branding
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[#FFF] text-sm hover:text-[#FB4E29]"
                >
                  Website Design
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[#FFF] text-sm hover:text-[#FB4E29]"
                >
                  Mobile App Design
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[#FFF] text-sm hover:text-[#FB4E29]"
                >
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[#FFF] text-sm hover:text-[#FB4E29]"
                >
                  Paid Ads
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Us section */}
          <div className="col-span-1 lg:col-span-4 md:mt-0 mt-8">
            <h3 className="text-[#FFF] font-bold mb-6">Contact Us</h3>
            <ul className="md:space-y-5 space-y-3">
              <li>
                <a
                  href="mailto:hello@enclave-studios.com"
                  className="text-[#FFF] text-sm hover:text-[#FB4E29]"
                >
                  hello@enclave-studios.com
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=64006201&text&type=phone_number&app_absent=0"
                  target="_blank"
                  className="text-[#FFF] text-sm hover:text-[#FB4E29]"
                >
                  Whatsapp: +852 5929 1909
                </a>
              </li>
              <li className="text-[#FFF] text-sm transform-none decoration-none">
                39/F, Dah Sing Financial Centre,
                <br />
                248 Queen&apos;s Road East, Wan Chai
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-px bg-gray-300 my-8"></div>
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
          <div className="">
            <p className="text-[#FFF] text-xs text-center md:text-left">
              © {new Date().getFullYear()} Enclave Technologies Ltd. All rights
              reserved.
            </p>
          </div>
          <div className="flex space-x-4 md:mb-0 mb-4">
            <a
              href="https://www.instagram.com/enclave_studios_/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-[#FB4E29] transition-colors"
              aria-label="Instagram"
            >
              <FaSquareInstagram size={24} />
            </a>
            <a
              href="https://hk.linkedin.com/company/enclave-live"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-[#FB4E29] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
