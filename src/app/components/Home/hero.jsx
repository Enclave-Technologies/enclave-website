import Image from "next/image";
import { Navbar } from "../Navbar";
import Spline from "@splinetool/react-spline/next";
import Link from "next/link";
import { calendlyBookingLink } from "@/app/utils/links";

const heading = "Award Winning Technology Studio";
const heading2 = "Specializing at Design & Development";

const subheading = "Building Modern & High Performing Software Solutions";

export const Hero = () => {
  return (
    <section id="home-hero" className="md:p-24">
      <div className="inner-container">
        <div className="flex flex-col items-start gap-12 z-50 w-full">
          <div className="flex flex-col items-start gap-4">
            <h1 className="hero-title">
              {heading} <br></br> {heading2}
            </h1>
            <h2 className="hero-subheading">{subheading}</h2>
          </div>
          <div className="flex flex-row gap-4">
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
          </div>
        </div>
        <div className="absolute w-full lg:w-1/2 top-0 right-0 md:-right-20 h-full md:h-full flex items-end opacity-60 md:opacity-100">
          <Spline scene="https://prod.spline.design/BhR44b0vb3cCVn0w/scene.splinecode" />
        </div>
      </div>
    </section>
  );
};
