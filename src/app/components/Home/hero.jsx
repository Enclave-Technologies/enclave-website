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
    <section id="home-hero" className="md:p-24">
      <Image
        src={HeroImage}
        // "/hero-image.png"
        width={600}
        height={600}
        style={{ opacity: 0.2 }}
        alt="Web Design"
        className="hero-image absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50"
      />
      <div className="inner-container !overflow-visible">
        <div className="flex flex-col items-center gap-12 z-50 w-full">
          <div className="flex flex-col items-center gap-4">
            <h1 className="hero-title text-center">
              Application Design <br /> & Development Studio
            </h1>
            <h2 className="hero-subheading">{subheading}</h2>
          </div>
          {/* <div className="flex flex-row gap-4">
            <Link href={calendlyBookingLink}>
              <button className="hero-primary-btn">
                <span className="hero-primary-text-container">
                  <span className="hero-primary-button-text">
                    Let&apos;s talk
                  </span>
                  <span className="hero-primary-text">Let&apos;s talk</span>
                </span>
              </button>
            </Link>
            <a href="/works">
              <button className="secondary-btn">
                <span className="cta-button-text-container">
                  <span className="cta-button-text !underline">
                    View Portfolio
                  </span>
                  <span className="cta-button-text !no-underline">
                    View Portfolio
                  </span>
                </span>
              </button>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};
