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
      <div className="inner-container flex-col gap-16">
        <div className="flex flex-col items-center gap-8 z-50 w-full">
          <div className="flex flex-col items-center gap-4">
            <h1 className="hero-title">
              Tech solutions to <span>accelerate your business growth</span>
            </h1>
            <h3 className="text-center">
              We take care of your tech needs so you can focus on growing your
              business.
            </h3>
          </div>
          <Button variant="primary" title={"Get In Touch"} link="/contact" />
        </div>
        <Image
          src={"/hero-image-2.png"}
          // "/hero-image.png"
          width={400}
          height={400}
          style={{
            objectFit: "cover",
            width: "100%",
            aspectRatio: 2.5 / 1,
            borderRadius: 12,
          }}
          alt="Web Design"
          className="z-0 opacity-100"
        />
      </div>
    </section>
  );
};
