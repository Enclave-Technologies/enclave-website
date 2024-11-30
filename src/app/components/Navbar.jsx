"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { calendlyBookingLink, contactLink } from "../utils/links";
import { Button } from "./Button";
import { MdAddShoppingCart } from "react-icons/md";
import { LuWorkflow } from "react-icons/lu";
import { GiPublicSpeaker } from "react-icons/gi";

const links = [
  { title: "Our Services", link: "/#services" },
  { title: "About Us", link: "/#ethos" },
  { title: "Portfolio", link: "/works" },
  { title: "Blog", link: "/blog" },
];

const { default: Image } = require("next/image");

export const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState("");

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
    <nav
      className="nav-container z-50 md:px-20 bg-white"
      onMouseLeave={() => {
        setShowDropdown("");
      }}
    >
      <ul className="desktop-nav w-full flex flex-row items-center justify-between rounded-full nav-inner-container">
        {/* Logo */}
        <div className="min-w-40">
          <Link href="/">
            <Image
              src="/logo-dark.svg"
              width={32}
              height={32}
              alt="Enclave_Logo_Light"
            />
          </Link>
        </div>
        {/* NavLinks */}
        <div className="w-auto flex flex-row items-center gap-2 justify-center flex-1">
          {links.map((link, index) => (
            <Link
              href={link.link}
              key={index}
              className="hover:underline text-black"
              onMouseEnter={() => {
                setShowDropdown("services");
              }}
            >
              {link.title}
            </Link>
          ))}
          {/* <Link href="#blog">Blog</Link> */}
        </div>
        <div className="min-w-40">
          <Button
            variant="primary"
            link="/contact"
            title="Get in touch"
            onClick={() => {}}
          />
        </div>
        {/* Contact Us Button */}
      </ul>
      <DropdownMenu showDropdown={showDropdown} />
    </nav>
  );
};

const DropdownMenu = ({ showDropdown }) => {
  return (
    <div className={`dropdown-menu ${showDropdown ? "open" : "closed"}`}>
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
        {
          title: "UI/UX Design",
          icon: <img src="/icons/ui-ux-design.png" height={20} width={20} />,
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
          title: "Web Applications",
          icon: (
            <img src="/icons/web-applications.png" height={20} width={20} />
          ),
        },
        {
          title: "Mobile Applications",
          icon: (
            <img src="/icons/mobile-applications.png" height={20} width={20} />
          ),
        },
      ],
    },
    {
      group: "Automations",
      services: [
        {
          title: "Workflow Automation",
          icon: (
            <img src="/icons/workflow-automation.png" height={20} width={20} />
          ),
        },
        {
          title: "Marketing Automation",
          icon: (
            <img src="/icons/marketing-automation.png" height={20} width={20} />
          ),
        },
        {
          title: "Sales Automation",
          icon: (
            <img src="/icons/sales-automation.png" height={20} width={20} />
          ),
        },
        {
          title: "E-commerce Automation",
          icon: <MdAddShoppingCart size={20} />,
        },
      ],
    },
  ];
  return (
    <div className="max-w-[1920px] pt-4 pb-12 flex flex-row w-full justify-center gap-20">
      {servicesList.map((serviceGroup) => (
        <div className="min-w-40 flex flex-col gap-4">
          {/* Heading */}
          <h4 className="text-[20px] font-semibold text-black">
            {serviceGroup.group}
          </h4>
          <div className="flex flex-col gap-2">
            {serviceGroup.services.map((service, index) => {
              return (
                <div className="flex flex-row gap-2 items-center">
                  {service.icon}
                  <a className="text-black hover:underline !px-0" href="/">
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
