import Image from "next/image";
import { Navbar } from "../Navbar/Navbar";
import Spline from "@splinetool/react-spline/next";
import Link from "next/link";
import { Button } from "../Button";

const heading = `We are a design and development 🍯 <br/> studio based in Hong 🇭🇰 Kong`;

const subheading =
  "Want to build a custom web or mobile application for your business? ";

export const Hero = () => {
  return (
    <section id="home-hero" className="relative">
      <div className="inner-container flex-col md:flex-row gap-16 md:pt-32">
        <div className="flex flex-col items-start gap-12 z-50">
          <div className="flex flex-col items-start gap-4">
            <h1 className="hero-title text-left flex flex-col">
              <span>Custom Technology Solutions</span> Launch and grow your
              business with our technology experts.{" "}
              {/* helping businesses launch and grow their digital presence.{" "} */}
            </h1>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <Button variant="primary" title={"Get In Touch"} link="/contact" />
            <Button variant="secondary" title={"Learn More"} link="#services" />
          </div>
        </div>
      </div>
    </section>
  );
};
