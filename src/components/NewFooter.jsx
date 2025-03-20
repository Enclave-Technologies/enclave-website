import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

import { Button } from "./Button";

const NewFooter = () => {
  return (
    <footer className="px-8 py-12 w-full max-w-7xl mx-auto md:mb-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-0 md:gap-8 mb-10">
        <div className="col-span-1 lg:col-span-5">
          <Link href="/" className="mb-4">
            <Image
              src="/enclave-studios-logo.svg"
              alt="Enclave Studios"
              width={100}
              height={100}
              className="mb-4"
            />
          </Link>
          <p className="text-[#121212] mb-6 max-w-md">
            We are a data driven website design & development studio helping
            businesses launch and grow their digital presence.
          </p>

          <div className="flex justify-center w-fit">
            <Button
              variant="primary navigation"
              title="Book a Consultation"
              link="/contact"
              rounded={true}
            />
          </div>
        </div>

        <div className="block lg:col-span-2"></div>

        {/* Enclave Studios section */}
        <div className="col-span-1 lg:col-span-2 md:mt-0 mt-8">
          <h3 className="text-[#121212] font-bold text-lg mb-6">
            Enclave Studios
          </h3>
          <ul className="md:space-y-5 space-y-3">
            <li>
              <Link
                href="/services"
                className="text-[#26120D] text-sm hover:text-[#FB4E29]"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="/case-studies"
                className="text-[#26120D] text-sm hover:text-[#FB4E29]"
              >
                Client Stories
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-[#26120D] text-sm hover:text-[#FB4E29]"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us section */}
        <div className="col-span-1 lg:col-span-3 md:mt-0 mt-8">
          <h3 className="text-[#121212] font-bold text-lg mb-6">Contact Us</h3>
          <ul className="md:space-y-5 space-y-3">
            <li>
              <a
                href="mailto:hello@enclave.live"
                className="text-[#26120D] text-sm hover:text-[#FB4E29]"
              >
                hello@enclave.live
              </a>
            </li>
            <li>
              <a
                href="tel:+85259291909"
                className="text-[#26120D] text-sm hover:text-[#FB4E29]"
              >
                +852 5929 1909
              </a>
            </li>
            <li className="text-[#26120D] text-sm">
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
          <p className="text-[#1B0D09] text-xs text-center md:text-left">
            © {new Date().getFullYear()} Enclave Technologies Ltd. All rights
            reserved.
          </p>
        </div>
        <div className="flex space-x-4 md:mb-0 mb-4">
          <a
            href="https://www.instagram.com/enclave_studios_/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-[#FB4E29] transition-colors"
            aria-label="Instagram"
          >
            <FaSquareInstagram size={24} />
          </a>
          <a
            href="https://hk.linkedin.com/company/enclave-live"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-[#FB4E29] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
