"use client";

import { useEffect, useState } from "react";

import Testimony from "../components/Home/testimony";
import Steps from "../components/Home/steps";
import Projects from "../components/Home/projects";
import NewServices from "../components/Home/new-services";
import { Navbarr } from "../components/Navbar/Navbarr";
import Team from "../components/Home/team";
import NewFooter from "../components/NewFooter";
import OurServices from "../components/Home/our-services";
import Chat from "../components/Home/chat";
import KPIs from "../components/Home/KPIs";
import Pricing from "../components/Home/Pricing";
import ScalingSections from "../components/Home/new-steps";

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
    <main className="flex min-h-screen flex-col items-center justify-between text-black relative home-font gap-32 bg-[#FAFAFA]">
      {/* <div className="cursor" /> */}
      <div className="z-10">
        <Navbarr />
        {/* <Chat /> */}

        <Testimony id="testimony" />
        <OurServices id="our-services" />
        <ScalingSections />
        <KPIs id="new-services" />
        <Team id="team" />
        <Projects id="projects" />
        <Pricing id="pricing" />
        <Steps id="steps" />
        {/* <NewServices id="new-services" /> */}
        {/* TODO: Add a 4 step process here */}
      </div>
      <div className="hidden md:flex min-h-screen w-full bg-transparent"></div>
      <NewFooter id="footer" />
    </main>
  );
}
