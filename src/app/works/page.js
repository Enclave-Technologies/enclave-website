"use client";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import { Footer } from "../components/Footer";
import Link from "next/link";

const services = [
  "Website for my business",
  "Website Optimization",
  "Web Application",
  "Mobile Application",
  "e-Commerce Store",
  "SEO/SEM",
  "Logo Design",
];

const budgets = ["2-10K", "10-20K", "20-50K", "50-100K", "100K+"];

export default function Works() {
  // function onMouseUpdate(e) {
  //   const cursor = document.querySelectorAll("#works-cursor-button")[0];
  //   if (!cursor) return;
  //   cursor.style.left = e.clientX - 10 + "px";
  //   cursor.style.top = e.clientY - 10 + "px";
  // }

  // useEffect(() => {
  //   document.addEventListener("mouseenter", onMouseUpdate, false);
  //   document.addEventListener("mousemove", onMouseUpdate, false);

  //   const clickableAreas = document.getElementsByClassName(
  //     "works-clickable-area"
  //   );
  //   const worksCursorButton = document.getElementById("works-cursor-button");
  //   Array.from(clickableAreas).forEach((ca, i) => {
  //     ca.addEventListener("mouseover", () => {
  //       console.log("hover");
  //       worksCursorButton.classList.add("visible");
  //     });
  //   });
  // }, []);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-start text-black"
      style={{ minWidth: "100vw" }}
    >
      <div id="cursor" />
      <Navbar />
      <div className="w-full">
        <div className="sticky top-0 left-0 min-h-screen min-w-full flex flex-col items-center justify-center gap-24 z-0">
          <h1
            className="text-center font-bold text-6xl md:text-9xl"
            style={{ fontSize: "md: 20rem" }}
          >
            WORKS
          </h1>
          <Link href="#works" className="bouncing-arrow">
            <p className="text-white text-2xl">&#8650;</p>
          </Link>
        </div>
        <div
          id="works"
          className="z-40 w-full flex flex-col "
          style={{ backgroundColor: "#0B0B0B" }}
        >
          <WorkItem
            label="ATHENA.IO"
            image={"/work-items/work-item-1.png"}
            link="https://athena.io"
          />
          <WorkItem
            label="NBHD"
            image={"/work-items/work-item-2.png"}
            link="https://nbhd.social"
          />
          <WorkItem
            label="MOVEMENT"
            image={"/work-items/work-item-3.png"}
            link="https://movementfitnesshk.com"
          />
        </div>
      </div>
      <div id="works-cursor-button">
        <p>OPEN PROJECT</p>
      </div>
      <Footer />
    </main>
  );
}

const WorkItem = ({ index, link, label, image }) => {
  const [showCursor, setShowCursor] = useState(false);

  function onMouseUpdate(e) {
    const cursor = document.getElementById("works-cursor-button");
    if (!cursor) return;
    cursor.style.left = e.clientX + 20 + "px";
    cursor.style.top = e.clientY - 20 + "px";
  }

  function handleMouseOver() {
    const cursor = document.getElementById("works-cursor-button");
    cursor.style.display = "block";
    document.addEventListener("mousemove", onMouseUpdate, false);
  }

  function handleMouseOut() {
    const cursor = document.getElementById("works-cursor-button");
    cursor.style.display = "none";
    // document.removeEventListener("mousemove", onMouseUpdate, false);
  }

  return (
    <a
      href={link}
      className="sticky top-0 works-clickable-area cursor-pointer"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="flex items-center justify-center w-full min-h-screen backdrop-blur-3xl">
        <h1
          className="text-center uppercase absolute text-white z-50 mix-blend-exclusion font-bold text-6xl md:text-9xl"
          style={{ color: "#FF8D8D" }}
        >
          {label}
        </h1>
        <Image
          src={image}
          style={{ width: "auto", height: "80%" }}
          width={500}
          height={300}
          className="z-40"
          alt={`${label}-Cover`}
          unoptimized
        />
      </div>
    </a>
  );
};
