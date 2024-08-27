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

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);

  function onMouseUpdate(e) {
    const cursor = document.getElementById("cursor");
    cursor.style.left = e.clientX - 10 + "px";
    cursor.style.top = e.clientY - 10 + "px";
  }

  useEffect(() => {
    document.addEventListener("mouseenter", onMouseUpdate, false);
    document.addEventListener("mousemove", onMouseUpdate, false);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-black">
      <div id="cursor" />
      <Navbar />
      <Hero />
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
