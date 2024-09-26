import Image from "next/image";
import { Navbar } from "../Navbar";
import Spline from "@splinetool/react-spline/next";
import Link from "next/link";

export const Hero = () => {
  return (
    <section
      id="home-hero"
      className="relative flex flex-row items-center justify-center p-4 md:p-24"
    >
      {/* <Spline scene="https://prod.spline.design/3kAGWK74ivpJ8AXa/scene.splinecode" /> */}
      {/* <canvas id="web-gl-canvas" /> */}
      {/* <Image
        src="/hero-image.png"
        width={800}
        height={800}
        alt="Web Design"
        className="hero-image absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50"
      /> */}
      <img
        src="/hero-image.png"
        alt="Web Design"
        className="hero-image absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50"
        width={800}
        height={800}
      />
      <div className="flex flex-col items-center gap-16 z-50">
        <h1 className="hero-title">
          AWARD WINNING WEB AND MOBILE APPLICATION DEVELOPMENT
        </h1>
        {/* <div className="flex flex-row gap-4">
          <Link href="/contact">
            <button className="cta-button-nav !bg-black !border-black">
              <span className="cta-button-text-container">
                <span className="cta-button-text !text-white">
                  Let&apos;s talk
                </span>
                <span className="cta-button-text !text-white">
                  Let&apos;s talk
                </span>
              </span>
            </button>
          </Link>
          <a href="https://calendly.com/hello-enclave/30min">
            <button className="secondary-btn">
              <span className="cta-button-text-container">
                <span className="cta-button-text !underline">
                  Schedule a Call
                </span>
                <span className="cta-button-text !no-underline">
                  Schedule a Call
                </span>
              </span>
            </button>
          </a>
        </div> */}
      </div>
    </section>
  );
};
