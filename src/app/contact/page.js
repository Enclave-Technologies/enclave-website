"use client";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";

const services = [
  "Site from scratch",
  "UX/UI Design",
  "e-Commerce Store",
  "No-code site",
  "Website Optimization",
  "SEO/SEM",
  "Mobile Development",
];

const budget = ["<1K", "1-5K", "5-10K", "10-20K", "20-50K", "50-100K", "100K+"];

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
    <main className="flex min-h-screen flex-col items-center justify-start text-black">
      <div id="cursor" />
      <Navbar />
      <section className="w-full flex flex-col items-center">
        <div className="inner-container min-h-screen flex flex-col items-start justify-center gap-48 !pr-96">
          <h1 className="text-7xl font-bold pt-48">
            Hey! Tell us all the
            <br /> things 👋
          </h1>
          <form className="text-2xl">
            <div className="flex flex-col gap-32">
              <div>
                <p className="pb-16">I’m Interested in...</p>
                <div className="flex flex-wrap gap-8">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="contact-col px-4 py-2 border-black border-2 rounded-full"
                    >
                      <label>{service}</label>
                    </div>
                  ))}
                </div>
              </div>
              <textarea
                placeholder="Your Name"
                className="bg-transparent border-b-2 max-w-2xl"
              />
              <textarea
                placeholder="Email"
                className="bg-transparent border-b-2 max-w-2xl"
              />
              <textarea
                placeholder="Tell us about your project"
                className="bg-transparent border-b-2 max-w-2xl"
              />
              <div>
                <p className="pb-12">Project Budget (USD)</p>
                <div className="flex flex-wrap gap-8">
                  {budget.map((service, index) => (
                    <div
                      key={index}
                      className="contact-col px-4 py-2 border-black border-2 rounded-full"
                    >
                      <label>{service}</label>
                    </div>
                  ))}
                </div>
              </div>
              <input type="file" />
              <button className="big-cta-button !py-24 !text-4xl !px-40">
                Send Request
              </button>
              <p className="text-sm">
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
