import Image from "next/image";
import { Navbar } from "../Navbar";

export const Hero = () => {
  return (
    <section
      id="home-hero"
      className="relative flex flex-row items-center justify-center p-24"
    >
      <Image
        src="/hero-image.png"
        width={940}
        height={600}
        alt="Web Design"
        className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <h1 className="hero-title text-7xl font-bold z-10 text-center">
        WE ARE A DESIGN FIRST COMPANY, HELPING BUSINESSES BUILD WEBSITES THAT
        CONVERT
      </h1>
    </section>
  );
};
