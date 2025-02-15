"use client";

import { Works } from "../components/Home/works";
import { Services } from "../components/Home/services";
import { CTA } from "../components/Home/cta";
import { Footer } from "../components/Footer";
import { Quote } from "../components/Home/quote";
import { useEffect, useState } from "react";
import { Partners } from "../components/Home/partners";
import Ethos from "../components/Home/ethos";
import AboutUs from "../components/Home/about-us";

import Testimony from "../components/Home/testimony";
import NewHero from "../components/Home/new-hero";

// export const metadata = {
//   title: "Web Design & Development Studio",
// };

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);

  function onMouseUpdate(e) {
    const cursor = document.querySelectorAll(".cursor")[0];
    if (!cursor) return;
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
    <main className="flex min-h-screen flex-col items-center justify-between text-black relative">
      <div className="cursor" />
      <NewHero />

      <div className="services-section">
        <Testimony id="testimony" />
      </div>

      {/* <Works id="works" /> */}
      {/* <Partners id="partners" /> */}
      <Ethos id={"ethos"} />
      {/* <AboutUs id="about" /> */}
      <CTA />
      {/* <Quote id="about" /> */}
      <Footer />
      <div className="gradient" />
      {/* <section>
        <h3>Empowering Businesses & Individuals</h3>
        <h2>Strategy 2 Delivery</h2>
      </section> */}
    </main>
  );
}
