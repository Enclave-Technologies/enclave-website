import Image from "next/image";
import { Navbar } from "../Navbar";
import Spline from "@splinetool/react-spline/next";
import Link from "next/link";
import { calendlyBookingLink, contactLink } from "@/app/utils/links";
import HeroImage from "../../../../public/hero-image.png";
import { Button } from "../Button";

const heading = `We are a design and development 🍯 <br/> studio based in Hong 🇭🇰 Kong`;

const subheading =
  "Want to build a custom web or mobile application for your business? ";

export const Hero = () => {
  return (
    <section id="home-hero" className="relative md:p-24 !overflow-hidden">
      <div className="inner-container !overflow-visible">
        <div className="flex flex-col items-center gap-4 z-50 w-full">
          <div className="flex flex-col items-center gap-4">
            <h1 className="hero-title text-center">
              Technology solutions to take your business to the next level
            </h1>
          </div>
          <div className="flex flex-row gap-4">
            <Button variant="primary" title={"Get In Touch"} link="/contact" />
          </div>
        </div>
      </div>
      <Image
        src={HeroImage}
        // "/hero-image.png"
        width={900}
        height={900}
        style={{ opacity: 0.2 }}
        alt="Web Design"
        className="absolute -bottom-40 -right-40 hero-image z-0 opacity-100"
      />
    </section>
  );
};
