"use client";

import { useEffect, useState } from "react";

import Testimony from "../components/Home/testimony";
import NewHero from "../components/Home/new-hero";
import Steps from "../components/Home/steps";
import OurServices from "../components/Home/our-services";
import Team from "../components/Home/team";
import FAQs from "../components/Home/faq";
import Projects from "../components/Home/projects";
import NewServices from "../components/Home/new-services";

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

      <div
        style={{
          width: "100vw",
          backgroundImage: "url('/testimonials-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* <div style={{ height: "100vh" }} /> */}
        <NewHero />
        <Testimony id="testimony" />
      </div>

      <NewServices id="new-services" />
      <Projects id="projects" />
      <Steps id="steps" />
      {/* <Team id="team" /> */}
      <FAQs id="faqs" />
      <div id="footer" className="w-full h-screen" />
    </main>
  );
}
