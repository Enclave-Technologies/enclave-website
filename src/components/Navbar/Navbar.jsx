"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import { MdAddShoppingCart } from "react-icons/md";
import { LuWorkflow } from "react-icons/lu";
import { GiHamburger, GiHamburgerMenu, GiPublicSpeaker } from "react-icons/gi";
import Hamburger from "./Hamburger";

const links = [
  { title: "Home", link: "/" },
  { title: "Our Services", link: "/#services" },
  { title: "About Us", link: "/#ethos" },
  { title: "Portfolio", link: "/works" },
];

const { default: Image } = require("next/image");

export const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleNavMenu = () => {
    const linksContainer = document.getElementById(
      "mobile-nav-links-container"
    );
    linksContainer.classList.toggle("!hidden");
  };

  return (
    <nav
      className="nav-container"
      onMouseLeave={() => {
        setShowDropdown("");
      }}
    >
      <div className="nav-inner-container">
        <div className="min-w-40">
          <Link href="/">
            <Image
              className="enclave-logo"
              src="/enclave-studios-logo.svg"
              width={64}
              height={64}
              alt="Enclave_Logo_Light"
            />
          </Link>
        </div>
        <div className="mobile-nav">
          <div className="hamburger">
            <Hamburger
              isOpen={isOpen}
              toggleMenu={() => {
                console.log("OPen");
                setIsOpen(!isOpen);
              }}
            />
          </div>
        </div>
        {/* NavLinks */}
        <div className="desktop-nav">
          <div className="w-auto flex flex-row items-center gap-8 justify-center flex-1">
            {links.map((link, index) => (
              <Link
                href={link.link}
                key={index}
                className="hover:underline text-black"
                onMouseEnter={() => {
                  setShowDropdown(link.title);
                }}
              >
                {link.title}
              </Link>
            ))}
            {/* <Link href="#blog">Blog</Link> */}
          </div>
          <div className="min-w-40">
            <Button
              variant="primary navigation"
              link="/contact"
              title="Get In Touch"
              onClick={() => {}}
            />
          </div>
        </div>
        {/* Contact Us Button */}
      </div>
      <div
        className={`w-full shadow-md bg-white text-black transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col items-center space-y-6 py-6">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.link}>
                <p
                  className=""
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  {link.title}
                </p>
              </Link>
            </li>
          ))}
          <div className="min-w-40">
            <Button
              variant="primary"
              link="/contact"
              title="Get In Touch"
              onClick={() => {}}
            />
          </div>
        </ul>
      </div>
      <DropdownMenu showDropdown={showDropdown} />
    </nav>
  );
};

const DropdownMenu = ({ showDropdown }) => {
  return (
    <div
      className={`dropdown-menu ${
        showDropdown == "Our Services" ? "open" : "closed"
      }`}
    >
      <ServicesDropdown />
    </div>
  );
};

const ServicesDropdown = () => {
  const servicesList = [
    {
      group: "Design",
      services: [
        {
          title: "Web Design",
          icon: <img src="/icons/web-design.png" height={20} width={20} />,
        },
        {
          title: "Mobile Design",
          icon: <img src="/icons/mobile-design.png" height={20} width={20} />,
        },
      ],
    },
    {
      group: "Development",
      services: [
        {
          title: "Website Development",
          icon: (
            <img src="/icons/website-development.png" height={20} width={20} />
          ),
        },
        {
          title: "E-commerce Development",
          icon: (
            <img
              src="/icons/e-commerce-development.png"
              height={20}
              width={20}
            />
          ),
        },
        {
          title: "Web App Development",
          icon: (
            <img src="/icons/web-applications.png" height={20} width={20} />
          ),
        },
        {
          title: "Mobile App Development",
          icon: (
            <img src="/icons/mobile-applications.png" height={20} width={20} />
          ),
        },
      ],
    },
    {
      group: "Digital Marketing",
      services: [
        {
          title: "SEO",
          icon: (
            <img src="/icons/workflow-automation.png" height={20} width={20} />
          ),
        },
        {
          title: "Google Ads",
          icon: (
            <img src="/icons/marketing-automation.png" height={20} width={20} />
          ),
        },
        {
          title: "Social Media Marketing",
          icon: (
            <img src="/icons/sales-automation.png" height={20} width={20} />
          ),
        },
      ],
    },
    {
      group: "Growth Solutions",
      services: [
        {
          title: "Data Analytics",
          icon: (
            <img src="/icons/workflow-automation.png" height={20} width={20} />
          ),
        },
        {
          title: "Process Automation",
          icon: (
            <img src="/icons/marketing-automation.png" height={20} width={20} />
          ),
        },
      ],
    },
  ];

  return (
    <div className="max-w-[1920px] pt-16 pb-16 flex flex-row w-full justify-center gap-20">
      {servicesList.map((serviceGroup, index) => (
        <div key={index} className="min-w-40 flex flex-col gap-6">
          {/* Heading */}
          <h4 className="text-[20px] font-semibold text-black">
            {serviceGroup.group}
          </h4>
          <div className="flex flex-col gap-2">
            {serviceGroup.services.map((service, index) => {
              return (
                <div key={index} className="flex flex-row gap-2 items-center">
                  {service.icon}
                  <a
                    className="text-black hover:underline font-light !px-0"
                    href="/"
                  >
                    {service.title}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
