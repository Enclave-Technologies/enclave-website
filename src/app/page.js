"use client";
import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Home/hero";
import { Works } from "./components/Home/works";
import { Services } from "./components/Home/services";
import { CTA } from "./components/Home/cta";
import { Footer } from "./components/Footer";
import { Quote } from "./components/Home/quote";
import { useEffect, useState } from "react";
import { Partners } from "./components/Home/partners";

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);

  function onMouseUpdate(e) {
    const cursor = document.querySelectorAll(".cursor")[0];
    cursor.style.left = e.clientX - 10 + "px";
    cursor.style.top = e.clientY - 10 + "px";
  }

  useEffect(() => {
    document.addEventListener("mouseenter", onMouseUpdate, false);
    document.addEventListener("mousemove", onMouseUpdate, false);
    // document.querySelectorAll("button").forEach((button) => {
    //   button.addEventListener("mouseover", () => {
    //     console.log(document.getElementsByClassName("cursor")[0]);
    //     document
    //       .getElementsByClassName("cursor")[0]
    //       .classList.add("cursor-hover");
    //   });
    //   button.addEventListener("mouseout", () => {
    //     document
    //       .getElementsByClassName("cursor")[0]
    //       .classList.remove("cursor-hover");
    //   });
    // });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-black">
      <div className="cursor" />
      <Navbar />
      <Hero />
      <Partners id="partners" />
      <Works id={"works"} />
      {/* <section>
        <h3>Empowering Businesses & Individuals</h3>
        <h2>Strategy 2 Delivery</h2>
      </section> */}
      <Services id="services" />
      <CTA />
      <Quote id="about" />
      <Footer />
    </main>
  );
}
